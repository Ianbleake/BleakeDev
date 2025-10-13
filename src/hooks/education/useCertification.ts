import { getCertification } from "@/services/education/getCertification";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCertification(Id: string, execute: boolean) {

  const certificationQuery = useQuery({
    queryKey: ["certification",Id],
    queryFn: () => getCertification(Id),
    enabled: execute && !!Id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  });

  if(certificationQuery.isError){
    toast.error(certificationQuery.error.message);
  }

  return {
    certificationQuery,
    certification: certificationQuery.data,
    certificationLoading: certificationQuery.isLoading,
  }
}