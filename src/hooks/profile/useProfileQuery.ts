import { useEffect } from "react";
import { useAuth } from "../auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "@/services/profile/fetchUserProfile";
import { toast } from "sonner";

export function useProfileQuery( userId: string ) {

  const { profile } = useAuth();

  const isProfileFilled = !!profile;

  const profileQuery = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: !isProfileFilled && !!userId ,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  })

  useEffect(() => {
    if(profileQuery.isError){
      toast.error(profileQuery.error.message)
    }
  
    if(profileQuery.isSuccess){
      toast.success(`Perfil de ${profileQuery.data?.username} obtenido`)
    }
  }, [profileQuery]);

  return profileQuery;
}