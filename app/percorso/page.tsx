// Sostituisci con le tappe reali del tuo percorso, in ordine cronologico.
const tappe = [
  {
    periodo: "2026",
    titolo: "Titolo del ruolo o traguardo",
    luogo: "Nome azienda o istituto",
    descrizione: "Una riga su cosa hai fatto o imparato in questa fase.",
  },
  {
    periodo: "2023 — 2026",
    titolo: "Titolo precedente",
    luogo: "Nome azienda o istituto",
    descrizione: "Descrizione della fase precedente del percorso.",
  },
  {
    periodo: "2020 — 2023",
    titolo: "Formazione",
    luogo: "Nome università",
    descrizione: "Cosa hai studiato e cosa ti ha lasciato.",
  },
];

const competenze = [
  "Competenza 1",
  "Competenza 2",
  "Competenza 3",
  "Competenza 4",
  "Competenza 5",
];

export default function Percorso() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">
        Il mio percorso
      </h1>
      <p className="text-muted max-w-content mb-16">
        Le tappe principali, in breve — per il dettaglio completo puoi
        scrivermi.
      </p>

      <ol className="relative border-l border-rule pl-8 space-y-14 max-w-content">
        {tappe.map((tappa) => (
          <li key={tappa.titolo + tappa.periodo} className="relative">
            <span className="absolute -left-[calc(2rem+4px)] top-1.5 w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-muted">{tappa.periodo}</span>
            <h2 className="font-serif text-2xl text-ink mt-1">
              {tappa.titolo}
            </h2>
            <p className="text-sm text-accent mt-0.5">{tappa.luogo}</p>
            <p className="text-muted mt-2 leading-relaxed">
              {tappa.descrizione}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-20 pt-12 border-t border-rule max-w-content">
        <h2 className="font-serif text-2xl text-ink mb-5">Competenze</h2>
        <ul className="flex flex-wrap gap-3">
          {competenze.map((competenza) => (
            <li
              key={competenza}
              className="text-sm text-muted border border-rule px-3 py-1"
            >
              {competenza}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
