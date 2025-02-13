import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const items = [
  {
    topic: "Fixed cost",
    house: [
      { supported: true, description:"" },
    ],
    freelance: [
      { supported: false, description:"" },
    ],
    dna: [
      { supported: false, description:"" },
    ],
  },
  {
    topic: "Biaya rekrutmen & training",
    house: [
      { supported: true, description:"" },
    ],
    freelance: [
      { supported: false, description:"" },
    ],
    dna: [
      { supported: false, description:"" },
    ],
  },
  {
    topic: "Harga",
    house: [
      { supported: null, description:"Pengeluaran sangat besar" },
    ],
    freelance: [
      { supported: null, description:"Tidak ada standar" },
    ],
    dna: [
      { supported: null, description:"Sudah disesuaikan dengan level bisnis" },
    ],
  },
  {
    topic: "Efisiensi biaya tim",
    house: [
      { supported: false, description:"" },
    ],
    freelance: [
      { supported: true, description:"" },
    ],
    dna: [
      { supported: true, description:"" },
    ],
  },
  {
    topic: "Bisnis fokus pada kompetensi utamanya",
    house: [
      { supported: false, description:"" },
    ],
    freelance: [
      { supported: null, description:"Perlu ada yang mengatur" },
    ],
    dna: [
      { supported: null, description:"Kami akan menjadi konsultan sekaligus partner eksekusi" },
    ],
  },
  {
    topic: "Kualitas hasil pekerjaan",
    house: [
      { supported: null, description:"Semakin profesional maka fixed cost semakin besar" },
    ],
    freelance: [
      { supported: null, description:"Sulit mengetahui apakah hasil dengan harga sebanding" },
    ],
    dna: [
      { supported: null, description:"Proses dan hasil sudah distandarisasi" },
    ],
  },
  {
    topic: "Menguasai digital marketing tools",
    house: [
      { supported: null, description:"Belum tentu" },
    ],
    freelance: [
      { supported: null, description:"Belum tentu" },
    ],
    dna: [
      { supported: null, description:"Menguasai tools dan teknologi terkini" },
    ],
  },
  {
    topic: "Aplikasi manajemen proyek",
    house: [
      { supported: false, description:"" },
    ],
    freelance: [
      { supported: false, description:"" },
    ],
    dna: [
      { supported: true, description:"" },
    ],
  },
];

export default function Comparison() {
  return (
    <Table className="bg-background">
      <TableHeader>
        <TableRow className="border-y-0 *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell colSpan={2}></TableCell>
          <TableHead colSpan={1} className="border-b border-border text-center">In-House</TableHead>
          <TableHead colSpan={1} className="border-b border-border text-center">Freelance / Agency</TableHead>
          <TableHead colSpan={1} className="border-b border-border text-center !font-bold">DNA Indonesia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.topic} className="*:border-border [&>:not(:last-child)]:border-r">
            <TableHead className="font-medium text-foreground" colSpan={2}>{item.topic}</TableHead>
            {[...item.house, ...item.freelance, ...item.dna].map((browser, index) => (
              <TableCell key={index} className="space-y-1 text-center">
                {browser.supported !== null && browser.supported !== undefined && (browser.supported ? ( <Check className="inline-flex stroke-emerald-600" size={16} strokeWidth={2} aria-hidden="true" /> ) : ( <X className="inline-flex stroke-red-600" size={16} strokeWidth={2} aria-hidden="true" /> ))}
                {browser.description !== "" ? <div className="text-xs font-medium text-muted-foreground">{browser.description}</div> : null}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}