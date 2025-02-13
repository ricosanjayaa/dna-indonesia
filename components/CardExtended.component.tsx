import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Text from "@/components/Text.component";

export default function CardExtended({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <Card className="h-full flex flex-col text-left">
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="h-full"><Text>{children}</Text></CardContent>
    </Card>
  );
}