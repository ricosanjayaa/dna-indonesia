import { Metadata } from "next";

import MarqueeExtended from "@/components/MarqueeExtended.component";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions.component";
import Section from "@/components/Section.component";
import CarouselExtended from "@/components/CarouselExtended.component";
import SolutionMarquee from "@/components/SolutionMarquee.component";
import Text from "@/components/Text.component";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CarouselItem } from "@/components/ui/carousel";
import CardExtended from "@/components/CardExtended.component";
import Comparison from "@/components/Comparison.component";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

export const metadata: Metadata = {
  title: "DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "DNA Indonesia adalah agensi yang fokus pada konten kreatif dan pemasaran digital di media sosial, membantu brand mengelola dan mengatasi permasalahan.",
  keywords: [
    "Social Media", "Digital Marketing", "Social Media Ads", "Influencer Marketing", 
    "Instagram Ads", "TikTok Ads", "Brand Marketing", "KOL Marketing", 
    "Viral Content", "Content Creator", "Paid Ads", "UGC Marketing", 
    "Hashtag Strategy", "Social Growth", "Online Branding"
  ],
  openGraph: {
    title: "DNA Indonesia", /** Harusnya kedua title itu sama */
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

export default function LandingPage() {
  const questions = [
    {
      question: "Kenapa memilih DNA Indonesia?",
      answer: "Kami adalah Creative & Digital Marketing Agency yang mengkombinasikan keahlian dalam pembuatan konten-konten kreatif di media sosial dengan strategi yang terukur untuk memperkuat merek Anda. Kami berkomitmen untuk memberikan solusi inovatif yang tidak hanya memikat audiens, tetapi juga menghasilkan hasil yang nyata dan signifikan bagi pertumbuhan bisnis Anda."
    },
    {
      question: "Apakah boleh konsultasi sebelum langganan?",
      answer: "Tentu, Anda bisa melakukan konsultasi sebelum melakukan pemesanan di DNA Indonesia melalui Nomor CS kami. Kami siap membantu menjawab pertanyaan Anda, memberikan informasi lebih lanjut mengenai layanan yang kami tawarkan, serta membantu Anda memilih solusi yang sesuai dengan kebutuhan dan tujuan pemasaran digital Anda. Silakan hubungi kami untuk konsultasi lebih lanjut atau pertemuan awal."
    },
    {
      question: "Apa yang harus disiapkan sebelumnya?",
      answer: "Sebelum berkonsultasi dengan DNA Indonesia atau agensi kreatif dan pemasaran digital lainnya, siapkan tujuan, target audiens, budget, pertanyaan spesifik, informasi perusahaan, dan ekspektasi hasil kinerja. Persiapan ini akan memastikan konsultasi yang lebih efektif dan hasil proyek yang optimal."
    },
    {
      question: "Apakah bisnis saya cocok bermitra dengan DNA Indonesia?",
      answer: "Untuk menentukan apakah bisnis Anda cocok bermitra dengan DNA Indonesia, perhatikan bidang bisnis Anda, tujuan pemasaran, anggaran yang tersedia, serta kemampuan untuk berkomunikasi dan berkolaborasi dengan agensi tersebut. Pastikan nilai dan budaya perusahaan Anda sejalan untuk memastikan kerja sama yang efektif dan berkelanjutan."
    },
    {
      question: "Apakah dijamin sukses?",
      answer: "Tidak ada jaminan sukses mutlak dalam pemasaran atau bisnis. Sukses bergantung pada berbagai faktor termasuk strategi yang tepat, implementasi yang efektif, kondisi pasar, dan respons dari target audiens. DNA Indonesia dapat membantu memaksimalkan potensi kesuksesan dengan menyediakan strategi kreatif dan pemasaran digital yang kuat, namun hasil akhirnya akan dipengaruhi oleh berbagai variabel dan upaya bersama antara agensi dan bisnis."
    }
  ];

  return (
    <>
      <section className="py-8 md:py-12 md:w-4/5 mx-auto flex flex-col gap-4 md:text-center">
        <h1 className="-mb-2 text-2xl md:text-4xl text-primary font-semibold tracking-tighter leading-none">Creative and Digital Marketing Agency</h1>
        <Text>DNA Indonesia atau PT Digital Niaga Aksesindo merupakan agensi yang berfokuskan melayani pembuatan konten kreatif melalui pemasaran digital khususnya di media sosial. Kami berdedikasi dan juga fokus membantu brand dalam menangani permasalahan di media sosial.</Text>
        <Button asChild className="md:mx-auto w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
      </section>

      <MarqueeExtended>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <img  className="h-full w-full object-contain" src="/ecolink.png" alt="e-COLINK" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <img  className="h-full w-full object-contain" src="/energizing_borneo.png" alt="Energizing BORNEO" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <img  className="h-full w-full object-contain" src="/kopisetia.png" alt="KOPI SETIA" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <img  className="h-full w-full object-contain" src="/pertamina.png" alt="Pertamina" />
        </div>
        <div className="flex justify-center items-center h-20 aspect-video mx-6">
          <img  className="h-full w-full object-contain" src="/yamaha.png" alt="YAMAHA" />
        </div>
      </MarqueeExtended>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <img  src="/portofolio_desain.png" alt="Portofolio DNA Indonesia" />
        <Section className="md:w-4/5 mx-auto md:col-span-2 gap-4" title="about us" header="All-in-one creative digital agency" >
          <Text className="-mt-2">Media sosial adalah arena kami, dan dengan tim ahli yang berdedikasi serta pemahaman mendalam tentang dinamika serta algoritma terkini, kami memastikan setiap pesan yang Anda sampaikan dapat menjangkau audiens yang tepat secara efektif dan maksimal.</Text>
        </Section>
      </section>

      <Section className="gap-4" header="Our services">
        <Text className="-mt-2">Kami menyediakan layanan terbaik dan terlengkap untuk memenuhi segala kebutuhan bisnis Anda dalam menjalankan Social Media Marketing yang efektif dan optimal, membantu meningkatkan visibilitas serta engagement di berbagai platform.</Text>
        <CarouselExtended>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Instagram Handling">Jasa pembuatan konten desain feed Instagram mencakup ide konten, copywriting, desain, penjadwalan konten, hingga laporan bulanan yang komprehensif.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Reels & Tiktok Handling">Jasa pembuatan konten video pendek mencakup ide konten, copywriting, produksi video, penjadwalan konten, hingga laporan bulanan yang mendetail.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Photo Product Service">Jasa foto produk dengan kualitas gambar yang profesional dan estetika yang disesuaikan dengan kebutuhan branding Anda.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Photo & Video Service">Jasa foto dan video yang mencakup seluruh proses dari pemotretan hingga editing, sesuai dengan kebutuhan outlet Anda secara menyeluruh.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Logo Design">Jasa pembuatan logo sebagai identitas visual brand Anda yang unik dan membedakan Anda dari kompetitor.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Website & Landing Page Service">Jasa pembuatan Website & Landing Page yang profesional dan efektif, mencakup konsep hingga implementasi teknis yang optimal.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Ads Handling">Jasa pengelolaan periklanan yang mencakup pengaturan kampanye, pengelolaan, serta optimasi iklan secara rutin untuk hasil yang maksimal.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Influencer Marketing Handling">Jasa manajemen influencer yang mencakup identifikasi, negosiasi, kerjasama, pengawasan, hingga evaluasi kinerja secara menyeluruh.</CardExtended></CarouselItem>
        </CarouselExtended>
      </Section>

      <Section className="gap-4" header="Mengapa DNA Indonesia?">
        <Text className="-mt-2">DNA Indonesia merupakan satu-satunya Creative & Digital Marketing Agency yang menerapkan kolaborasi bahkan partner dengan brand dalam menyediakan layanan.</Text>
        <Comparison />
      </Section>

      <SolutionMarquee />

      <Section className="gap-4" header="Frequently asked questions">
        <Text className="-mt-2">Cari tahu jawaban atas pertanyaan umum mengenai layanan kami. Kami siap membantu Anda memahami bagaimana strategi kami dapat meningkatkan visibilitas dan engagement bisnis Anda.</Text>
        <FrequentlyAskedQuestions questions={questions} />
      </Section>
    </>
  );
}