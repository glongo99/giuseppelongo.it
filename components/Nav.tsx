import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/progetti", label: "Progetti" },
  { href: "/scritti", label: "Scritti" },
  { href: "/percorso", label: "Percorso" },
  { href: "/contatti", label: "Contatti" },
];

export default function Nav() {
  return (
    <header className="border-b border-rule">
      <nav className="max-w-wide mx-auto flex items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink hover:text-accent transition-colors"
        >
          <Logo className="w-6 h-6" />
          <span className="font-serif text-lg">Giuseppe Longo</span>
        </Link>
        <ul className="flex gap-6 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
