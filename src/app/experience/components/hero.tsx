import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import DownloadCv from "./downloadCV";

export default function Hero(): React.ReactElement {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950">
      <div className="max-w-6xl mx-auto text-center">

        <div className="inline-flex items-center bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-800">
          <IoBriefcaseOutline className="w-4 h-4 mr-2" />
          Professional Journey
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Work Experience &
          <span className="text-emerald-400 block">Education</span>
        </h1>

        <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
          Over 3 years of professional experience building scalable web applications
          and working on development teams to deliver exceptional digital solutions.
        </p>

        <div className="w-full flex items-center justify-center mt-8">
          <DownloadCv/>
        </div>
      </div>
    </section>
  );
}