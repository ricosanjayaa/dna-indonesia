import { Metadata } from "next";
import Link from "next/link";

import Text from "@/components/Text.component";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section.component";
import MarqueeExtended from "@/components/MarqueeExtended.component";
import CarouselExtended from "@/components/CarouselExtended.component";
import { CarouselItem } from "@/components/ui/carousel";
import CardExtended from "@/components/CardExtended.component";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions.component";
import PricingCard from "@/components/PricingCard.component";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

export const metadata: Metadata = {
  title: "Tiktok & Reels Handling | DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "DNA Indonesia adalah agensi yang fokus pada konten kreatif dan pemasaran digital di media sosial, membantu brand mengelola dan mengatasi permasalahan.",
  keywords: [
    "Social Media", "Digital Marketing", "Social Media Ads", "Influencer Marketing", 
    "Instagram Ads", "TikTok Ads", "Brand Marketing", "KOL Marketing", 
    "Viral Content", "Content Creator", "Paid Ads", "UGC Marketing", 
    "Hashtag Strategy", "Social Growth", "Online Branding"
  ],
  openGraph: {
    title: "Tiktok & Reels Handling | DNA Indonesia", /** Harusnya kedua title itu sama */
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

export default function TiktokReelsHandlingPage() {
  const plans = [
    {
      plan: "Trial Plan",
      description: "Layanan kami dengan ide konten, caption, riset hashtag, dan desain yang sepenuhnya diserahkan kepada Anda.",
      price: 975,
      hot: false,
      features: [
        { supported: true, label: "Empat short videos" },
        { supported: true, label: "Maksimum satu talent" },
        { supported: true, label: "Editorial content plan" },
        { supported: true, label: "Caption writing" },
        { supported: true, label: "Riset hashtag" },
        { supported: true, label: "Maksimum 60 detik per videos" },
        { supported: true, label: "Satu kali revisi minor" },
        { supported: false, label: "Scheduling post" },
        { supported: false, label: "Monthly report" },
      ]
    },
    {
      plan: "Half Plan",
      description: "Layanan lengkap, dari konten hingga laporan bulanan, dengan kuota video terbatas.",
      price: 2500,
      hot: false,
      features: [
        { supported: true, label: "Delapan short videos" },
        { supported: true, label: "Maksimum satu talent" },
        { supported: true, label: "Editorial content plan" },
        { supported: true, label: "Caption writing" },
        { supported: true, label: "Riset hashtag" },
        { supported: true, label: "Maksimum 60 detik per video" },
        { supported: true, label: "Tiga kali revisi minor" },
        { supported: true, label: "Scheduling post" },
        { supported: true, label: "Monthly report" },
      ]
    },
    {
      plan: "Full Plan",
      description: "Paket lengkap dengan lebih banyak video untuk optimalkan akun Tiktok & Instagram Anda.",
      price: 4050,
      hot: true,
      features: [
        { supported: true, label: "Lima belas short videos" },
        { supported: true, label: "Maksimum dua talent" },
        { supported: true, label: "Editorial content plan" },
        { supported: true, label: "Caption writing" },
        { supported: true, label: "Riset hashtag" },
        { supported: true, label: "Maksimum 60 detik per video" },
        { supported: true, label: "Tiga kali revisi minor" },
        { supported: true, label: "Scheduling post" },
        { supported: true, label: "Monthly report" },
      ]
    },
    {
      plan: "Advanced Plan",
      description: "Layanan paling komprehensif dengan kuota desain tertinggi untuk performa maksimal.",
      price: 7400,
      hot: false,
      features: [
        { supported: true, label: "Tiga puluh short videos" },
        { supported: true, label: "Maksimum tiga talent" },
        { supported: true, label: "Editorial content plan" },
        { supported: true, label: "Caption writing" },
        { supported: true, label: "Riset hashtag" },
        { supported: true, label: "Maksimum 60 detik per video" },
        { supported: true, label: "Tiga kali revisi minor" },
        { supported: true, label: "Scheduling post" },
        { supported: true, label: "Monthly report" },
      ]
    }
  ];

  const questions = [
    {
      question: "Apa perbedaan antara paket Trial, Half, Full, dan Advanced Plan?",
      answer: "Paket Trial memberikan ide konten, caption, riset hashtag, dan desain yang diserahkan kepada Anda. Paket Half, Full, dan Advanced menawarkan layanan lengkap hingga handle akun sosmed secara penuh dengan perbedaan kuota desain yang semakin besar."
    },
    {
      question: "Apakah saya bisa memberikan revisi pada desain yang telah dibuat?",
      answer: "Ya, semua paket kecuali Trial Plan (hanya 1x), termasuk revisi desain untuk memastikan hasil sesuai dengan keinginan Anda."
    },
    {
      question: "Bagaimana cara Anda menentukan strategi konten yang tepat untuk bisnis saya?",
      answer: "Kami menganalisis target audiens, tren industri, dan tujuan bisnis Anda untuk menciptakan strategi konten yang paling efektif."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk memulai setelah saya memilih paket?",
      answer: "Setelah paket dipilih dan informasi lengkap diberikan, kami biasanya memerlukan 3-5 hari kerja untuk memulai layanan."
    },
    {
      question: "Apakah saya bisa beralih ke paket yang lebih tinggi di tengah jalan?",
      answer: "Tentu, Anda dapat upgrade ke paket yang lebih tinggi kapan saja dengan membayar selisih biaya sesuai dengan kuota desain tambahan yang diperlukan."
    }
  ];

  return (
    <>
      <section className="py-8 md:py-12 w-full md:w-4/5 mx-auto flex flex-col gap-4 md:text-center">
        <h1 className="-mb-2 text-2xl md:text-4xl text-primary font-semibold tracking-tighter leading-none">Tiktok & Reels Handling</h1>
        <Text>Layanan TikTok & Reels Handling kami menawarkan solusi menyeluruh untuk meningkatkan kehadiran brand Anda baik di TikTok ataupun Instagram. Mulai dari konsep kreatif hingga laporan performa bulanan, kami menangani semua kebutuhan konten Anda. Kami akan menangani semua kebutuhan konten Anda, termasuk perencanaan pembuatan konten, pembuatan caption, riset hashtag, penjadwalan yang  tepat, serta laporan performa yang membantu Anda untuk terus berkembang.</Text>
        <Button asChild className="md:mx-auto w-fit"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Konsultasi sekarang</Link></Button>
      </section>

      <Section className="!gap-8 !pb-8 md:!pb-12">
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

        <div className="mt-4 grid grid-cols-2 gap-4 md:w-3/4 mx-auto md:text-center">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Strategy</h2>
            <Text>Kami memiliki pendekatan khusus dalam mengelola media sosial yang telah terbukti berhasil dan efektif.</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Effective</h2>
            <Text>Kami menggunakan metode berbasis data untuk membuat strategi yang cocok untuk bisnis anda.</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Free</h2>
            <Text>Tidak yakin tentang kebutuhan dan keinginan Anda? diskusi dengan tim kami sekarang juga tanpa biaya!</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Revision</h2>
            <Text>Kami memberikan garansi revisi untuk memastikan kepuasan pelanggan dengan layanan kami.</Text>
          </div>
        </div>
      </Section>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <img className="h-full aspect-square object-cover rounded-md" src="/portofolio_reels_1.png" alt="Portofolio Tiktok & Reels Handling DNA Indonesia" />
        <Section className="md:w-4/5 mx-auto md:col-span-2 gap-4" title="smm #1 di indonesia" header="Miliki tim admin sosmed yang profesional tanpa ribet!" >
          <Text className="-mt-2">Saatnya membuat bisnis makin dikenal melalui sosial media. Tanpa perlu kehilangan banyak waktu, biaya dan pikiran dengan bekerjasama bersama DNA Indonesia yang sudah dipercaya 100+ klien.</Text>
          <ul className="space-y-1 list-disc list-inside text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200">
            <li>Konsultasi dan perencanaan marketing melalui sosial media yang terbaik untuk bisnis bersama dengan ahlinya.</li>
            <li>Miliki tim profesional seperti tim in-house tanpa beban biaya perekrutan, training, gaji, dan sebagainya.</li>
            <li>Kontrak dan biaya disesuaikan dengan kebutuhan bisnis.</li>
          </ul>
        </Section>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-6">
        <Section className="lg:col-span-2 gap-4" header="Mengapa harus manajemen sosial media bersama DNA Indonesia?">
          <Text className="-mt-2">From nothing to everything! Lebih dari sekedar mengelola, kami mengurus semuanya mulai dari strategi, pembuatan konten, campaign, hingga evaluasi untuk mencapai goal yang telah ditentukan.</Text>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center md:text-left">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">300+</h2>
              <Text>Akun sosial media telah kami bantu untuk meningkatkan kualitas konten, desain, dll.</Text>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">3+ tahun</h2>
              <Text>Berpengalaman tim yang ahli dalam digital marketing terutama sosial media.</Text>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">90%</h2>
              <Text>Klien kami puas dan melakukan perpanjangan kontrak secara berkala.</Text>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">All-in-one</h2>
              <Text>Tidak hanya sekedar desain feed / konten, layanan kami mencangkup semua aspek.</Text>
            </div>
          </div>
        </Section>
        <img className="h-full aspect-square object-cover rounded-md" src="/portofolio_reels_2.png" alt="Portofolio DNA Indonesia" />
      </section>

      <Section className="gap-4" header="Jasa Digital Marketing">
        <Text className="-mt-2">Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam melakukan Digital Marketing.</Text>
        <CarouselExtended>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Meningkatkan brand awareness">Dengan pengelolaan sosial media yang tepat, value dari brand akan semakin meningkat.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Meningkatkan target pasar">Strategi marketing dapat diatur agar bisnis dapat menjangkau calon konsumen potensial.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Meningkatkan sales & profit">Dengan strategi yang efektif & efisien, pelanggan potensial akan lebih mudah dikonversi.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Meningkatkan engagement rate">Banyaknya interaksi merupakan indikator kesuksesan dalam mengelola sosial media.</CardExtended></CarouselItem>
        </CarouselExtended>
      </Section>

      <section className="flex flex-col gap-y-8 md:gap-y-0 gap-x-6">
        <Section className="gap-4" header="Cek harga Tiktok & Reels Handling">
          <Text className="-mt-2">Dapatkan layanan Tiktok & Reels Handling dengan harga terbaik! Kelola akun Anda secara profesional untuk meningkatkan engagement dan branding.</Text>
          <CarouselExtended>
            {plans.map((plan) => (
              <CarouselItem key={plan.plan} className="md:basis-1/2 lg:basis-1/3"><PricingCard plan={plan.plan} description={plan.description} price={plan.price} hot={plan.hot} features={plan.features} /></CarouselItem>))}
          </CarouselExtended>
        </Section>
      </section>

      <Section className="gap-4" header="Frequently asked questions">
        <Text className="-mt-2">Cari tahu jawaban atas pertanyaan umum mengenai layanan kami. Kami siap membantu Anda memahami bagaimana strategi kami dapat meningkatkan visibilitas dan engagement bisnis Anda.</Text>
        <FrequentlyAskedQuestions questions={questions} />
      </Section>
    </>
  );
}