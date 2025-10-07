import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage(): React.ReactElement {
  return (
    <div className="h-screen w-full flex flex-row bg-gradient-to-bl from-gray-50 via-teal-100 to-teal-400">

      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <Link href={"/"} className="m-2">
            <h1 className="text-2xl font-semibold text-gray-900">Bleake<span className="text-emerald-600">Dev</span></h1>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
          <LoginForm/>
      </div>

    </div>
  );
}