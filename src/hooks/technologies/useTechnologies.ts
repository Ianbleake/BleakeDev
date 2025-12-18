import getAllTechnologies from "@/services/technologies/getAllTechnologies";
import { useTechStorage } from "@/storage/Admin/techStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";


export default function useTechnologies () {

  const { setTechs } = useTechStorage();

  const technologiesQuery = useQuery({
    queryKey: ["getTechnologies"],
    queryFn: getAllTechnologies,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  })

  useEffect(()=>{
    if(technologiesQuery.error){
      toast.error(technologiesQuery.error.message);
    }
  },[technologiesQuery.error])

  useEffect(()=>{
    if(technologiesQuery.data){
      setTechs(technologiesQuery.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[technologiesQuery.data])

  return {
    query: technologiesQuery,
    technologies: technologiesQuery.data,
    isLoading: technologiesQuery.isLoading,
  }
}