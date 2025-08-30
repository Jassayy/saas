import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle, Repeat } from "lucide-react";

const activities = [
  {
    id: 1,
    user: {
      name: "Olivia Martin",
      handle: "@olivia",
    },
    action: "liked your post",
    post: "Summer Vibes ☀️",
    time: "5m ago",
    type: "like",
  },
  {
    id: 2,
    user: {
      name: "Jackson Lee",
      handle: "@jackson",
    },
    action: "commented on your post",
    post: "New Product Sneak Peek!",
    time: "1h ago",
    type: "comment",
  },
  {
    id: 3,
    user: {
      name: "Isabella Nguyen",
      handle: "@isabella",
    },
    action: "retweeted your post",
    post: "Holiday Giveaway Announcement",
    time: "3h ago",
    type: "retweet",
  },
  {
    id: 4,
    user: {
      name: "William Kim",
      handle: "@will",
    },
    action: "liked your post",
    post: "Behind the scenes",
    time: "1d ago",
    type: "like",
  },
];

const activityIcons: { [key: string]: React.ReactNode } = {
  like: <Heart className="h-4 w-4 text-red-500" />,
  comment: <MessageCircle className="h-4 w-4 text-blue-500" />,
  retweet: <Repeat className="h-4 w-4 text-green-500" />,
};

const RecentActivity = () => {
  return (
    <Card className="w-full dark:bg-neutral-900">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Notifications from your social media channels.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <Avatar className="h-9 w-9">
              <AvatarFallback>
                {activity.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                {activity.user.name}
                <span className="text-sm text-muted-foreground ml-2">
                  {activity.user.handle}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                {activity.action}: "{activity.post}"
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
              {activityIcons[activity.type]}
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
