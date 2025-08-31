"use client";
import RevenueChart from "@/components/dashboard/RevenueChart";
import Outreach from "@/components/dashboard/Outreach";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-semibold text-teal-500">Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <Outreach />
      </div>
    </div>
  );
}
