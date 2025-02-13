"use client";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
    }
  
    const rafId = requestAnimationFrame(update);
  
    return () => cancelAnimationFrame(rafId);
  }, [])
  
  return <ReactLenis root options={{ smoothWheel: true }} ref={lenisRef}>{children}</ReactLenis>;
}