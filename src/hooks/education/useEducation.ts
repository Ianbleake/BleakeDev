import { getCertifications } from "@/services/education/getCertifications";
import { getDegrees } from "@/services/education/getDegrees";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

//TODO: Type this hook and check the other hooks

export function useEducation() {

  const degreesQuery = useQuery({
    queryKey: ["degrees"],
    queryFn: getDegrees,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  })

  if(degreesQuery.isError){
    toast.error(degreesQuery.error.message)
  }

  const certificationsQuery = useQuery({
    queryKey: ["certifications"],
    queryFn: getCertifications,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  })

  if(certificationsQuery.isError){
    toast.error(certificationsQuery.error.message)
  }

  return {
    degreesQuery,
    degrees: degreesQuery.data,
    degreesLoading: degreesQuery.isLoading,
    certificationsQuery,
    certifications: certificationsQuery.data,
    certificationsLoading: certificationsQuery.isLoading,
  }

}