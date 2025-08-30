"use client";

import Link from "next/link";
import { NavbarDemo } from "@/components/layout/Nav";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  BarChart3,
  CalendarCheck,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { ModeToggle } from "@/components/themes/Toggle";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { useEffect } from "react";
import { div } from "motion/react-client";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Rocket,
    title: "Automated Campaigns",
    description:
      "Launch marketing campaigns in just a few clicks—AI handles the targeting, timing, and execution.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description:
      "Get clear insights into reach, engagement, ROI, and what’s actually driving your sales.",
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "Schedule social media posts across Instagram, LinkedIn, and Facebook with ease.",
  },
  {
    icon: Sparkles,
    title: "AI Content Creation",
    description:
      "Generate blogs, product copy, and ad creatives tailored to your business with Gemini AI.",
  },
];

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || (isLoaded && isSignedIn)) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <div className="bg-neutral-100 dark:bg-neutral-900 shadow-md fixed top-0 left-0 w-full z-50">
        <NavbarDemo />
      </div>

      {/* Page Background */}
      <div className="bg-white dark:bg-black border-x border-dashed border-neutral-600 max-w-5xl mx-auto text-black dark:text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 sm:px-12 border-b border-neutral-600 border-dashed">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
              Supercharge Your Marketing.{" "}
              <span className="text-teal-500 dark:text-teal-400">
                Smarter, Faster, Easier.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Take the guesswork out of marketing with AI-driven insights,
              automated campaigns, and tools designed to scale your business
              effortlessly. From lead generation to customer engagement, we help
              you grow with precision.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-teal-500 dark:bg-teal-500 text-white"
              >
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="dark:border-gray-500 dark:hover:border-teal-400"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 sm:px-12">
          <div className="">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need To Grow
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 bg-white dark:bg-black border-t border-dashed border-neutral-600">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300">
              Join hundreds of small businesses automating their marketing and
              scaling faster than ever before.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-teal-500 dark:bg-teal-500 text-white font-semibold"
            >
              <Link href="/dashboard">Start For Free</Link>
            </Button>
          </div>
          <ModeToggle />
        </section>
      </div>
    </>
  );
}
