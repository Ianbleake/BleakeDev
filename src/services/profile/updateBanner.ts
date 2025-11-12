import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function updateBanner (bannerData: BannerData): Promise<string> {

  const { id, banner, newBanner } = bannerData;

  try{
    
    if(!id) throw new Error("ID profile is missing.");

    
    let publicUrl: string | null = "";

    if(newBanner instanceof File){


      const fileExt = newBanner.name.split(".").pop();
      const filePath = `${id}/${Date.now()}.${fileExt}`;

      if(banner) {
        const oldPath = banner.split("/user_images/")[1]; // ✅ ruta limpia
        if (oldPath) {
          await supabaseBrowser.storage.from("user_images").remove([oldPath]);
        }
      }

      const { error: uploadError } = await supabaseBrowser.storage
        .from("user_images")
        .upload(filePath,newBanner,{
          cacheControl: "3600",
          upsert: true,
        })

        if (uploadError) throw new Error("Error al subir imagen: " + uploadError.message);

        const {
          data: { publicUrl: newUrl },
        } = supabaseBrowser.storage.from("user_images").getPublicUrl(filePath);
    
        publicUrl = newUrl;

        const { error: updateError } = await supabaseBrowser
        .from("profiles")
        .update({
          ...(publicUrl && { banner: publicUrl }),
        })
        .eq("id", id);
    
      if (updateError) throw new Error(updateError.message);

    }

    return publicUrl;

  }catch(error){
    handleError(error,"updateBanner")
  }
}