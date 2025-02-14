import Text from "@/components/Text.component";

export default function PortofolioImage({ src, type }: { src: string, type: 1 | 2 | 3 | 4 }) {
  let typeAfter = "";

  switch (type) {
    case 1:
      typeAfter = "Instagram Handling";
      break;
    case 2:
      typeAfter = "Tiktok & Reels Handling";
      break;
    case 3:
      typeAfter = "Photo Product Service";
      break;
    case 4:
      typeAfter = "Photo & Video Visit";
      break;
  }

  return (
    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden group">
      <img className="h-full aspect-[4/5] object-cover rounded-t-md rounded-b-md group-hover:rounded-b-none group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" src={src} alt={"Portofolio " + typeAfter + " DNA Indonesia"} />
      <div className="absolute inset-x-0 -bottom-[84px] bg-background/70 backdrop-blur-lg p-8 rounded-b-md transform group-hover:-translate-y-[84px] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] delay-150">
        <Text>Portofolio DNA | {typeAfter}</Text>
      </div>
    </div>
  );
}