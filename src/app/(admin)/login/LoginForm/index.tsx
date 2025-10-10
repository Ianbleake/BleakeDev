'use client';

import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RiLoginCircleFill } from "react-icons/ri";
import { twTheme } from "@/utils/ThemeColors";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";


type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm(): React.ReactElement {
  
  const {
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useLoginMutation();

  const isLoading = useMemo(() => isSubmitting || isPending, [isSubmitting, isPending]);
  
  const onSubmit = (data: LoginFormInputs) => {
    mutate(data);
  };

  return (
    <div className="relative">
      <Card className="w-120 p-6 shadow-lg shadow-emerald-900 flex flex-col">
        
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Iniciar <span className="text-emerald-600">Sesión</span>
          </h2>
          <Separator />
        </div>

        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 py-4 px-2"
        >
          
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              placeholder="correo@email.com"
              
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              })}
            />
            
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              placeholder="**********"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button
            className="cursor-pointer"
            size={"lg"}
            type="submit"
            disabled={isSubmitting}
          >
            {isLoading ? "Enviando..." : "Entrar"}
            <RiLoginCircleFill color={twTheme.colors.white} />
          </Button>
        </form>

      </Card>
    </div>

  );
}
