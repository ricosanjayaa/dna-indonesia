import { Metadata } from "next";
import Link from "next/link";

import Text from "@/components/Text.component";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section.component";
import MarqueeExtended from "@/components/MarqueeExtended.component";
import Portofolio from "@/components/Portofolio.component";
import CarouselExtended from "@/components/CarouselExtended.component";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

export const metadata: Metadata = {
  title: "Services | DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "DNA Indonesia adalah agensi yang fokus pada konten kreatif dan pemasaran digital di media sosial, membantu brand mengelola dan mengatasi permasalahan.",
  keywords: [
    "Social Media", "Digital Marketing", "Social Media Ads", "Influencer Marketing",
    "Instagram Ads", "TikTok Ads", "Brand Marketing", "KOL Marketing",
    "Viral Content", "Content Creator", "Paid Ads", "UGC Marketing",
    "Hashtag Strategy", "Social Growth", "Online Branding"
  ],
  openGraph: {
    title: "Services | DNA Indonesia", /** Harusnya kedua title itu sama */
    description: "DNA Indonesia atau PT Digital Niaga Aksesindo merupakan agensi yang berfokuskan melayani pembuatan konten kreatif melalui pemasaran digital khususnya di media sosial. Kami berdedikasi dan juga fokus membantu brand dalam menangani permasalahan di media sosial.",
    url: SITE_URL,
    siteName: "DNA Indonesia",
    images: [
      {
        url: `${SITE_URL}/og_dna_logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    type: "website",
  },
};

export default function PhotoVideoVisitPage() {
  return (
    <>
      <section className="py-8 md:py-12 w-full md:w-4/5 mx-auto flex flex-col gap-4 md:text-center">
        <h1 className="-mb-2 text-2xl md:text-4xl text-primary font-semibold tracking-tighter leading-none">Memberikan Hasil Terbaik untuk Mencapai Setiap Tujuan Bisnis</h1>
        <Text>Sebagai sebuah digital agency yang berfokus pada strategi marketing dan desain, DNA Indonesia (Digital Niaga Aksesindo) menyediakan beragam layanan untuk membantu perusahaan memulai, berkembang, dan mencapai pertumbuhan yang signifikan di dunia digital. Dengan pendekatan yang terarah dan berorientasi pada hasil, kami membantu klien meraih kesuksesan melalui strategi pemasaran yang efektif, optimasi brand identity, serta kampanye digital yang berdampak.</Text>
        <Button asChild className="md:mx-auto w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
      </section>

      <MarqueeExtended>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <Image width={1080} height={1080} className="h-full w-full object-contain" src="/ecolink.png" alt="e-COLINK" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <Image width={1080} height={1080} className="h-full w-full object-contain" src="/energizing_borneo.png" alt="Energizing BORNEO" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <Image width={1080} height={1080} className="h-full w-full object-contain" src="/kopisetia.png" alt="KOPI SETIA" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <Image width={1080} height={1080} className="h-full w-full object-contain" src="/pertamina.png" alt="Pertamina" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <Image width={1080} height={1080} className="h-full w-full object-contain" src="/yamaha.png" alt="YAMAHA" />
        </div>
      </MarqueeExtended>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <CarouselExtended>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_1.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_2.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_3.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_4.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
        </CarouselExtended>
        <Section className="md:w-4/5 mx-auto md:col-span-2 gap-4" title="instagram handling" header="Kelola Instagram lebih profesional dengan konten kreatif, desain menarik, dan strategi engagement yang tepat." >
          <Text>Layanan Instagram Handling lengkap: dari ide kreatif, desain visual, strategi marketing, riset hashtag, penjadwalan, hingga laporan performa bulanan untuk pertumbuhan optimal.</Text>
          <ul className="space-y-1 list-disc list-inside text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200">
            <li>Konten kreatif dan terjadwal.</li>
            <li>Desain feed yang menarik.</li>
            <li>Caption yang engaging.</li>
            <li>Interaksi aktif dengan audiens.</li>
          </ul>

          <div className="flex flex-row gap-4">
            <Button asChild className="w-fit"><Link href="/services/instagram-handling">Lihat lebih lanjut</Link></Button>
            <Button asChild variant="secondary" className=" w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
          </div>
        </Section>
      </section>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_reels_1.png" alt="Portofolio Tiktok & Reels Handling DNA Indonesia" />
        <Section className="md:w-4/5 mx-auto md:col-span-2 gap-4" title="tiktok & reels handling" header="Buat video pendek yang engaging dan mengikuti tren untuk meningkatkan brand awareness di TikTok & Instagram Reels." >
          <Text>Layanan TikTok & Reels Handling kami mencakup konsep kreatif, perencanaan konten, caption, riset hashtag, penjadwalan, dan laporan performa bulanan untuk meningkatkan kehadiran brand Anda.</Text>
          <ul className="space-y-1 list-disc list-inside text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200">
            <li>Video pendek yang menarik.</li>
            <li>Tren terbaru yang relevan.</li>
            <li>Editing yang menarik.</li>
            <li>Meningkatkan engagement.</li>
          </ul>

          <div className="flex flex-row gap-4">
            <Button asChild className="w-fit"><Link href="/services/tiktok-reels-handling">Lihat lebih lanjut</Link></Button>
            <Button asChild variant="secondary" className=" w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
          </div>
        </Section>
      </section>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_photo_1.png" alt="Portofolio Photo Product Service DNA Indonesia" />
        <Section className="md:w-4/5 mx-auto md:col-span-2 gap-4" title="photo product service" header="Foto produk berkualitas tinggi yang menarik dan profesional untuk meningkatkan daya tarik brand Anda." >
          <Text>Layanan Photo Product Service kami siap meningkatkan visual produk Anda dengan pemotretan profesional dan strategi promosi.</Text>
          <ul className="space-y-1 list-disc list-inside text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200">
            <li>Foto produk berkualitas tinggi.</li>
            <li>Lighting dan angle terbaik.</li>
            <li>Estetika visual yang menarik.</li>
            <li>Meningkatkan daya tarik brand.</li>
          </ul>
          <div className="flex flex-row gap-4">
            <Button asChild className="w-fit"><Link href="/services/photo-product-service">Lihat lebih lanjut</Link></Button>
            <Button asChild variant="secondary" className=" w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
          </div>
        </Section>
      </section>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <CarouselExtended>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_visit_4.jpg" alt="Portofolio Photo Video Visit DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_visit_5.jpg" alt="Portofolio Photo Video Visit DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><Image width={1080} height={1080} className="h-full aspect-square object-cover rounded-md" src="/portofolio_visit_6.jpg" alt="Portofolio Photo Video Visit DNA Indonesia" /></CarouselItem>
        </CarouselExtended>
        <Section className="md:w-4/5 mx-auto md:col-span-2 gap-4" title="photo & video visit" header="Layanan foto dan video on-site untuk kebutuhan branding, promosi, dan dokumentasi bisnis." >
          <Text>Layanan Photo & Video Services kami mencakup pengambilan, pengeditan, hingga pembuatan caption dan laporan performa untuk mendukung bisnis Anda.</Text>
          <ul className="space-y-1 list-disc list-inside text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200">
            <li>Pengambilan gambar di lokasi.</li>
            <li>Foto dan video berkualitas tinggi.</li>
            <li>Cocok untuk branding & promosi.</li>
            <li>Hasil profesional dan estetik.</li>
          </ul>

          <div className="flex flex-row gap-4">
            <Button asChild className="w-fit"><Link href="/services/photo-video-visit">Lihat lebih lanjut</Link></Button>
            <Button asChild variant="secondary" className=" w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
          </div>
        </Section>
      </section>

      <Section className="gap-4" header="Tingkatkan Branding Anda dengan Desain Menakjubkan">
        <Text className="-mt-2">Jelajahi kumpulan desain kreatif yang dirancang dengan presisi dan estetika tinggi. Dari branding hingga pengalaman digital, setiap proyek mencerminkan perpaduan antara kreativitas dan strategi. Mari ciptakan sesuatu yang luar biasa bersama!</Text>
        <Portofolio />
      </Section>
    </>
  );
}