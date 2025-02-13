"use client";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BackButton() {
  return <Button variant="secondary" className="group" onClick={() => window.history.back()}><ArrowLeft className="me-2 ms-0 opacity-60 transition-transform group-hover:-translate-x-0.5" size={16} strokeWidth={2} aria-hidden="true" /> Kembali</Button>;
}