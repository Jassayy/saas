"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const pieData = {
  labels: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
  datasets: [
    {
      label: "Reach",
      data: [1200, 1900, 800, 500],
      backgroundColor: [
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 206, 86, 0.6)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ["Blog Post", "Video", "Image", "Infographic", "Story"],
  datasets: [
    {
      label: "Engagement",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const Outreach = () => {
  const { theme } = useTheme();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: theme === "dark" ? "#a3a3a3" : "#525252",
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#a3a3a3" : "#525252",
        },
      },
      y: {
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#a3a3a3" : "#525252",
        },
      },
    },
  };

  return (
    <>
      <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Channel Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <Pie data={pieData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Engagement by Post Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <Bar data={barData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Outreach;
