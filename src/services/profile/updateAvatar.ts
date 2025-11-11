import { supabaseBrowser } from '@/supabase/client';

export default async function updateAvatar(avatarData: AvatarData) {
  const { id, avatar: oldAvatarUrl, newAvatar, color } = avatarData;

  if (!id) throw new Error("ID de perfil no proporcionado.");

  let publicUrl: string | null = null;

  // 🧩 Si hay un archivo nuevo, lo subimos
  if (newAvatar instanceof File) {
    const fileExt = newAvatar.name.split(".").pop();
    const filePath = `${id}/${Date.now()}.${fileExt}`; // ✅ carpeta por usuario

    // 🗑️ 1. Borrar avatar anterior si existía
    if (oldAvatarUrl) {
      const oldPath = oldAvatarUrl.split("/user_images/")[1]; // ✅ ruta limpia
      if (oldPath) {
        await supabaseBrowser.storage.from("user_images").remove([oldPath]);
      }
    }

    // ☁️ 2. Subir nueva imagen
    const { error: uploadError } = await supabaseBrowser.storage
      .from("user_images")
      .upload(filePath, newAvatar, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) throw new Error("Error al subir imagen: " + uploadError.message);

    // 🔗 3. Obtener URL pública
    const {
      data: { publicUrl: newUrl },
    } = supabaseBrowser.storage.from("user_images").getPublicUrl(filePath);

    publicUrl = newUrl;
  }

  // 🧠 4. Actualizar el perfil (imagen o solo color)
  const { error: updateError } = await supabaseBrowser
    .from("profiles")
    .update({
      ...(publicUrl && { avatarurl: publicUrl }),
      ...(color && { color }),
    })
    .eq("id", id);

  if (updateError) throw new Error(updateError.message);

  return {
    avatarurl: publicUrl || oldAvatarUrl,
    color,
  };
}
