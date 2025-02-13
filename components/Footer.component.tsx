import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between align-baseline">
      <p className="text-sm text-foreground/75">@{new Date().getFullYear()} <Link className="hover:text-foreground transition-all duration-200" href="/">dnaindonesia.id</Link></p>
      <div className="w-fit flex flex-row gap-2 text-sm text-foreground/75 font-medium group">
        <Link target="__blank" className="md:px-2 hover:!text-foreground/100 group-hover:text-foreground/50 transition-all duration-200" href="https://www.instagram.com/dnaindonesia.id/">ins.</Link>
        <Link target="__blank" className="md:px-2 hover:!text-foreground/100 group-hover:text-foreground/50 transition-all duration-200" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">wa.</Link>
        <Link className="md:px-2 hover:!text-foreground/100 group-hover:text-foreground/50 transition-all duration-200" href="mailto:hello@dnaindonesia.id">mail.</Link>
      </div>
    </footer>
  );
}