import { cn } from "@/lib/utils";

export default function Text({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={cn(className, "text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200")}>{children}</p>
  );
}