import React from "react";
import Image from "next/image";
import EditProfileBanner from "./components/editProfileBanner";

type ProfileBannerProps = {
  profile: UserProfile;
}

export default function ProfileBanner({
  profile,
}:ProfileBannerProps ): React.ReactElement {
  
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

      <EditProfileBanner profile={profile}/>

    </div>
  );
}