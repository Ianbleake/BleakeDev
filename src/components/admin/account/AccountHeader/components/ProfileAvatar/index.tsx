import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth/useAuth";
import { Pencil } from "lucide-react";
import React from "react";

export default function ProfileAvatar(): React.ReactElement {

  const { profile } = useAuth();
  
  return (
    <div className="absolute left-8 bottom-1/3">
      <div className="relative">

        <Avatar className="h-30 w-30 border-4 border-white shadow-md rounded-full">
          <AvatarImage src={profile?.avatarurl || undefined} />
          <AvatarFallback className="text-lg font-semibold">
            {profile?.initials}
          </AvatarFallback>
        </Avatar>
        
        <Button size={"icon-sm"} variant={"outline"} className="absolute right-0 bottom-0 rounded-full">
          <Pencil/>
        </Button>
      </div>
    </div>
  );
}