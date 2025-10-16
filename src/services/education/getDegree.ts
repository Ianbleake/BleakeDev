import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";
import { getAchievements } from "./getAchievements";

export async function getDegree(Id: string): Promise<Degree | undefined> {
  
  try{

    let achievements = undefined;

    const { data, error } = await supabaseBrowser
      .from("education")
      .select("*")
      .eq("id",Id)
      .single();

    if(error) throw error;

    if(data){
      achievements = await getAchievements(data.id) as Achievement[];
    }

    const Degree = {
      ...data,
      achievements: achievements || [],
    }

      return Degree as Degree;

  }catch(error){
    handleError(error,"getDegree")
  }
}