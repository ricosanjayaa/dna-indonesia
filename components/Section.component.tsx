import { cn } from "@/lib/utils";

export default function Section({ title, header, children, className }: { title?: string, header?: string, children?: React.ReactNode, className?: string }) {
  return (
    <section className={cn(className, "flex flex-col justify-center tracking-tighter leading-none")}>
      {title && <h6 className="uppercase text-xs font-semibold text-foreground/40 -mb-4">{title}</h6> }
      {header && <h1 className="text-xl md:text-2xl font-semibold text-primary">{header}</h1>}
      {children && children}
    </section>
  );
}