import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

type AddTechPayload = {
  owner: string;
  technologyId: string;
  type: string;
  techData: Technology | undefined;
};

export default async function addTechnology(payload: AddTechPayload) {

  const { owner, technologyId, type } = payload;

  const table = type === "experience" ? "experience" : "";

  try {

    const { data, error: fetchError } = await supabaseBrowser
      .from(table)
      .select("technologyids")
      .eq("id", owner)
      .single();

    if (fetchError) throw fetchError;

    if (!data) return;

    const current = (data.technologyids as string[]) ?? [];

    const exists = current.includes(technologyId);

    if (!exists) {

      const updated = [...current, technologyId];

      const { error: updateError } = await supabaseBrowser
        .from(table)
        .update({
          technologyids: updated,
        })
        .eq("id", owner)
        .select('*')
        .single();

      if (updateError) throw updateError;

      return payload.techData;
    }else{
      throw {
        message: "This technology already exist."
      }
    }

  } catch (error) {
    handleError(error, "addTechnology");
  }
}
