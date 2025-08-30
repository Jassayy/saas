import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => (
  <Card className="shadow-xl dark:shadow-neutral-900 dark:bg-neutral-900">
    <CardHeader>
      <div className="p-2 rounded-lg w-fit mb-2">
        <Icon className="w-8 h-8 text-teal-500 dark:text-teal-400" />
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-neutral-400">{description}</p>
    </CardContent>
  </Card>
);
