'use client'

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProyectContact(): React.ReactElement {

  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Interested in Working Together?
        </h2>
        <p className="text-xl text-stone-300 mb-8">
          Let,s discuss how we can bring your ideas to life.
        </p>
        <Button
          onClick={() => router.push('/contact')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}