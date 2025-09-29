import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm(): React.ReactElement {

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
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          subject: data.subject,
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
    <div className="flex flex-col gap-10">
      <div className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">First Name</label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="John"
                  className="w-full rounded-md bg-emerald-800/50 border border-emerald-500/20 text-white px-3 py-2"
                />
                {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-emerald-100 text-sm font-medium mb-2">Last Name</label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  placeholder="Doe"
                  className="w-full rounded-md bg-emerald-800/50 border border-emerald-500/20 text-white px-3 py-2"
                />
                {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                })}
                placeholder="john@example.com"
                className="w-full rounded-md bg-emerald-800/50 border border-emerald-500/20 text-white px-3 py-2"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-medium mb-2">Subject</label>
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Project Discussion"
                className="w-full rounded-md bg-emerald-800/50 border border-emerald-500/20 text-white px-3 py-2"
              />
              {errors.subject && <p className="text-red-400 text-sm">{errors.subject.message}</p>}
            </div>

            <div>
              <label className="block text-emerald-100 text-sm font-medium mb-2">Message</label>
              <textarea
                rows={6}
                {...register("message", { required: "Message is required" })}
                placeholder="Tell me about your project..."
                className="w-full rounded-md bg-emerald-800/50 border border-emerald-500/20 text-white px-3 py-2 resize-none"
              />
              {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-3 rounded-md flex items-center justify-center disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  <HiPaperAirplane className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {success && (
        <div className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-2">
          <p className="text-center text-white">{success}</p>
        </div>
      )}
    </div>
  );
}