"use client";
import PostScheduler from "@/components/dashboard/PostScheduler";

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-8" suppressHydrationWarning>
      <h1 className="text-4xl font-semibold text-teal-500">Schedule Posts</h1>
      <PostScheduler />
    </div>
  );
}
