import type { Metadata } from "next";
import { SOURCES } from "@/data/sources";

export const metadata: Metadata = { title: "Fontes · Brasil Soberano Paraná" };

export default function Fontes() {
  const items = Object.entries(SOURCES);
  return (
    <section className="sec">
      <h2>Fontes</h2>
      <p className="lead">Todas as informações do site vêm de reportagens e documentos públicos. Se encontrar um erro, avise a campanha para corrigirmos.</p>
      <ul className="all-sources">
        {items.map(([id, s]) => (
          <li key={id}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">{s.titulo}</a>
            <span> · {s.veiculo}</span>
            {"nota" in s && s.nota ? <small>{s.nota}</small> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
