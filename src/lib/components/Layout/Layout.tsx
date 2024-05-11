import React from "react";
import "../../../index.css";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div
        className="bg-gray-100
        dark:bg-zinc-900 transition-all-duration-700 min-h-screen"
      >
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
   
  );
}
