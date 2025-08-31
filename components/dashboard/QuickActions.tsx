import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Search } from "lucide-react";

const QuickActions = () => {
  return (
    <Card className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 h-full">
      <CardHeader>
        <CardTitle className="text-black dark:text-white">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button
          variant="outline"
          className="w-full justify-start text-black dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 cursor-pointer"
        >
          <Sparkles className="mr-2 h-4 w-4 text-teal-500" />
          Generate content using AI
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start text-black dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 cursor-pointer"
        >
          <Calendar className="mr-2 h-4 w-4 text-teal-500" />
          Schedule Posts
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start text-black dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 cursor-pointer"
        >
          <Search className="mr-2 h-4 w-4 text-teal-500" />
          SEO analysis - optimise for search
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
