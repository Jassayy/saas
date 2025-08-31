"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    features: [
      "1 Campaign per month",
      "Basic Analytics",
      "Schedule 10 posts",
      "Email Support",
    ],
    cta: "Current Plan",
    disabled: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    features: [
      "20 Campaigns per month",
      "Detailed Analytics",
      "Unlimited Post Scheduling",
      "Priority Email Support",
      "AI Content Generation",
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Campaigns",
      "Advanced Analytics & Reporting",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {plans.map((plan) => (
        <Card key={plan.name} className="flex flex-col dark:bg-neutral-800">
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={plan.disabled}>
              {plan.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
