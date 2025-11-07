import { useAuth } from "@/hooks/auth/useAuth";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dot, Pencil } from "lucide-react";
import { twTheme } from "@/utils/ThemeColors";

export default function AccountHeader(): React.ReactElement {

  const { profile } = useAuth();
  
  return (
    <div className="relative flex flex-col w-full rounded-2xl overflow-hidden shadow-sm border-b border-gray-200">
          
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

      <div className="pt-16 pb-6 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-col gap-1 flex-1 mr-4">

            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {profile?.username || "User Name"}
            </h2>

            <Separator/>

            <div className="flex flex-row items-center gap-1">

              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                { profile?.name }
              </p>

              <Dot color={twTheme.colors.gray[400]}/>

              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                {profile?.email || "user@email.com"}
              </p>

            </div>

          </div>

          <Button className="mt-4 sm:mt-0" variant="outline">
            Edit Profile
          </Button>
        </div>
      </div>

    </div>
  );
}