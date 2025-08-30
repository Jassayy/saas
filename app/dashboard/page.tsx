"use client";
import Analytics from "@/components/dashboard/Analytics";
import CreateCampaign from "@/components/dashboard/CreateCampaign";
import RevenueChart from "@/components/dashboard/RevenueChart";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const router = useRouter();
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex items-center justify-between px-24 border-b border-neutral-300 dark:border-neutral-700 pb-3">
        <div>
          <h1 className="text-4xl font-semibold text-teal-500">Dashboard</h1>
          <p>
            Welcome back {user?.firstName}! Here's what's happening with your
            campaigns.
          </p>
        </div>
        <div>
          <CreateCampaign />
        </div>
      </div>

      <div className="px-16 flex flex-col gap-4 py-3">
        <div>
          <Analytics />
        </div>
        <div>
          <RevenueChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
