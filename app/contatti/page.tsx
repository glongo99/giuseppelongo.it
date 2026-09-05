import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

// Sostituisci i valori con i tuoi contatti reali.
const contatti = [
  {
    label: "Email",
    value: "giuseppe@example.com",
    href: "mailto:giuseppe@example.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/giuseppelongo",
    href: "#",
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/giuseppelongo",
    href: "#",
    Icon: GithubIcon,
  },
];

export default function Contatti() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">
        Contatti
      </h1>
      <p className="text-muted max-w-content mb-12 leading-relaxed">
        Il modo più semplice per raggiungermi è scrivermi direttamente. Trovi
        gli altri riferimenti qui sotto.
      </p>

      <ul className="divide-y divide-rule border-t border-b border-rule max-w-content">
        {contatti.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="flex items-center justify-between py-5 group"
            >
              <span className="flex items-center gap-3 text-muted text-sm">
                <Icon className="w-4 h-4" />
                {label}
              </span>
              <span className="font-serif text-xl text-ink group-hover:text-accent transition-colors">
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
