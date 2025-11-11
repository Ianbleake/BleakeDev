import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/auth/useAuth";
import useUpdateProfileInfo from "@/hooks/profile/useUpdateProfileInfo";
import { twTheme } from "@/utils/ThemeColors";
import { Dot } from "lucide-react";
import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { FiSave } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { toast } from "sonner";

type EditProfileInfoProps = {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

type ProfileInputsData = {
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export default function EditProfileInfo({
  setEdit,
}:EditProfileInfoProps): React.ReactElement {

  const { profile } = useAuth();
  const { mutate, isPending } = useUpdateProfileInfo();

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ProfileInputsData>({
    defaultValues: {
      username: profile?.username,
      firstName: profile?.first_name,
      lastName: profile?.last_name,
      email: profile?.email,
    }
  });

  const onSubmit = (data: ProfileInputsData) => {
    const updatedData = {
      ...profile,
      first_name: data.firstName,
      last_name: data.lastName,
      username: data.username,
      email: data.email,
      name: `${data.firstName} ${data.lastName}`
    }

    mutate(updatedData as UserProfile);
    setEdit(false);
  }

  const onError = (errors: FieldErrors<ProfileInputsData>) => {
    const firstError = Object.values(errors)[0];
    toast.error(firstError?.message ?? "Please check the form fields.");
  };
  
  
  return (
    <div className="pt-16 pb-6 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <form onSubmit={handleSubmit(onSubmit,onError)} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

        <div className="flex flex-col gap-1 flex-1 mr-4">

          <div className="flex flex-col gap-2">
            <Input
              className="w-1/4"
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is required.",
              })}
            />
          </div>

          <Separator/>

          <div className="flex flex-row items-center gap-1">

            <div className="flex flex-row  gap-4">

              <div className="flex flex-col gap-2 w-1/2">
                <Input
                  type="text"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First name is required.",
                  })}
                />
              </div>

              <div className="flex flex-col gap-2 w-1/2">
                <Input
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last name is required.",
                  })}
                />
              </div>

            </div>

            <Dot color={twTheme.colors.gray[400]}/>

            <div className="flex flex-col gap-2 w-1/4">
              <Input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "The email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo inválido",
                  },
                })}
              />
            </div>

          </div>

        </div>

        <div className="flex flex-col gap-2">

          <Button type="button" className="mt-4 sm:mt-0" variant="outline" onClick={()=>setEdit(false)} disabled={isSubmitting || isPending}>
            <RiArrowGoBackFill />
            Cancel
          </Button>

          <Button type="submit" className="mt-4 sm:mt-0" disabled={isSubmitting || isPending} >
            <FiSave />
            Save
          </Button>

        </div>
        
      </form>
    </div>
  );
}