const LINKS = [
  ["/#ato", "Ato 18/10"],
  ["/#conversar", "Como conversar"],
  ["/#motivos", "O que está em jogo"],
  ["/#plano", "Meu plano"],
  ["/fontes", "Fontes"],
] as const;

export function Header() {
  return (
    <header className="top">
      <a href="/" className="brand"><strong>Brasil Soberano · Paraná</strong></a>
      <nav aria-label="Principal">
        {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
    </header>
  );
}
