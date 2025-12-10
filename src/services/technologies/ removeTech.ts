import { supabaseBrowser } from './../../supabase/client';
import { handleError } from "@/utils/errorHandler";

type RemoveTechPayload = {
  techId: string;
  ownerId: string;
  type: string;
};

export default async function removeTech(payload: RemoveTechPayload): Promise<string> {
  const { ownerId, techId, type } = payload;

  const table = type === "experience" ? "experience" : "";

  try {
    const { data, error } = await supabaseBrowser
      .from(table)
      .select("technologyids")
      .eq("id", ownerId)
      .single();

    if (error) throw error;

    if (!data) {
      throw {
        message: "No data found, check the ID.",
        origin: "removeTech",
      };
    }

    const current = (data.technologyids as string[]) ?? [];

    const exists = current.includes(techId);
    if (!exists) {
      throw {
        message: "This technology does not exist currently.",
        origin: "removeTech",
      };
    }

    const updated = current.filter(id => id !== techId);

    const { error: updateError } = await supabaseBrowser
      .from(table)
      .update({ technologyids: updated })
      .eq("id", ownerId)
      .select("*")
      .single();

    if (updateError) throw updateError;

    return techId;

  } catch (error) {

    throw handleError(error, "removeTech");
  }
}
