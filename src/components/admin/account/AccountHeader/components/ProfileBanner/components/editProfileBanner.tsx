import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/auth/useAuth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { LuImageUp } from "react-icons/lu";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

type FormValues = {
  banner: FileList;
};

export default function EditProfileBanner(): React.ReactElement {
  const { profile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [open, setOpen] = useState(false);
  const [banner, setBanner] = useState(profile?.banner || "");

  const handleClose = () => {
    setOpen(false);
    setBanner(profile?.banner || "");
    reset();
  };

  const onSubmit = () => {
    console.log("Banner data:", banner);
  };

  return (
    <form className="absolute right-4 bottom-4" onSubmit={handleSubmit(onSubmit)}>
      <Dialog open={open} onOpenChange={handleClose}>
        <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
          Edit Banner
        </Button>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Banner</DialogTitle>
            <DialogDescription>
              You can update your banner image here.
            </DialogDescription>
          </DialogHeader>

          <div className="border border-gray-200 shadow-md rounded-md bg-gray-50 flex flex-col">
            
            <div className="h-35 w-full overflow-hidden rounded-t-md bg-gray-100 flex items-center justify-center">
              {banner ? (
                <Image
                  unoptimized
                  src={banner}
                  alt="user banner"
                  width={800}
                  height={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <p className="text-gray-400 text-sm">No banner selected</p>
              )}
            </div>

            <div className="p-4 flex flex-col items-center justify-center">
              <label
                htmlFor="banner-upload"
                className="cursor-pointer group relative w-full border-2 border-dashed border-gray-300 rounded-md py-6 flex flex-col items-center justify-center hover:bg-gray-100 transition"
              >
                <input
                  id="banner-upload"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  className="hidden"
                  {...register("banner", {
                    validate: {
                      validType: (files) => {
                        const file = files?.[0];
                        if (!file) return true;
                        const validTypes = ["image/png", "image/jpeg", "image/jpg"];
                        return (
                          validTypes.includes(file.type) ||
                          "Solo se permiten imágenes PNG o JPG"
                        );
                      },
                      validSize: (files) => {
                        const file = files?.[0];
                        if (!file) return true;
                        const maxSize = 5 * 1024 * 1024;
                        return file.size <= maxSize || "La imagen no debe superar los 5 MB";
                      },
                    },
                  })}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setBanner(url);
                    }
                  }}
                />

                <div className="flex flex-col items-center text-gray-500 group-hover:text-gray-700 transition">
                  <LuImageUp className="h-10 w-10 mb-1" />
                  <span className="text-sm">Click to upload new banner</span>
                </div>
              </label>

              {errors.banner && (
                <p className="text-sm text-red-500 mt-2">
                  {errors.banner.message as string}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              <RiArrowGoBackFill />
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              <RxUpdate />
              Update
            </Button>
            
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
