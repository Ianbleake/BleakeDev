import type { Metadata } from "next";
import "../styles/globals.css";
import Body from "@/components/body";

export const metadata: Metadata = {
  title: "BleakeDev",
  description: "Portfolio website of BleakeDev",
};

export default function RootLayout({
  children,
}: RootProps ) {
  return (
    <Body>
      {children}
    </Body>
  );
}
