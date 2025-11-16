import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";
import { getAchievements } from "../achievements/getAchievements";

export default async function getExperienceDetail(experienceId: string): Promise<Experience> {

    try{

        let achievements = undefined;
        
        const { data, error } = await supabaseBrowser
            .from("experience")
            .select("*")
            .eq("id", experienceId)
            .single();
        
        if(error) throw error;

        if(data){
            achievements = await getAchievements(data.id) as Achievement[];
        }

        const experience = {
        ...data,
        achievements: achievements || [],
        }

        return experience as Experience;
        
    } catch(error){
        handleError(error,"getExperienceDetail");
    }
}