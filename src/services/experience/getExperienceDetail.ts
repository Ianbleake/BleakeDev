import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";
import { getAchievements } from "../achievements/getAchievements";
import { getTechnology } from "../technologies/getTechnology";


export default async function getExperienceDetail(experienceId: string): Promise<Experience> {
    console.log("ID:", experienceId)
    try{
        console.log("Launch getExperienceDetail with this ID:", experienceId)
        let achievements = undefined;
        let technologies = undefined;
        
        const { data, error } = await supabaseBrowser
            .from("experience")
            .select("*")
            .eq("id", experienceId)
            .single();
        
        if(error) throw error;

        if(data){
            achievements = await getAchievements(data.id) as Achievement[];
        }

        if(data){
            technologies = await getTechnology(data.technologyids);
        }

        const { technologyids, ...rest } = data;

        const experience = {
          ...rest,              
          achievements: achievements || [],
          technologies: technologies || [],
        };
        
        return experience as Experience;
        
    } catch(error){
        handleError(error,"getExperienceDetail");
    }
}