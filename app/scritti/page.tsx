import { Calendar, Clock } from "lucide-react";

// Sostituisci con i tuoi scritti reali.
const scritti = [
  {
    titolo: "Titolo dello scritto",
    data: "Set 2026",
    tempoLettura: "4 min",
    estratto:
      "Un breve estratto o riassunto del pensiero/approfondimento, giusto per dare un'idea di cosa tratta.",
    link: "#",
  },
  {
    titolo: "Un altro appunto",
    data: "Ago 2026",
    tempoLettura: "6 min",
    estratto: "Estratto del secondo scritto, due righe di anteprima.",
    link: "#",
  },
];

export default function Scritti() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">
        Scritti
      </h1>
      <p className="text-muted max-w-content mb-12">
        Appunti, pensieri e approfondimenti — spazio libero da progetti e CV.
      </p>

      <ul className="divide-y divide-rule border-t border-rule max-w-content">
        {scritti.map((scritto) => (
          <li key={scritto.titolo} className="group py-8">
            <a href={scritto.link} className="block">
              <h2 className="font-serif text-2xl text-ink group-hover:text-accent transition-colors">
                {scritto.titolo}
              </h2>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {scritto.data}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {scritto.tempoLettura}
                </span>
              </div>
              <p className="mt-3 text-muted leading-relaxed">
                {scritto.estratto}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
