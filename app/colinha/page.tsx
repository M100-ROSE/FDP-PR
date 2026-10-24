import type { Metadata } from "next";
import { COLINHAS, COLINHA_NOTAS } from "@/data/colinhas";
import { ColinhaPicker } from "@/components/colinha/ColinhaPicker";

export const metadata: Metadata = { title: "Colinha eleitoral · Brasil Soberano Paraná" };

export default function ColinhaPage() {
  return (
    <section className="sec">
      <h2>Colinha eleitoral</h2>
      <p className="lead">
        Apoio visual para lembrar os números de voto no dia do 2º turno (25/10), das 8h às 17h.
        Escolha uma arte, baixe e leve com você — cada eleitor decide no sigilo da cabine.
      </p>
      <ColinhaPicker colinhas={COLINHAS} />
      <section className="notas" aria-label="Notas sobre as colinhas">
        <h3>Antes de usar</h3>
        <ul>
          {COLINHA_NOTAS.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
