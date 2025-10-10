import { getCertifications } from "@/services/education/getCertifications";
import { getDegrees } from "@/services/education/getDegrees";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";


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

  return {
    degreesQuery,
    degrees: degreesQuery.data,
    degreesLoading: degreesQuery.isLoading,
    certificationsQuery,
    certifications: certificationsQuery.data,
    certificationsLoading: certificationsQuery.isLoading,
  }

}