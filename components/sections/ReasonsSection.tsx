import { Section } from "@/components/ui/Section";
import { ReasonsAccordion } from "@/components/interactive/ReasonsAccordion";

export function ReasonsSection() {
  return (
    <Section id="motivos" title="O que está em jogo no segundo turno">
      <p className="small">Cada ponto traz o resumo, o outro lado, uma pergunta para abrir conversa e as fontes. Confira antes de repetir.</p>
      <ReasonsAccordion />
    </Section>
  );
}
