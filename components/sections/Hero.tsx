import { SITE } from "@/data/config";
import { LinkButton } from "@/components/ui/Button";
import { Countdown } from "@/components/interactive/Countdown";

export function Hero() {
  return (
    <section className="hero">
      <h1>
        <span>Por um</span>
        <span className="big">Brasil</span>
        <span className="big blue">Soberano</span>
      </h1>
      <div className="hero-side">
        <p className="lead">Nenhum voto pode ficar em casa. No Paraná, o segundo turno se decide conversa a conversa.</p>
        <Countdown />
        <div className="row">
          <LinkButton href={SITE.grupoWhatsApp} external>Entrar no grupo da campanha</LinkButton>
          <LinkButton variant="ghost" href="#ato">Ver o ato em Curitiba</LinkButton>
        </div>
      </div>
    </section>
  );
}
