import { AUDIENCES } from "@/data/audiences";
import { Section } from "@/components/ui/Section";
import { SourceList } from "@/components/ui/SourceList";

export function AudiencesSection() {
  return (
    <Section title="Dois públicos precisam de você">
      <div className="two">
        {AUDIENCES.map((a) => (
          <article key={a.id}>
            <h3>{a.titulo}</h3>
            <p>{a.intro}</p>
            <ul className="facts">
              {a.fatos.map((f) => (
                <li key={f.texto}>
                  <p>{f.texto}</p>
                  <SourceList ids={f.fontes} label="Fonte" />
                </li>
              ))}
            </ul>
            {a.dica && <p className="note">{a.dica}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
