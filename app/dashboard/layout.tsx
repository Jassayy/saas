"use client";
import { SidebarDemo } from "@/components/layout/SideBarDemo";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex h-screen ${inter.className} antialiased`}>
      {/* Sidebar on the left */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <SidebarDemo open={open} />
      </div>

      {/* Main content on the right */}
      <div className="flex-1 overflow-y-auto p-6">{children}</div>
    </div>
  );
}
