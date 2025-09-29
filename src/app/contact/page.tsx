"use client";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi2";
import Page from "@/components/ui/page";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
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

  const contactInfo = [
    { icon: <MdEmail size={20} />, title: "Email", value: "hello@alexdev.com", description: "Send me an email anytime" },
    { icon: <MdPhone size={20} />, title: "Phone", value: "+1 (555) 123-4567", description: "Mon-Fri from 8am to 6pm" },
    { icon: <MdLocationOn size={20} />, title: "Office", value: "San Francisco, CA", description: "Available for remote work" },
    { icon: <MdAccessTime size={20} />, title: "Response Time", value: "24 hours", description: "Average response time" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, label: "GitHub", href: "#" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <FaTwitter size={20} />, label: "Twitter", href: "#" },
  ];

  return (
    <Page className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-emerald-800">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            Ready to collaborate
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let`s Work
            <span className="text-emerald-400 block">Together</span>
          </h1>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I`d love to hear about it. Send me a message and 
            let`s discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="h-auto border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl">
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
              {success && <p className="mt-4 text-center text-white">{success}</p>}
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="grid gap-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 flex items-start">
                    <div className="w-12 h-12 bg-emerald-100/20 rounded-lg flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-emerald-100 font-medium mb-1">{item.value}</p>
                      <p className="text-emerald-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center text-emerald-100 hover:from-emerald-500 hover:to-emerald-600"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Current Availability</h3>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-emerald-300 rounded-full mr-3 animate-pulse"></div>
                <span className="text-emerald-100 font-medium">Available for new projects</span>
              </div>
              <p className="text-emerald-200 text-sm">
                I`m currently taking on new freelance projects and collaborations. 
                Let`s discuss your next big idea!
              </p>
            </div>
          </div>
        </div>

      </div>
    </Page>
  );
}
