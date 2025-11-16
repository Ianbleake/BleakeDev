import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";

export default async function getExperienceDetail(experienceId: string): Promise<Experience> {

    try{
        const { data, error } = await supabaseBrowser
            .from("experiences")
            .select("*")
            .eq("id", experienceId)
            .single();
        
        if(error) throw error;

        return data as Experience;
    } catch(error){
        handleError(error,"getExperienceDetail");
    }
}