import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/auth/useAuth";

import React from "react";
import EditProfileAvatar from "./components/editProfileAvatar";

export default function ProfileAvatar(): React.ReactElement {

  const { profile } = useAuth();

  console.log("urlAvatar",profile?.avatarurl);
  
  return (
    <div className="absolute left-4 md:left-8 bottom-2/5 md:bottom-1/3">
      <div className="relative">

        <Avatar className="h-30 w-30 border-4 border-white shadow-md rounded-full">
          <AvatarImage src={ profile?.avatarurl || undefined } />
          <AvatarFallback className="text-5xl font-medium text-white" style={{ backgroundColor: profile?.color }}>
            {profile?.initials}
          </AvatarFallback>
        </Avatar>
        
        <EditProfileAvatar/>
      </div>
    </div>
  );
}