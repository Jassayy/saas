"use client";

import { NavbarDemo } from "@/components/layout/Nav";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, BarChart3, CalendarCheck, Sparkles } from "lucide-react";
import { ModeToggle } from "@/components/themes/Toggle";

export default function Home() {
  const { user } = useUser();

  if (user) redirect("/dashboard");

  return (
    <>
      {/* Navbar */}
      <div className="bg-neutral-100 dark:bg-neutral-900 shadow-md fixed top-0 left-0 w-full z-50">
        <NavbarDemo />
      </div>

      {/* Page Background */}
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 sm:px-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto text-center">
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
                size="lg"
                className="bg-teal-500 dark:bg-teal-500 text-white"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="dark:border-gray-500 dark:hover:border-teal-400"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need To Grow
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="shadow-lg border dark:border-neutral-800">
                <CardHeader>
                  <Rocket className="w-8 h-8 text-teal-500 dark:text-teal-400 mb-2" />
                  <CardTitle>Automated Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  Launch marketing campaigns in just a few clicks—AI handles the
                  targeting, timing, and execution.
                </CardContent>
              </Card>

              <Card className="shadow-lg border dark:border-neutral-800">
                <CardHeader>
                  <BarChart3 className="w-8 h-8 text-teal-500 dark:text-teal-400 mb-2" />
                  <CardTitle>Actionable Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Get clear insights into reach, engagement, ROI, and what’s
                  actually driving your sales.
                </CardContent>
              </Card>

              <Card className="shadow-lg border dark:border-neutral-800">
                <CardHeader>
                  <CalendarCheck className="w-8 h-8 text-teal-500 dark:text-teal-400 mb-2" />
                  <CardTitle>Smart Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  Schedule social media posts across Instagram, LinkedIn, and
                  Facebook with ease.
                </CardContent>
              </Card>

              <Card className="shadow-lg border dark:border-neutral-800">
                <CardHeader>
                  <Sparkles className="w-8 h-8 text-teal-500 dark:text-teal-400 mb-2" />
                  <CardTitle>AI Content Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  Generate blogs, product copy, and ad creatives tailored to
                  your business with Gemini AI.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-slate-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-300">
              Join hundreds of small businesses automating their marketing and
              scaling faster than ever before.
            </p>
            <Button
              size="lg"
              className="bg-teal-500 dark:bg-teal-500 text-white font-semibold"
            >
              Start For Free
            </Button>
          </div>
          <ModeToggle />
        </section>
      </div>
    </>
  );
}
