import React from "react";
import { MenuBar } from "@/components/MenuBar";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <MenuBar />

      {children}

      <AudioPlayer />
    </div>
  );
}
