import { getCertification } from "@/services/education/getCertification";
import { getDegree } from "@/services/education/getDegree";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useGrade(path: string) {

  const [type, Id] = path.split("_");
  const { setGradeData } = useGradeStorage();

  const isDegree = type === "degree";
  const isCertification = type === "certification";

  const degreeQuery = useQuery({
    queryKey: ["getDegree", Id],
    queryFn: () => getDegree(Id),
    enabled: isDegree && !!Id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  });

  const certificationQuery = useQuery({
    queryKey: ["getCertification", Id],
    queryFn: () => getCertification(Id),
    enabled: isCertification && !!Id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    if (degreeQuery.isError) {
      toast.error(degreeQuery.error.message);
    }
    if (certificationQuery.isError) {
      toast.error(certificationQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [degreeQuery.isError, certificationQuery.isError]);

  useEffect(() => {
    if (isDegree && degreeQuery.data) {
      setGradeData(type,degreeQuery.data);
    }

    if (isCertification && certificationQuery.data) {
      setGradeData(type,certificationQuery.data);
    }
  }, [isDegree, isCertification, degreeQuery.data, certificationQuery.data, setGradeData, type]);

  const activeQuery = isDegree ? degreeQuery : certificationQuery;

  return {
    isLoading: activeQuery.isLoading,
    query: activeQuery,
  };
}
