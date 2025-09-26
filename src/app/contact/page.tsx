"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );

      setSuccess("✅ Mensaje enviado con éxito");
      reset();
    } catch (error) {
      console.error(error);
      setSuccess("❌ Hubo un error al enviar el mensaje");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Contáctame</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white shadow-md rounded-xl p-8"
        >
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              {...register("name", { required: "El nombre es obligatorio" })}
              className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Correo</label>
            <input
              type="email"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              })}
              className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              rows={5}
              {...register("message", { required: "El mensaje es obligatorio" })}
              className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {success && (
          <p className="text-center mt-4 font-medium">{success}</p>
        )}
      </div>
    </section>
  );
}
