import React from "react";
import ProfileBanner from "./components/ProfileBanner";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileInfo from "./components/ProfileInfo";

export default function AccountHeader(): React.ReactElement {
  
  return (
    <div className="relative flex flex-col w-full rounded-2xl overflow-hidden shadow-sm border-b border-gray-200">
          
      <ProfileBanner/>

      <ProfileAvatar/>

      <ProfileInfo/>

    </div>
  );
}