import React from "react";
import ProfileBanner from "./components/ProfileBanner";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileInfo from "./components/ProfileInfo";
import { useAuth } from "@/hooks/auth/useAuth";
import NoData from "../../NoData";

export default function AccountHeader(): React.ReactElement {

  const { profile } = useAuth();

  if(!profile){
    return(
      <NoData/>
    )
  }
  
  return (
    <div className="relative flex flex-col w-full rounded-2xl overflow-hidden shadow-sm border-b border-gray-200">
          
      <ProfileBanner profile={profile}/>

      <ProfileAvatar profile={profile} />

      <ProfileInfo/>

    </div>
  );
}