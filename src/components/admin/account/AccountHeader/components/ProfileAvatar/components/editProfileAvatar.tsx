import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { LuImageUp } from "react-icons/lu";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useAuth } from "@/hooks/auth/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { twTheme } from "@/utils/ThemeColors";
import useUpdateAvatar from "@/hooks/profile/useUpdateAvatar";

type FormValues = {
  avatar: FileList;
};

export default function EditProfileAvatar(): React.ReactElement {
  const { profile } = useAuth();
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { errors, isSubmitting } = formState;

  const { mutate, isPending } = useUpdateAvatar();

  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(profile?.avatarurl ?? "");
  const [color, setColor] = useState(profile?.color);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDialogChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setAvatar(profile?.avatarurl ?? "");
      setColor(profile?.color);
      setSelectedFile(null);
      reset();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setAvatar(previewUrl);
    }
  };

  const onSubmit = () => {
    if (!profile?.id) return;
    const payload = {
      id: profile.id,
      avatar: profile.avatarurl,
      newAvatar: selectedFile,
      color,
    };
    mutate(payload, {
      onSuccess: () => handleDialogChange(false),
    });
  };

  return (
    <div className="absolute right-0 bottom-0">
      <Button
        size="icon-sm"
        variant="outline"
        className="rounded-full"
        onClick={() => setOpen(true)}
      >
        <Pencil />
      </Button>

      <Dialog open={open} onOpenChange={handleDialogChange}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>

            <DialogHeader>
              <DialogTitle>Edit Avatar</DialogTitle>
              <DialogDescription>
                Update your avatar image or select a default color.
              </DialogDescription>
            </DialogHeader>

            <Tabs className="my-4" defaultValue="image">
              <TabsList>
                <TabsTrigger value="image">Image</TabsTrigger>
                <TabsTrigger value="color">Color</TabsTrigger>
              </TabsList>

              <TabsContent
                value="image"
                className="border border-gray-200 shadow-md rounded-md px-4 py-6 bg-gray-50"
              >
                <div className="flex flex-row gap-2">
                  <div className="flex items-center justify-center w-1/2">
                    <Avatar className="h-40 w-40 border-4 border-white shadow-md rounded-full">
                      <AvatarImage src={avatar || undefined} />
                      <AvatarFallback
                        className="text-5xl font-medium text-white"
                        style={{
                          backgroundColor: profile?.color || "#d1fae5",
                        }}
                      >
                        {profile?.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-center justify-center w-1/2 relative">
                    <label
                      htmlFor="avatar-upload"
                      className="cursor-pointer group relative h-40 w-40 rounded-full overflow-hidden border-3 border-dashed border-gray-200 flex items-center justify-center hover:bg-gray-100 transition shadow-md"
                    >
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        className="hidden"
                        {...register("avatar", {
                          validate: {
                            validType: (files) => {
                              const file = files?.[0];
                              if (!file) return true;
                              const validTypes = [
                                "image/png",
                                "image/jpeg",
                                "image/jpg",
                              ];
                              return (
                                validTypes.includes(file.type) ||
                                "Solo se permiten imágenes PNG o JPG"
                              );
                            },
                            validSize: (files) => {
                              const file = files?.[0];
                              if (!file) return true;
                              const maxSize = 3 * 1024 * 1024;
                              return (
                                file.size <= maxSize ||
                                "La imagen no debe superar los 3MB"
                              );
                            },
                          },
                          onChange: handleFileChange,
                        })}
                      />

                      <div className="text-sm text-gray-500 group-hover:text-gray-700 flex flex-col items-center">
                        <LuImageUp className="h-10 w-10 mb-1" />
                        Upload
                      </div>
                    </label>
                  </div>
                </div>

                {errors.avatar && (
                  <p className="text-sm text-red-500 mt-2 text-center">
                    {errors.avatar.message as string}
                  </p>
                )}
              </TabsContent>

              {/* COLOR */}
              <TabsContent
                value="color"
                className="border border-gray-200 shadow-md rounded-md px-4 py-6 bg-gray-50"
              >
                <div className="flex flex-row gap-2">
                  <div className="flex items-center justify-center w-1/2">
                    <Avatar className="h-40 w-40 border-4 border-white shadow-md rounded-full">
                      <AvatarFallback
                        className="text-5xl font-medium text-white"
                        style={{ backgroundColor: color }}
                      >
                        {profile?.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex items-center justify-center w-1/2 relative">
                    <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto p-1">
                      {Object.entries(twTheme.colors)
                        .filter(
                          ([, shades]) => typeof shades === "object"
                        )
                        .map(([name, shades]) => {
                          const base =
                            (shades as Record<string, string>)["500"] ||
                            (shades as Record<string, string>)[
                              Object.keys(shades)[5]
                            ];

                          return (
                            <button
                              key={name}
                              type="button"
                              className={`h-8 w-8 rounded-full border-2 transition ${
                                color === base
                                  ? "border-black scale-110"
                                  : "border-transparent hover:scale-105"
                              }`}
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

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDialogChange(false)}
                disabled={isPending}
              >
                <RiArrowGoBackFill />
                Cancel
              </Button>

              <Button type="submit" disabled={isSubmitting || isPending}>
                <RxUpdate />
                Update
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
