"use client";
import { useState } from "react";
import PortofolioImage from "@/components/PortofolioImage.component";
import { Button } from "@/components/ui/button";

export default function Portofolio() {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const portofolio = [
    { src: "https://picsum.photos/id/1/1000", type: 1 },
    { src: "https://picsum.photos/id/2/1000", type: 1 },
    { src: "https://picsum.photos/id/3/1000", type: 1 },
    { src: "https://picsum.photos/id/4/1000", type: 1 },
    { src: "https://picsum.photos/id/5/1000", type: 2 },
    { src: "https://picsum.photos/id/6/1000", type: 3 },
    { src: "https://picsum.photos/id/7/1000", type: 1 },
    { src: "https://picsum.photos/id/8/1000", type: 1 },
    { src: "https://picsum.photos/id/9/1000", type: 4 },
    { src: "https://picsum.photos/id/10/1000", type: 1 },
    { src: "https://picsum.photos/id/11/1000", type: 1 },
  ];

  const filteredPortofolio = selectedType ? portofolio.filter((item) => item.type === selectedType) : portofolio;
  const visiblePortofolio = filteredPortofolio.slice(0, visibleCount);

  const getTypeLabel = (type: number) => {
    switch (type) {
      case 1:
        return "Instagram Handling";
      case 2:
        return "Tiktok & Reels Handling";
      case 3:
        return "Photo Product Service";
      case 4:
        return "Photo & Video Visit";
      default:
        return "Semua";
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        <Button size="sm" variant={selectedType === null ? "default" : "secondary"} onClick={() => setSelectedType(null)}>All</Button>
        {[1, 2, 3, 4].map((type) => (
          <Button size="sm" key={type} variant={selectedType === type ? "default" : "secondary"} onClick={() => setSelectedType(type)}>{getTypeLabel(type)}</Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {visiblePortofolio.map((item, index) => (
          <PortofolioImage key={index} src={item.src} type={item.type as 1 | 2 | 3 | 4} />
        ))}
      </div>

      {visibleCount < filteredPortofolio.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={() => setVisibleCount(visibleCount + 2)}>Lihat Lebih Banyak</Button>
        </div>
      )}
    </>
  );
}