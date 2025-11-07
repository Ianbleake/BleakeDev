import { useAuth } from "@/hooks/auth/useAuth";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

      <Button className="absolute right-4 bottom-4" size={"sm"} variant={"outline"}>
        Edit Banner
      </Button>

    </div>
  );
}