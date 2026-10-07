type NavLink = { href: string; label: string; externo?: boolean };

const LINKS: NavLink[] = [
  { href: "/#ato", label: "Ato 18/10" },
  { href: "/#conversar", label: "Como conversar" },
  { href: "/#motivos", label: "O que está em jogo" },
  { href: "/#plano", label: "Meu plano" },
  // { href: "/colinha", label: "Colinha" },
  { href: "/fontes", label: "Fontes" },
  {
    href: "https://drive.google.com/drive/folders/1yJuXfSjnTDHjvfhJd9nFcwThOAzBed3w",
    label: "Materiais",
    externo: true,
  },
];

export function Header() {
  return (
    <header className="top">
      <a href="/" className="brand">
        <strong>Brasil Soberano · Paraná</strong>
      </a>
      <nav aria-label="Principal">
        {LINKS.map(({ href, label, externo }) => (
          <a
            key={href}
            href={href}
            {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
