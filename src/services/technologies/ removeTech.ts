import { supabaseBrowser } from './../../supabase/client';
import { handleError } from "@/utils/errorHandler";


type RemoveTechPayload = {
  techId: string;
  ownerId: string;
  type: string;
}

export default async function removeTech (payload: RemoveTechPayload ) {

  const { ownerId, techId, type } = payload;

  const table = type === "experience" ? "experience" : "";

  try{

    const { data ,error } = await supabaseBrowser
      .from(table)
      .select("technologyids")
      .eq("id", ownerId)
      .single();

    if(error) throw error;

    if(!data) return { message: "No data found, check the ID." }

    const current = (data.technologyids as string[]) ?? [];

    const exists = current.includes(techId);

    if(exists){

      const updated = current.filter(id => id !== techId);

      console.log("TechId:",techId);
      console.log("Updated:",updated)

      const { error: updateError } = await supabaseBrowser
        .from(table)
        .update({
          technologyids: updated,
        })
        .eq("id", ownerId)
        .select('*')
        .single();

      if (updateError) throw updateError;

      return ownerId;

    }else{
      throw {
        message: "This technology not exist currently."
      }
    }

  }catch(error){
    handleError(error,"removeTech");
  }
}