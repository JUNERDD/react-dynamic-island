export const percentageViewSource = `import { Scan } from "lucide-react";

export default function PercentageView() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4">
      <div className="flex items-center gap-2 text-background/80">
        <Scan size={24} />
        <span className="text-lg font-bold">Responsive</span>
      </div>
      <p className="text-xs text-background/60 text-center max-w-[200px]">
        This island uses percentage-based dimensions relative to its container.
      </p>
    </div>
  );
}
`;
