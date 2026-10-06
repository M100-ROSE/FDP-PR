import { EVENT } from "@/data/config";

export function EventSection() {
  return (
    <section id="ato" className="ato">
      <div>
        <h2>{EVENT.data}</h2>
        <p className="ato-city">{EVENT.cidade}</p>
      </div>
      <div>
        <p className="ato-title">{EVENT.titulo}</p>
        <p>{EVENT.trajeto}.</p>
        <p className="small">{EVENT.aviso}</p>
      </div>
    </section>
  );
}
