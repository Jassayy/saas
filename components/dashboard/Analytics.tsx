import { Activity, Brain, Calendar, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const analyticsData: {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}[] = [
  {
    icon: Activity,
    title: "Active Campaigns",
    value: "23",
    description: "+5% from last month",
  },
  {
    icon: Brain,
    title: "Content Generated",
    value: "150+",
    description: "+20% from last month",
  },
  {
    icon: Heart,
    title: "Engagement Rate",
    value: "45%",
    description: "+10% from last month",
  },
  {
    icon: Calendar,
    title: "Scheduled Posts",
    value: "54",
    description: "+12% from last month",
  },
];

const Analytics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {analyticsData.map((data) => (
        <Card
          key={data.title}
          className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {data.title}
            </CardTitle>
            <data.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">
              {data.value}
            </div>
            <p className="text-xs text-muted-foreground">{data.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Analytics;
