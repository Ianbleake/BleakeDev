import getAllTechnologies from "@/services/technologies/getAllTechnologies";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useTechnologies () {

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
  },[technologiesQuery])

  useEffect(()=>{
    if(technologiesQuery.data){
      
    }
  },[technologiesQuery])

  return {
    query: technologiesQuery,
    technologies: technologiesQuery.data,
    isLoading: technologiesQuery.isLoading,
  }
}