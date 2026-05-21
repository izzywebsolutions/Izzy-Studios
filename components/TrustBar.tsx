import { cn } from "@/lib/utils";

const items = [
  "From $250 / ₦200,000",
  "Fast delivery",
  "Based in Lagos, serving worldwide",
] as const;

export function TrustBar() {
  return (
    <section
      className={cn(
        "border-b border-border bg-surface/30",
        "px-4 py-8 sm:px-6",
      )}
    >
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {items.map((label) => (
          <p
            key={label}
            className="rounded-lg border border-border bg-background/40 px-4 py-4 text-center text-sm font-medium text-muted sm:text-base"
          >
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}
