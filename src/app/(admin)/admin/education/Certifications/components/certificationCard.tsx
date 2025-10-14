import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { twTheme } from "@/utils/ThemeColors";
import { Dot } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import React from "react";
import { PiMedalFill } from "react-icons/pi";

type CertificationCardProps = {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps ): React.ReactElement {

  const router = useRouter();
  
  return (
    <Card className="h-16 flex flex-row gap-4 items-center justify-start p-4 py-12 hover:bg-green-50 cursor-pointer transition-colors" onClick={() => router.push(`/admin/education/certification_${certification.id}`)}>
      <PiMedalFill size={35} color={twTheme.colors.emerald[500]} />
      <div className="flex flex-1 flex-col gap-1 space-y-1">
        <h3>{certification.title}</h3>
        <Separator/>
        <div className="w-full flex flex-row items-center justify-start gap-1">
          <p>{certification.issuer}</p>
          <Dot/>
          <p>{moment(certification.date).format("MMM Do YY")}</p>
        </div>
      </div>
    </Card>
  );
}