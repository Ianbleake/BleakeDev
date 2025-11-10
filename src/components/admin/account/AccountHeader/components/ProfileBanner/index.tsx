import { useAuth } from "@/hooks/auth/useAuth";
import React from "react";
import Image from "next/image";
import EditProfileBanner from "./components/editProfileBanner";

export default function ProfileBanner(): React.ReactElement {

  const { profile } = useAuth();
  
  return (
    <div className="relative h-40 w-full bg-gradient-to-r from-emerald-300 to-emerald-500">

      {
        profile?.banner ? (
          <Image
            unoptimized
            src={profile.banner}
            alt="userBanner"
            width={800}
            height={600}
            className=" object-cover w-full h-full"
          />
        ) : <></>
      }

      <EditProfileBanner/>

    </div>
  );
}