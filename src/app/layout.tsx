import type { Metadata } from "next";
import "../styles/globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "BleakeDev",
  description: "Portfolio website of BleakeDev",
  icons: {
    icon: "/icons/buho.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
