import React from "react";
import Header from "./header";
import Footer from "./footer";



export default function Body({ children }: BodyProps): React.ReactElement {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}