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
  title: "Photo Product Service | DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "DNA Indonesia adalah agensi yang fokus pada konten kreatif dan pemasaran digital di media sosial, membantu brand mengelola dan mengatasi permasalahan.",
  keywords: [
    "Social Media", "Digital Marketing", "Social Media Ads", "Influencer Marketing", 
    "Instagram Ads", "TikTok Ads", "Brand Marketing", "KOL Marketing", 
    "Viral Content", "Content Creator", "Paid Ads", "UGC Marketing", 
    "Hashtag Strategy", "Social Growth", "Online Branding"
  ],
  openGraph: {
    title: "Photo Product Service | DNA Indonesia", /** Harusnya kedua title itu sama */
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

export default function PhotoProductServicePage() {
  const plans = [
    {
      plan: "Sesi 1 jam",
      description: "Maksimum 4 produk",
      price: 600,
      hot: false,
      features: [
        { supported: true, label: "Empat puluh foto lebih" },
        { supported: true, label: "Durasi foto satu jam" },
        { supported: true, label: "Free edit empat foto" },
        { supported: false, label: "Free paid promote" },
      ]
    },
    {
      plan: "Sesi 2 jam",
      description: "Maksimum 10 produk",
      price: 1200,
      hot: false,
      features: [
        { supported: true, label: "Delapan puluh foto lebih" },
        { supported: true, label: "Durasi foto dua jam" },
        { supported: true, label: "Free edit sepuluh foto" },
        { supported: false, label: "Free paid promote" },
      ]
    },
    {
      plan: "Sesi 4 jam",
      description: "Maksimum 25 produk",
      price: 2400,
      hot: true,
      features: [
        { supported: true, label: "Seratus enam puluh foto lebih" },
        { supported: true, label: "Durasi foto empat jam" },
        { supported: true, label: "Free edit dua puluh lima foto" },
        { supported: true, label: "Free paid promote" },
      ]
    },
    {
      plan: "Sesi 6 jam",
      description: "Maksimum 40 produk",
      price: 3600,
      hot: false,
      features: [
        { supported: true, label: "Dua ratus empat puluh foto lebih" },
        { supported: true, label: "Durasi foto enam jam" },
        { supported: true, label: "Free edit empat puluh foto" },
        { supported: true, label: "Free paid promote" },
      ]
    },
    {
      plan: "Sesi 8 jam",
      description: "Maksimum 60 produk",
      price: 4800,
      hot: false,
      features: [
        { supported: true, label: "Tiga ratus dua puluh foto lebih" },
        { supported: true, label: "Durasi foto delapan jam" },
        { supported: true, label: "Free edit enam puluh foto" },
        { supported: true, label: "Free paid promote" },
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
        <h1 className="-mb-2 text-2xl md:text-4xl text-primary font-semibold tracking-tighter leading-none">Photo Product Service</h1>
        <Text>Layanan Photo Product Service kami menawarkan solusi lengkap untuk meningkatkan visual produk Anda. Mulai dari pemotretan profesional hingga strategi promosi, kami siap membantu brand Anda tampil lebih menarik.</Text>
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
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Gear-up</h2>
            <Text>Menyediakan peralatan profesional untuk memastikan hasil foto produk yang optimal, dengan dukungan teknologi dan perlengkapan terbaik.</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Effectivity</h2>
            <Text>Memanfaat waktu secara efisien menghasilkan gambar yang berkualitas, menarik serta memikat perhatian.</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Technique</h2>
            <Text>Mengambil gambar produk dengan angle yang menarik dan estetis, menciptakan visual yang memikat bagi para pelanggan.</Text>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-primary font-semibold">Capture</h2>
            <Text>Bingung tentang keinginan anda? Berkolaborasi dengan tim kami untuk memastikan hasil foto produk yang optimal dan sesuai dengan kebutuhan Anda.</Text>
          </div>
        </div>
      </Section>

      <section className="grid md:grid-cols-3 gap-4 md:gap-0">
        <img className="h-full aspect-square object-cover rounded-md" src="/portofolio_photo_1.png" alt="Portofolio Photo Product Service DNA Indonesia" />
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
        <img className="md:order-2 h-full aspect-square object-cover rounded-md" src="/portofolio_photo_2.png" alt="Portofolio DNA Indonesia" />
        <Section className="md:order-1 lg:col-span-2 gap-4" header="Mengapa harus jasa photo product dengan DNA Indonesia?">
          <Text className="-mt-2">Dimulai dari awal, kami ciptakan foto produk berkualitas tinggi dengan kamera profesional. Setiap foto dirancang untuk memberikan hasil yang maksimal, efektif, hingga strategi promosi untuk memberikan hasil yang memuaskan.</Text>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center md:text-left">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">20+</h2>
              <Text>Brand telah kami bantu dalam meningkatkan kualitas Foto dan strategi promosi.</Text>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">4+ tahun</h2>
              <Text>Memiliki tim ahli dalam fotografi dan editing produk, siap memaksimalkan promosi di media sosial.</Text>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">80%</h2>
              <Text>Klien kami puas dan memilih untuk memperpanjang kontrak dengan skala yang lebih besar.</Text>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-4xl text-primary font-semibold">Efficient</h2>
              <Text>Layanan kami meliputi semua tahapan, mulai dari pengambilan foto hingga perencanaan promosi yang optimal.</Text>
            </div>
          </div>
        </Section>
      </section>

      <Section className="gap-4" header="Jasa Photo Product">
        <Text className="-mt-2">Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam melakukan Digital Marketing.</Text>
        <CarouselExtended>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Professional">Menghasilkan gambar produk yang berkualitas tinggi dan eye-catching.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Flexible">Capture gambar product dimanapun, sesuai dengan karakteristik produk.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Editing">Menyempurnakan hasil gambar produk, memaksimalkan kualitas gambar produk.</CardExtended></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><CardExtended title="Promotion">Memaksimalkan potensi gambar produk serta menarik perhatian melalui sosial media.</CardExtended></CarouselItem>
        </CarouselExtended>
      </Section>

      <section className="flex flex-col gap-y-8 md:gap-y-0 gap-x-6">
        <Section className="gap-4" header="Cek harga Photo Product Service">
          <Text className="-mt-2">Dapatkan layanan Photo Product Service dengan harga terbaik! Kelola akun Anda secara profesional untuk meningkatkan engagement dan branding.</Text>
          <CarouselExtended>
            {plans.map((plan) => (
              <CarouselItem key={plan.plan} className="md:basis-1/2 lg:basis-1/3"><PricingCard plan={plan.plan} description={plan.description} price={plan.price} hot={plan.hot} features={plan.features} session="sesi" /></CarouselItem>))}
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