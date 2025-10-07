'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RiLoginCircleFill } from "react-icons/ri";
import { twTheme } from "@/utils/ThemeColors";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm(): React.ReactElement {

  // 1️⃣ Inicializamos useForm
  const {
    register, // para vincular inputs con el form
    handleSubmit, // para manejar el submit
    formState: { errors, isSubmitting }, // para errores y estados
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2️⃣ Función que se ejecuta cuando el form es válido y se envía
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Datos del formulario:", data);
    // Aquí iría tu lógica de login (ej: llamada a Supabase)
  };

  return (
    <Card className="w-120 p-6 shadow-lg shadow-emerald-900 flex flex-col">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Iniciar <span className="text-emerald-600">Sesión</span>
        </h2>
        <Separator />
      </div>

      {/* 3️⃣ Asociamos handleSubmit con onSubmit */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 py-4 px-2"
      >
        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            type="email"
            placeholder="correo@email.com"
            // 4️⃣ "register" conecta el input con el form y define reglas de validación
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo inválido",
              },
            })}
          />
          {/* 5️⃣ Mostrar error si existe */}
          {errors.email && (
            <span className="text-red-600 text-sm">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* PASSWORD */}
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
          {isSubmitting ? "Enviando..." : "Entrar"}
          <RiLoginCircleFill color={twTheme.colors.white} />
        </Button>
      </form>
    </Card>
  );
}
