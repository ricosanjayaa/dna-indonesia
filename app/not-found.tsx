import Link from "next/link";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import Text from "@/components/Text.component";
import BackButton from "@/components/BackButton.component";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

export const metadata: Metadata = {
  title: "404 Page | DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "Halaman tidak ditemukan.",
  openGraph: {
    title: "404 Page | DNA Indonesia", /** Harusnya kedua title itu sama */
    description: "Halaman tidak ditemukan.",
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

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 text-center justify-center flex-1 md:w-3/4 w-full mx-auto">
      <h1 className="-mb-4 text-2xl md:text-4xl text-primary font-semibold tracking-tighter leading-none">Page not found</h1>
      <Text>Oops! Halaman yang Anda cari tidak ditemukan. Mungkin tautan yang Anda ikuti salah atau halaman tersebut telah dihapus. Silakan kembali ke beranda atau periksa kembali URL yang Anda masukkan.</Text>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
        <BackButton />
        <Button className="-order-1 sm:order-none" asChild><Link href="/">Halaman utama</Link></Button>
      </div>
    </div>
  )
}