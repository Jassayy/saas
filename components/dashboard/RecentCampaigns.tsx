import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const campaigns = [
  {
    name: "Summer Sale 2024",
    status: "Live",
    date: "June 2024",
  },
  {
    name: "New Product Launch",
    status: "Completed",
    date: "May 2024",
  },
  {
    name: "Holiday Giveaway",
    status: "Scheduled",
    date: "July 2024",
  },
  {
    name: "Q2 Newsletter",
    status: "Draft",
    date: "April 2024",
  },
  {
    name: "Black Friday Deals",
    status: "Paused",
    date: "November 2023",
  },
];

export function RecentCampaigns() {
  return (
    <Card className="w-full dark:bg-neutral-900">
      <CardHeader>
        <CardTitle>Recent Campaigns</CardTitle>
        <CardDescription>Your 5 most recent campaigns.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {campaigns.map((campaign) => (
            <div key={campaign.name} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>
                  {campaign.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {campaign.name}
                </p>
                <p className="text-sm text-muted-foreground">{campaign.date}</p>
              </div>
              <div className="ml-auto font-medium">
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentCampaigns;
