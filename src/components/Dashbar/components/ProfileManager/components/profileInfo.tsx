import { SidebarMenuButton } from "@/components/ui/sidebar";
import UserImage from "@/components/ui/UserImage";
import { useAuth } from "@/hooks/auth/useAuth";
import { MoreVertical } from "lucide-react";
import React from "react";
import ProfileInfoSkeleton from "@/components/skeletons/profileInfoSkeleton";


export default function ProfileInfo(): React.ReactElement {

  const { profile, isLoading } = useAuth();

  if(isLoading){
    return(
      <ProfileInfoSkeleton/>
    )
  }
  
  return (
    <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground" >

      <UserImage/>

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">
          { profile?.username}
        </span>
        <span className="text-muted-foreground truncate text-xs">
          {profile?.first_name} {profile?.last_name}
        </span>
      </div>

      <MoreVertical className="ml-auto size-4" />
      
    </SidebarMenuButton>
  );
}