"use client";
import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconCalendar,
  IconCrown,
  IconGraph,
  IconHome,
  IconMicrophone,
  IconSettings,
  IconSparkles,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { ModeToggle } from "../themes/Toggle";

type SidebarDemoProps = {
  open: boolean;
};

export function SidebarDemo({ open }: SidebarDemoProps) {
  const { user } = useUser();

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Analytics",
      href: "/dashboard/analytics",
      icon: (
        <IconGraph className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Campaign",
      href: "/dashboard/campaign",
      icon: (
        <IconMicrophone className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Schedule",
      href: "/dashboard/schedule",
      icon: (
        <IconCalendar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Upgrade",
      href: "/dashboard/upgrade",
      icon: (
        <IconCrown className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Generate",
      href: "/dashboard/generate",
      icon: (
        <IconSparkles className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "mx-auto flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={() => {}}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div>
            <SidebarLink
              link={{
                label: open
                  ? user?.fullName || user?.username || "Account"
                  : "",
                href: "#",
                icon: <UserButton />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};
