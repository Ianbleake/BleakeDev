import getExperienceDetail from "@/services/experience/getExperienceDetail";
import { useDetailExperienceStorage } from "@/storage/Admin/detailExperienceStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useExperienceDetail(experienceId: string) {

    const { setDetailExperienceData } = useDetailExperienceStorage();

    const experienceDetailQuery = useQuery({
        queryKey: ["experienceDetail"],
        queryFn: () => getExperienceDetail(experienceId),
        enabled: !!experienceId,
        staleTime: 1000 * 60 * 30,
        gcTime: 1000 * 60 * 30,
    });

    useEffect(() => {
        if(experienceDetailQuery.isError){
            toast.error(experienceDetailQuery.error.message);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[experienceDetailQuery.isError])

    useEffect(() => {
        if(experienceDetailQuery.data){
            setDetailExperienceData( experienceDetailQuery.data, experienceDetailQuery.data.achievements, experienceDetailQuery.data.tecnologies );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[experienceDetailQuery.data]);

    return {
        isLoading: experienceDetailQuery.isLoading,
    }
}