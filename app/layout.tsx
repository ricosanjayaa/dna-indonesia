import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import NavigationBar from "@/components/NavigationBar.component";
import Footer from "@/components/Footer.component";
import SmoothScroll from "@/components/SmoothScroll.component";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={cn(bricolage.className, "p-8 w-full min-w-[320px] max-w-5xl min-h-screen mx-auto flex flex-col gap-12 tracking-tight")}>
        <SmoothScroll>
          <NavigationBar />
          <section className="flex-1 flex flex-col gap-12">
            <div className="w-full h-[72px]"></div>
            {children}
          </section>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
