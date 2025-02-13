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
    <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden group">
      <img className="h-full aspect-[4/5] object-cover rounded-t-md rounded-b-md group-hover:rounded-b-none group-hover:-translate-y-10 transition-all duration-500 ease-in-out" src={src} alt={"Portofolio " + typeAfter + " DNA Indonesia"} />
      <Text className="absolute bg-background w-full p-8 rounded-b-md group-hover:-translate-y-[84px] transition-all duration-1000 ease-in-out">Portofolio DNA | {typeAfter}</Text>
    </div>
  );
}