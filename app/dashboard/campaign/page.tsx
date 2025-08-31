import CreateCampaign from "@/components/dashboard/CreateCampaign";
import CampaignList from "@/components/dashboard/CampaignList";

export default function CampaignPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-teal-500">Campaigns</h1>
        <CreateCampaign />
      </div>
      <CampaignList />
    </div>
  );
}
