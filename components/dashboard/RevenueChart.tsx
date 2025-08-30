"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Generate dummy data for the last 30 days
const labels = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
});

const dataPoints = Array.from(
  { length: 30 },
  () => Math.floor(Math.random() * (2500 - 500 + 1)) + 500
);

const RevenueChart = () => {
  const { theme } = useTheme();

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#a3a3a3" : "#525252", // neutral-400 / neutral-600
        },
      },
      y: {
        grid: {
          color:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#a3a3a3" : "#525252",
          callback: (value) =>
            typeof value === "number" ? `$${value.toLocaleString()}` : value,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: dataPoints,
        borderColor: "#14b8a6", // teal-500
        backgroundColor: "rgba(20, 184, 166, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
      <CardHeader>
        <CardTitle className="text-black dark:text-white">Revenue</CardTitle>
        <CardDescription>Revenue from the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <Line options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
