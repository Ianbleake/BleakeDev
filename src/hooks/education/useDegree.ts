import { getDegree } from "@/services/education/getDegree";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDegree(Id: string, execute: boolean) {

  const degreeQuery = useQuery({
    queryKey: ["degree", Id],
    queryFn: () => getDegree(Id),
    enabled: execute && !!Id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  });

  if(degreeQuery.isError){
    toast.error(degreeQuery.error.message);
  }

  return {
    degreeQuery,
    degree: degreeQuery.data,
    degreeLoading: degreeQuery.isLoading,
  }
}