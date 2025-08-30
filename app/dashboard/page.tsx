"use client";
import CreateCampaign from "@/components/dashboard/CreateCampaign";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  return (
    <>
      <div className="w-full flex items-center justify-between px-24 border-b border-neutral-300 dark:border-neutral-700">
        <div>
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <p>
            Welcome back {user?.firstName}! Here's what's happening with your
            campaigns.
          </p>
        </div>
        <div>
          <CreateCampaign />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
