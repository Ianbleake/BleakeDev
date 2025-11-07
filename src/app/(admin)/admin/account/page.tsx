'use client'

import React from "react";
import { Card } from "@/components/ui/card";
import AccountHeader from "@/components/admin/account/AccountHeader";

export default function AccountPage(): React.ReactElement {

  return (
    
    <Card className="p-0 flex flex-col gap-4">

      <AccountHeader/>

    </Card>
  );
}