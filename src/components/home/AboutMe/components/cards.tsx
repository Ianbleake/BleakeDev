import React from "react";
import { FaCode } from "react-icons/fa6";
import { AiOutlineMobile } from "react-icons/ai";
import { GoZap } from "react-icons/go";
import { Card, CardContent } from "@/components/ui/card";
import { twTheme } from "@/utils/ThemeColors";

export default function Cards(): React.ReactElement {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
            <FaCode color={twTheme.colors.emerald[100]} size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Clean Code</h3>
          <p className="text-emerald-100">
            Writing maintainable, scalable code that follows best practices and industry standards.
          </p>
        </CardContent>
      </Card>
      
      <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
            <AiOutlineMobile color={twTheme.colors.emerald[100]} size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Web & Mobile Development</h3>
          <p className="text-emerald-100">
            Creating modern applications with React, Next.js, and React Native, optimized for performance and user experience.
          </p>
        </CardContent>
      </Card>
      
      <Card className="border border-emerald-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
            <GoZap color={twTheme.colors.emerald[100]} size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
          <p className="text-emerald-100">
            Optimizing applications for speed, efficiency, and seamless user interactions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}