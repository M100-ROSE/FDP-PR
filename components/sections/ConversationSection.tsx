import { STORY_TEXT } from "@/data/conversation";
import { Section } from "@/components/ui/Section";
import { QuestionSwap } from "@/components/interactive/QuestionSwap";

export function ConversationSection() {
  return (
    <Section id="conversar" title="Pergunte, não acuse" tone="dark">
      <p className="lead">
        Quem votou na terceira via não gosta do Lula nem do Flávio. Não gaste energia tentando converter. Apresente fatos
        verificáveis, faça perguntas e deixe a pessoa chegar sozinha à conclusão.
      </p>
      <QuestionSwap />
      <div className="story">
        <p>Para achar essas pessoas, poste nos stories ou no status:</p>
        <blockquote>{STORY_TEXT}</blockquote>
      </div>
    </Section>
  );
}
