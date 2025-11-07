import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { LuImageUp } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/auth/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { twTheme } from "@/utils/ThemeColors";

type FormValues = {
  avatar: FileList;
};

export default function EditProfileAvatar(): React.ReactElement {

  const { profile } = useAuth();
  const { register, handleSubmit, formState:{ errors, isSubmitting }, reset } = useForm<FormValues>();

  const [ open, setOpen ] = useState(false);
  const [ avatar, setAvatar ] = useState(profile?.avatarurl);
  const [ color, setColor ] = useState(profile?.color);

  const handleClose = () => {
    setOpen(false);
    setAvatar(profile?.avatarurl);
    setColor(profile?.color);
    reset();
  };
  

  const onSubmit = () => {

    const avatarData = {
      avatar: avatar,
      color: color,
    }

    console.log("FormData",avatarData);
    
  }

  return (
    <form className="absolute right-0 bottom-0" onSubmit={handleSubmit(onSubmit)}>
      <Dialog open={open} onOpenChange={handleClose}>

        
        <Button size={"icon-sm"} variant={"outline"} className="rounded-full" onClick={() => setOpen(true)} >
          <Pencil/>
        </Button>

        <DialogContent>

          <DialogHeader>
            <DialogTitle>
              Edit Avatar
            </DialogTitle>
            <DialogDescription>
              You can update your avatar image here and your default color.
            </DialogDescription>
          </DialogHeader>

          <div>
            <Tabs defaultValue="image">

              <TabsList>
                <TabsTrigger value="image" >Image</TabsTrigger>
                <TabsTrigger value="color" >Color</TabsTrigger>
              </TabsList>

              <TabsContent value="image" className="border border-gray-200 shadow-md rounded-md px-4 py-6 bg-gray-50">
                <div className="flex flex-row gap-2">

                  <div className="flex items-center justify-center w-1/2">
                    <Avatar className="h-40 w-40 border-4 border-white shadow-md rounded-full">
                      <AvatarImage src={avatar || undefined } />
                      <AvatarFallback className="text-5xl font-medium text-white" style={{ backgroundColor: profile?.color || "#d1fae5" }} >{profile?.initials}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-center justify-center w-1/2 relative">
                    <label htmlFor="avatar-upload" className="cursor-pointer group relative h-40 w-40 rounded-full overflow-hidden border-3 border-dashed border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shadow-md" >
                      
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        className="hidden"
                        {...register("avatar", {
                          validate: {
                            validType: (files) => {
                              const file = files?.[0];
                              if (!file) return true; // opcional
                              const validTypes = ["image/png", "image/jpeg", "image/jpg"];
                              return validTypes.includes(file.type) || "Solo se permiten imágenes PNG o JPG";
                            },
                            validSize: (files) => {
                              const file = files?.[0];
                              if (!file) return true;
                              const maxSize = 3 * 1024 * 1024; // 3MB
                              return file.size <= maxSize || "La imagen no debe superar los 3MB";
                            },
                          },
                        })}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const url = URL.createObjectURL(file);
                            setAvatar(url);
                          }
                        }}
                      />

                      {errors.avatar && (
                        <p className="text-sm text-red-500 mt-1">{errors.avatar.message as string}</p>
                      )}

                      <div className="text-sm text-gray-500 group-hover:text-gray-700 flex flex-col items-center">
                        <LuImageUp className="h-10 w-10 mb-1" />
                      </div>
        
                    </label>
                  </div>

                </div>
              </TabsContent>

              <TabsContent value="color" className="border border-gray-200 shadow-md rounded-md px-4 py-6 bg-gray-50" >
                <div className="flex flex-row gap-2">

                  <div className="flex items-center justify-center w-1/2">
                    <Avatar className="h-40 w-40 border-4 border-white shadow-md rounded-full">
                      <AvatarFallback className="text-5xl font-medium text-white" style={{ backgroundColor: color }}>
                        {profile?.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex items-center justify-center w-1/2 relative">
                    <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto p-1">
                      {Object.entries(twTheme.colors)
                        .filter(([name]) =>
                          typeof twTheme.colors[name as keyof typeof twTheme.colors] === "object"
                        )
                        .map(([name, shades]) => {
                          const base =
                            (shades as Record<string, string>)[
                              "500"
                            ] || (shades as Record<string, string>)[Object.keys(shades)[5]];
                          return (
                            <button
                              key={name}
                              type="button"
                              className={`h-8 w-8 rounded-full border-2 transition 
                                ${avatar === base ? "border-black scale-110" : "border-transparent hover:scale-105"}
                              `}
                              style={{ backgroundColor: base }}
                              onClick={() => setColor(base)}
                            />
                          );
                      })}
                    </div>
                  </div>


                </div>
              </TabsContent>


            </Tabs>
          </div>

          <DialogFooter>

            <Button type="button" variant={"outline"} onClick={handleClose}>
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              Update
            </Button>

          </DialogFooter>

        </DialogContent>

      </Dialog>
    </form>
  );
}