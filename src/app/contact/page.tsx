"use client";

import Page from "@/components/ui/page";
import Hero from "@/app/contact/components/hero";
import ContactForm from "@/app/contact/components/contactForm";
import Social from "@/app/contact/components/social";

export default function ContactPage() {

  return (
    <Page className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <Hero/>

        <div className="flex flex-col md:flex-row gap-16">
          <ContactForm/>
          <Social/>
        </div>

      </div>
    </Page>
  );
}
