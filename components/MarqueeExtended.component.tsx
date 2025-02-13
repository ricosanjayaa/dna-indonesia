import Marquee from "react-fast-marquee";

export default function MarqueeExtended({ children }: { children: React.ReactNode }) {
  return (
    <Marquee className="flex flex-row gap-0" autoFill gradient speed={100}>
      {children}
    </Marquee>
  );
}
