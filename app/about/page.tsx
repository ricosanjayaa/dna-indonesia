import { Metadata } from "next";
import Link from "next/link";

import Section from "@/components/Section.component";
import Text from "@/components/Text.component";
import { Button } from "@/components/ui/button";
import CarouselExtended from "@/components/CarouselExtended.component";
import { CarouselItem } from "@/components/ui/carousel";
import MarqueeExtended from "@/components/MarqueeExtended.component";
import CardExtended from "@/components/CardExtended.component";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

export const metadata: Metadata = {
  title: "About | DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "DNA Indonesia adalah agensi yang fokus pada konten kreatif dan pemasaran digital di media sosial, membantu brand mengelola dan mengatasi permasalahan.",
  keywords: [
    "Social Media", "Digital Marketing", "Social Media Ads", "Influencer Marketing", 
    "Instagram Ads", "TikTok Ads", "Brand Marketing", "KOL Marketing", 
    "Viral Content", "Content Creator", "Paid Ads", "UGC Marketing", 
    "Hashtag Strategy", "Social Growth", "Online Branding"
  ],
  openGraph: {
    title: "About | DNA Indonesia", /** Harusnya kedua title itu sama */
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

export default function AboutPage() {
  return (
    <>
      <section className="py-8 md:py-12 md:w-4/5 mx-auto flex flex-col gap-4 md:text-center">
        <h1 className="-mb-2 text-2xl md:text-4xl text-primary font-semibold tracking-tighter leading-none">Kami Siap Membantu Anda!</h1>
        <Text>Kami menggabungkan kreativitas dan strategi digital untuk membawa brand Anda ke level berikutnya. Dengan pendekatan yang berfokus pada hasil, kami memastikan pertumbuhan yang signifikan dan kepuasan pelanggan yang maksimal.</Text>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">500+</h2>
            <Text>Konten Kreatif di Socmed</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">98%</h2>
            <Text>Tingkat Kepuasan Pelanggan</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">100+</h2>
            <Text>Kampanye Digital Berhasil</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">5x</h2>
            <Text>ROI Tertinggi</Text>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-6">
        <div className="h-full w-full"><img className="h-full aspect-square object-cover rounded-md" src="/about.png" alt="DNA Indonesia" /></div>
        <Section className="lg:col-span-2 gap-4" title="about us" header={`${new Date().getFullYear() - 2017} Tahun Telah Melayani`}>
          <Text className="-mt-2">Berawal dari Komunitas di Tahun 2017 dan DNA Indonesia telah hadir dengan legalitas PT pada 2021. Perusahaan kami berdedikasi dalam hal Digital Marketing terutama melalui Social Media.</Text>
          <Text className="-mt-2">Dengan latar belakang banyak pelaku usaha yang menggunakan social media sebagai platform pemasarannya serta merekrut tim, partner hingga profesional worker dalam ruang lingkup kreatif dan digital marketing seperti Graphic Designer, Content Writer maupun Copywriter sampai ke Social Media Officer. DNA Indonesia sangat terbuka dan memiliki tujuan untuk membantu para UMKM menuju Go-Digital.</Text>
        </Section>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-6">
        <Section className="lg:col-span-2 gap-4" header="Kami Hadir Sebagai Solusi">
          <Text className="-mt-2">Saat ini DNA Indonesia adalah perusahaan yang menyediakan jasa dalam meng-handle sosial media suatu brand. Mulai dari Instagram Handling, Tiktok Handling, Photo Video Product, hingga Advertising on Facebook & Instagram. Project atau layanan ini merupakan salah satu service pertama yang disediakan oleh DNA Indonesia. Untuk lebih jelaskan social media management bertujuan untuk membantu para pelaku usaha/brand dalam mengelola konten-konten sosial media mereka tanpa memerlukan team social media sendiri.</Text>
          <Button asChild className="w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
        </Section>
        <CarouselExtended>
          <CarouselItem className="h-full w-full"><img className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_1.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><img className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_2.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><img className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_3.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
          <CarouselItem className="h-full w-full"><img className="h-full aspect-square object-cover rounded-md" src="/portofolio_instagram_4.png" alt="Portofolio Instagram Handling DNA Indonesia" /></CarouselItem>
        </CarouselExtended>
      </section>

      <Section className="py-8 md:py-12 w-full md:w-4/5 mx-auto flex flex-col gap-8 md:text-center" header="Kami Terus Berinovasi">
        <Text className="-mt-6">Kami menggabungkan kreativitas dan strategi digital untuk membawa brand Anda ke level berikutnya. Dengan pendekatan yang berfokus pada hasil, kami memastikan pertumbuhan yang signifikan dan kepuasan pelanggan yang maksimal.</Text>
        <CarouselExtended>
          <CarouselItem className="md:basis-1/2"><CardExtended title="Instagram Handling">Kami menggabungkan kreativitas dan strategi digital untuk membawa brand Anda ke level berikutnya. Dengan pendekatan yang berfokus pada hasil, kami memastikan pertumbuhan yang signifikan dan kepuasan pelanggan yang maksimal.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2"><CardExtended title="Reels & Tiktok Handling">Kami menghasilkan karya kreatif yang menonjol dan relevan dengan target audiens Anda. Mulai dari desain visual, pembuatan konten, hingga strategi pemasaran, kami pastikan setiap elemen mendukung tujuan brand Anda.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2"><CardExtended title="Photo Product Service">Pelaksanaan yang sempurna adalah kunci dari setiap kampanye yang sukses. Kami menerapkan strategi yang telah dirancang dengan matang untuk mencapai hasil yang optimal dan memberikan dampak yang nyata.</CardExtended></CarouselItem>
        </CarouselExtended>
      </Section>

      <Section className="py-8 md:py-12 w-full mx-auto flex flex-col gap-4 text-center" header="DNA Indonesia, Pilihan Berbagai Brand!">
        <MarqueeExtended>
          <div className="flex justify-center items-center h-20 aspect-video mx-6">
            <img className="h-full w-full object-contain" src="/ecolink.png" alt="e-COLINK" />
          </div>
          <div className="flex justify-center items-center h-20 aspect-video mx-6">
            <img className="h-full w-full object-contain" src="/energizing_borneo.png" alt="Energizing BORNEO" />
          </div>
          <div className="flex justify-center items-center h-20 aspect-video mx-6">
            <img className="h-full w-full object-contain" src="/kopisetia.png" alt="KOPI SETIA" />
          </div>
          <div className="flex justify-center items-center h-20 aspect-video mx-6">
            <img className="h-full w-full object-contain" src="/pertamina.png" alt="Pertamina" />
          </div>
          <div className="flex justify-center items-center h-20 aspect-video mx-6">
            <img className="h-full w-full object-contain" src="/yamaha.png" alt="YAMAHA" />
          </div>
        </MarqueeExtended>
      </Section>
    </>
  );
}