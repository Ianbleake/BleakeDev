import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";
import { getAchievements } from "../achievements/getAchievements";

export async function getCertification(Id: string): Promise<CertificationInfo | undefined> {

  try{

    let achievements = undefined;
    
    const { data, error } = await supabaseBrowser
      .from("certifications")
      .select("*")
      .eq("id",Id)
      .single();

    if(error) throw error;

    if(data){
      achievements = await getAchievements(data.id) as Achievement[];
    }

    const Certification = {
      ...data,
      achievements: achievements || [],
    }

    return Certification as Certification;

  }catch(error){
    handleError(error,"getCertification");
  }
}