import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { LuImageUp } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/auth/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EditProfileAvatar(): React.ReactElement {

  const { profile } = useAuth();
  const { register, handleSubmit, formState:{ errors, isSubmitting }} = useForm();

  const [ open, setOpen ] = useState(false);
  const [ avatar, setAvatar ] = useState(profile?.avatarurl)

  const handleClose = () => {
    setOpen(false);
    setAvatar(profile?.avatarurl)
  }

  return (
    <div className="absolute right-0 bottom-0 ">
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
                      <AvatarFallback style={{ backgroundColor: profile?.color || "#d1fae5" }} >{profile?.initials}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-center justify-center w-1/2 relative">
                    <label htmlFor="avatar-upload" className="cursor-pointer group relative h-40 w-40 rounded-full overflow-hidden border-3 border-dashed border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shadow-md" >
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        {...register("avatar")}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const url = URL.createObjectURL(file);
                            setAvatar(url);
                          }
                        }}
                      />
                      
                      <div className="text-sm text-gray-500 group-hover:text-gray-700 flex flex-col items-center">
                        <LuImageUp className="h-10 w-10 mb-1" />
  
                      </div>
        
                    </label>
                  </div>

                </div>
              </TabsContent>

              <TabsContent value="color">

              </TabsContent>

            </Tabs>
          </div>

          <DialogFooter>

            <Button type="button" variant={"outline"} onClick={handleClose}>
              Cancel
            </Button>

            <Button type="submit">
              Update
            </Button>

          </DialogFooter>

        </DialogContent>

      </Dialog>
    </div>
  );
}