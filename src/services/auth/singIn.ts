import { supabaseBrowser } from "@/supabase/client";
import { handleError } from "@/utils/errorHandler";
import { fetchUserProfile } from "../profile/fetchUserProfile";
import { Session, User } from "@supabase/supabase-js";

type singInResponse =  {   
  profile: UserProfile | undefined;
  user: User;
  session: Session;
}

export async function signIn(email: string, password: string): Promise<singInResponse> {

  try{
    
    console.log("Iniciando login")
    let profile = undefined;

    const { data, error } = await supabaseBrowser.auth.signInWithPassword({ email, password, });

    if (error) handleError(error,"signIn");

    if(data){
      console.log("Login ✅")
      console.log("Obteniendo profile")
      profile = await fetchUserProfile(data.user.id) as UserProfile;
      if(profile){
        console.log("Profile ✅")
      }
    }

    console.log("Auth data:", data)
    console.log("Cleaning data")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { weakPassword, ...cleanData } = data;

    console.log("Data cleaned ✅:",cleanData)
    console.log("Adding profile")
    const userInfo = {
      ...cleanData,
      profile,
    };

    console.log("Profile added ✅", userInfo)

    return userInfo;

  } 
  
  catch(error) {
    handleError(error,"signIn");
  }
}
