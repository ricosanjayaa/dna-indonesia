import Marquee from "react-fast-marquee";

export default function SolutionMarquee() {
  return (
    <section className="flex flex-col group">
      <Marquee className="flex flex-row gap-0 text-primary/75 group-hover:text-primary/50 group" autoFill gradient speed={100}>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Strategy.</h1>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Planning.</h1>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Production.</h1>
      </Marquee>
      <Marquee className="flex flex-row gap-0 text-primary/75 group-hover:text-primary/50 group" autoFill gradient speed={100} direction="right">
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Socmed.</h1>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Platform.</h1>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Handling.</h1>
      </Marquee>
      <Marquee className="flex flex-row gap-0 text-primary/75 group-hover:text-primary/50 group" autoFill gradient speed={100}>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Set.</h1>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Goals.</h1>
        <h1 className="px-4 py-2 items-center text-6xl font-semibold hover:!text-primary group-hover:text-primary/50 transition-all duration-200">Achieve.</h1>
      </Marquee>
    </section>
  );
}
