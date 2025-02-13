import Link from "next/link";
import { Check, X } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Text from "@/components/Text.component";
import { Badge } from "@/components/ui/badge";

export default function PricingCard({ plan, description, price, features, hot, session = "bulan" }: { plan: string, description: string, price: number, hot: boolean, features: { supported: boolean; label: string }[], session?: string }) {
  return (
    <Card className="w-full h-full rounded-md flex flex-col">
      <CardHeader className="flex-1">
        <CardTitle className="flex flex-row justify-between items-center">
          <span className="flex flex-row gap-4 items-center font-normal">{plan}</span>
          {hot ? <Badge>PALING LARIS</Badge> : null}
        </CardTitle>
        <CardDescription><Text>{description}</Text></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8 justify-start">
          <p className="flex flex-row  items-center gap-2 text-xl">
            <span className="text-4xl font-medium">{price.toLocaleString("id-ID")}K</span>
            <span className="text-xs md:text-sm text-foreground/75 hover:text-foreground transition-all duration-200">{" "}/ {session}</span>
          </p>
          <div className="flex flex-col gap-4 justify-start">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-row gap-4 items-center">
                {feature.supported ? <Check className="inline-flex stroke-emerald-600" size={16} strokeWidth={2} aria-hidden="true" /> : <X className="inline-flex stroke-red-600" size={16} strokeWidth={2} aria-hidden="true" />}
                <Text>{feature.label}</Text>
              </div>
            ))}
          </div>
          <Button asChild className="w-full"><Link target="__blank" href="https://api.whatsapp.com/send?phone=6282254557998&text=Halo!%20Saya%20tertarik%20dengan%20jasa%20DNA%20Indonesia.%20Bisa%20jelaskan%20lebih%20lengkap%3F%20">Pesan sekarang</Link></Button>
        </div>
      </CardContent>
    </Card>
  );
}