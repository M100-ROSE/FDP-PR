import { VotePlan } from "@/components/interactive/VotePlan";
import { ShareBox } from "@/components/interactive/ShareBox";

export function ActionSection() {
  return (
    <section id="plano" className="sec split">
      <div><h2>Meu plano de voto</h2><VotePlan /></div>
      <div><h2>Mande uma mensagem agora</h2><ShareBox /></div>
    </section>
  );
}
