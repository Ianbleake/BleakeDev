import { getCertification } from "@/services/education/getCertification";
import { getDegree } from "@/services/education/getDegree";
import { useGradeStorage } from "@/storage/Admin/gradeStorage";
import { periodToString } from "@/utils/periodToString";
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

    const grade: Grade = isDegree ? degreeQuery.data : certificationQuery.data;

    if (isDegree && degreeQuery.data ) {

      const gradeInfo = isDegree && {
        id: grade?.id ?? "",
        name: grade?.degree ?? "No grade title",
        description: grade?.description ?? "No description",
        institution: grade?.institution ?? "-",
        date: grade?.period ? periodToString(grade.period) : "-",
        period: grade?.period,
        location: grade?.location ?? "-",
        type,
      }

      setGradeData(type,grade,gradeInfo,grade.achievements);

    }

    if (isCertification && grade) {

      const gradeInfo = isCertification && {
        id: grade?.id ?? "",
        name: grade?.title ?? "No grade title",
        description: grade?.description ?? "No description",
        institution: grade?.issuer ?? "-",
        date: grade?.date ?? "-",
        credential: grade?.credential ?? "-",
        type,
      }

      setGradeData(type,grade,gradeInfo,grade.achievements);
    }
  }, [isDegree, isCertification, degreeQuery.data, certificationQuery.data, setGradeData, type]);

  const activeQuery = isDegree ? degreeQuery : certificationQuery;

  return {
    isLoading: activeQuery.isLoading,
    query: activeQuery,
  };
}
