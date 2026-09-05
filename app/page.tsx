import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
// Quando avrai la foto, sostituisci il div placeholder qui sotto con:
// import Image from "next/image";
// <Image src="/foto-giuseppe.jpg" alt="Giuseppe Longo" width={480} height={600} className="object-cover w-full h-full" />

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
      <div>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-ink">
          Ciao, sono
          <br />
          Giuseppe Longo
        </h1>
        <p className="mt-6 text-lg text-muted max-w-content leading-relaxed">
          Raccolgo qui i miei progetti, il mio percorso e gli scritti a cui
          tengo — appunti, approfondimenti e pensieri sparsi che con il tempo
          prendono forma.
        </p>
        <div className="mt-8 flex gap-6 text-sm">
          <Link
            href="/progetti"
            className="flex items-center gap-1 text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity"
          >
            Vedi i progetti
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contatti"
            className="text-muted border-b border-rule pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Scrivimi
          </Link>
        </div>
      </div>

      <div className="aspect-[4/5] bg-rule/40 border border-rule flex items-center justify-center order-first md:order-last">
        <span className="text-muted text-sm">Foto in arrivo</span>
      </div>
    </section>
  );
}
