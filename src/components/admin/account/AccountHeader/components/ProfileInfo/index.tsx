import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/auth/useAuth";
import { twTheme } from "@/utils/ThemeColors";
import { Dot } from "lucide-react";
import React, { useState } from "react";
import EditProfileInfo from "./components/editProfileInfo";

export default function ProfileInfo(): React.ReactElement {

  const { profile } = useAuth();

  const [ isEditing, setEdititing ] = useState(false);

  if(isEditing){
    return(
      <EditProfileInfo setEdit={setEdititing} />
    )
  }
  
  return (
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

        <Button className="mt-4 sm:mt-0" variant="outline" onClick={()=>setEdititing(true)}>
          Edit Profile
        </Button>
        
      </div>
    </div>
  );
}