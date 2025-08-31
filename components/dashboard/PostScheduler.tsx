"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FileUpload } from "../ui/file-upload";

const socialPlatforms = ["LinkedIn", "Facebook", "Instagram"];

export default function PostScheduler() {
  const [activeTab, setActiveTab] = useState(socialPlatforms[0]);
  const [postContent, setPostContent] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSchedule = () => {
    if (!postContent || !scheduleTime) {
      alert("Please fill in all fields.");
      return;
    }
    alert(
      `Post for ${activeTab} scheduled for ${new Date(
        scheduleTime
      ).toLocaleString()}:\n\n"${postContent}"`
    );
    setPostContent("");
    setScheduleTime("");
  };

  return (
    <Card className="dark:bg-neutral-800">
      <CardHeader>
        <CardTitle>Create a new post</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex border-b">
          {socialPlatforms.map((platform) => (
            <button
              key={platform}
              className={cn(
                "py-2 px-4 -mb-px",
                activeTab === platform
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground"
              )}
              onClick={() => setActiveTab(platform)}
            >
              {platform}
            </button>
          ))}
        </div>
        <div className="pt-6 space-y-4">
          <div>
            <Label className="mb-2 block">Image/Video (Optional)</Label>
          </div>
          <div>
            <Label htmlFor="post-content">Post Content for {activeTab}</Label>
            <Textarea
              id="post-content"
              placeholder={`What's on your mind?`}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="mt-2 min-h-[150px]"
            />
            <FileUpload />
          </div>
          <div>
            <Label htmlFor="schedule-time">Schedule Time</Label>
            <Input
              id="schedule-time"
              type="datetime-local"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="mt-2"
            />
          </div>
          <Button onClick={handleSchedule}>Schedule Post</Button>
        </div>
      </CardContent>
    </Card>
  );
}
