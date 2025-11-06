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
  
    let profile = undefined;

    const { data, error } = await supabaseBrowser.auth.signInWithPassword({ email, password, });

    if (error) throw error;

    if(data){
      profile = await fetchUserProfile(data.user.id) as UserProfile;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { weakPassword, ...cleanData } = data;

    const userInfo = {
      ...cleanData,
      profile,
    };

    return userInfo;

  } 
  
  catch(error) {
    handleError(error,"signIn");
  }
}
