import getExperienceDetail from "@/services/experience/getExperienceDetail";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function useExperienceDetail(experienceId: string) {

    const { setDetailExperienceData } = useDetailExperienceStorage();
    const [ isError, setError ] = useState<boolean>(false);

    const experienceDetailQuery = useQuery({
        queryKey: ["experienceDetail",experienceId],
        queryFn: () => getExperienceDetail(experienceId),
        enabled: !!experienceId,
        staleTime: 1000 * 60 * 30,
        gcTime: 1000 * 60 * 30,
    });

    useEffect(() => {
        if(experienceDetailQuery.isError){
            toast.error(experienceDetailQuery.error.message);
            setError(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[experienceDetailQuery.isError])

    useEffect(() => {
        if(experienceDetailQuery.data){
            setError(false);
            const experienceDetailInfo = {
                id: experienceDetailQuery.data.id,
                company: experienceDetailQuery.data.company,
                position: experienceDetailQuery.data.position,
                location: experienceDetailQuery.data.location,
                period: experienceDetailQuery.data.period,
                description: experienceDetailQuery.data.description,
                type: experienceDetailQuery.data.type,
            }

            setDetailExperienceData( experienceDetailInfo, experienceDetailQuery.data.achievements, experienceDetailQuery.data.technologies );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[experienceDetailQuery.data]);

    return {
        isLoading: experienceDetailQuery.isLoading,
        error: isError
    }
}