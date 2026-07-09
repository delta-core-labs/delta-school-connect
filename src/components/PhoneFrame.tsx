import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Consistent phone mockup frame used across the marketing site.
 * Same bezel widths, radii, dynamic island, and side buttons everywhere.
 * Sizing is controlled by the parent via `className` (width utilities).
 */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.75rem] bg-navy-foreground/10 p-[3px] shadow-xl",
        className,
      )}
    >
      <div className="rounded-[2.55rem] bg-navy p-[10px]">
        <div className="relative aspect-[9/20] overflow-hidden rounded-[2rem] bg-white">
          <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-navy" />
          {children}
        </div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-[22%] h-10 w-[3px] rounded-l bg-navy-foreground/20" />
      <div className="absolute -left-[3px] top-[35%] h-16 w-[3px] rounded-l bg-navy-foreground/20" />
      <div className="absolute -right-[3px] top-[28%] h-20 w-[3px] rounded-r bg-navy-foreground/20" />
    </div>
  );
}
