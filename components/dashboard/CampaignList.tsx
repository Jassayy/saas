"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Campaign = {
  name: string;
  status: "Live" | "Completed" | "Scheduled" | "Draft" | "Paused";
  date: string;
  description: string;
};

const initialCampaigns: Campaign[] = [
  {
    name: "Summer Sale 2024",
    status: "Live",
    date: "June 2024",
    description: "A campaign to boost summer sales.",
  },
  {
    name: "New Product Launch",
    status: "Completed",
    date: "May 2024",
    description: "Launching our new flagship product.",
  },
];

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);

  if (campaigns.length === 0) {
    return (
      <div className="text-center py-20 border-dashed border-2 rounded-md">
        <h2 className="text-2xl font-semibold">No campaigns yet.</h2>
        <p className="text-muted-foreground">
          Click "Create Campaign" to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {campaigns.map((campaign) => (
        <Card key={campaign.name}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{campaign.name}</CardTitle>
                <CardDescription>{campaign.date}</CardDescription>
              </div>
              <Badge
                variant={
                  campaign.status === "Live"
                    ? "default"
                    : campaign.status === "Completed"
                    ? "secondary"
                    : campaign.status === "Scheduled"
                    ? "outline"
                    : "destructive"
                }
              >
                {campaign.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>{campaign.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
