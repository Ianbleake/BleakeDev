
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { merge } from "@/utils/mergeStyles";
import { useAuth } from "@/hooks/auth/useAuth";

export default function UserImage(): React.ReactElement {

  const { profile } = useAuth();

  const baseStyle = "rounded-lg bg-emerald-600 text-white text-lg"
  return (
    <Avatar className="h-8 w-8 rounded-lg " >

      <AvatarImage
        src={profile?.avatarurl || undefined}
        alt={profile?.username || "user-profile"}
      />

      <AvatarFallback className={merge(baseStyle,profile?.color || "")}>{ profile?.initials || "BD"}</AvatarFallback>

    </Avatar>
  );
}