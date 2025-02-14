"use client";
import Link from "next/link";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const pathName = usePathname();
  const isActive = (path: Url) => pathName === path;

  const navigations = [
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Services",
      href: "/services"
    },
    {
      label: "Blog",
      href: "/blog"
    }
  ]

  return (
    <div className="fixed top-4 left-0 right-0 z-[10000] w-full max-w-5xl mx-auto px-4">
      <nav className="p-4 bg-background/60 backdrop-blur-xl rounded-xl border-2 border-foreground/5">
        <div className="flex items-center justify-between">
          <Link href="/"><Image width={1080} height={1080} className="h-8" src="/dna_logo.png" alt="DNA Indonesia" /></Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          <ul className="hidden md:flex items-center justify-center text-sm font-medium group">
            {navigations.map((navigation) => (
              <Link key={navigation.label} href={navigation.href} className={cn("md:px-8 cursor-pointer hover:!text-foreground/100 group-hover:text-foreground/50 transition-all duration-200", isActive(navigation.href) ? "text-foreground" : "text-foreground/75")}>{navigation.label}</Link>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Hubungi kami</Link></Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center">
            <ul className="grid grid-cols-3 text-sm font-medium group">
              {navigations.map((navigation) => (
                <Link key={navigation.label} href={navigation.href} className={cn("md:px-8 cursor-pointer hover:!text-foreground/100 group-hover:text-foreground/50 transition-all duration-200", isActive(navigation.href) ? "text-foreground" : "text-foreground/75")}>{navigation.label}</Link>
              ))}
            </ul>
            <Button asChild className="mt-4 w-full"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Hubungi kami</Link></Button>
          </div>
        )}
      </nav>
    </div>
  );
}