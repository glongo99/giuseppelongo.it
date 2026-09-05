// Sostituisci questo array con i tuoi progetti reali.
const progetti = [
  {
    titolo: "Nome del progetto",
    anno: "2026",
    descrizione:
      "Breve descrizione di cosa fa questo progetto e perché l'hai fatto.",
    tags: ["Tag1", "Tag2"],
    link: "#",
  },
  {
    titolo: "Secondo progetto",
    anno: "2025",
    descrizione: "Un'altra breve descrizione del progetto.",
    tags: ["Tag3"],
    link: "#",
  },
];

export default function Progetti() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">
        Progetti
      </h1>
      <p className="text-muted max-w-content mb-12">
        Una selezione di cose su cui ho lavorato.
      </p>

      <ol className="divide-y divide-rule border-t border-rule">
        {progetti.map((progetto, i) => (
          <li key={progetto.titolo} className="group py-8 md:py-10">
            <a href={progetto.link} className="block">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-muted text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">
                  {progetto.titolo}
                </h2>
                <span className="text-muted text-sm ml-auto">
                  {progetto.anno}
                </span>
              </div>
              <p className="mt-3 text-muted max-w-content pl-9">
                {progetto.descrizione}
              </p>
              <div className="mt-3 flex gap-3 pl-9">
                {progetto.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
