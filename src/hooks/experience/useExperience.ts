import getExperience from "@/services/experience/getExperience";
import { useExperienceStorage } from "@/storage/Admin/experienceStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useExperience() {

  const { setExperiences } = useExperienceStorage();

  const experienceQuery = useQuery({
    queryKey: ["getExperience"],
    queryFn: getExperience,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  })

  useEffect(() => {
    if(experienceQuery.isError){
      toast.error(experienceQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[experienceQuery.isError])

  useEffect(() => {
    if(experienceQuery.data){
      setExperiences(experienceQuery.data);
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[experienceQuery.data])

  return {
    query: experienceQuery,
    experience: experienceQuery.data,
    isLoading: experienceQuery.isLoading
  }
}