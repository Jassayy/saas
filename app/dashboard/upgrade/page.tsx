import Pricing from "@/components/dashboard/Pricing";

export default function UpgradePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-teal-500">
          Upgrade Your Plan
        </h1>
        <p className="text-muted-foreground mt-2">
          Choose the plan that's right for you.
        </p>
      </div>
      <Pricing />
    </div>
  );
}
