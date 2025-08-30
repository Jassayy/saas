import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { IconPlus } from "@tabler/icons-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const CAMPAIGN_TYPES = [
  "Product Launch",
  "Promotional Sale",
  "Brand Awareness",
  "Lead Generation",
  "Event Promotion",
  "Content Marketing",
];

const CreateCampaign = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="rounded-3xl flex items-center h-10 py-5 justify-center">
            <IconPlus />
            <h3 className="text-md font-semibold">Create Campaign</h3>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px] dark:bg-neutral-800">
          <DialogHeader>
            <DialogTitle>Campaign Details</DialogTitle>
            <DialogDescription>
              Create a campaign. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6">
            {/* Name + Type in one row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input
                  id="campaign-name"
                  type="text"
                  placeholder="Eg: Summer Sale 2025"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="campaign-type">Campaign Type</Label>
                <Select>
                  <SelectTrigger data-testid="select-campaign-type">
                    <SelectValue placeholder="Select campaign type" />
                  </SelectTrigger>
                  <SelectContent>
                    {CAMPAIGN_TYPES.map((type) => (
                      <SelectItem
                        key={type}
                        value={type.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Full width description */}
            <div className="grid gap-3">
              <Label htmlFor="campaign-description">Campaign Description</Label>
              <Textarea
                id="campaign-description"
                placeholder="Campaign description"
                className="h-44 resize-none"
              />
            </div>

            {/* Target Audience */}
            <div className="grid gap-3">
              <Label htmlFor="target-audience">Target Audience</Label>
              <Input
                id="target-audience"
                type="text"
                placeholder="Eg: Young Gen-Z"
              />
            </div>

            {/* Budget */}
            <div className="grid gap-3">
              <Label htmlFor="budget">Budget ($)</Label>
              <Input id="budget" type="number" placeholder="Eg: 5000" min="0" />
            </div>

            {/* Duration: Start + End */}
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-3">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CreateCampaign;
3;
