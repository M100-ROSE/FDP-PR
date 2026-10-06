import { SOURCES, type SourceId } from "@/data/sources";

export function SourceList({ ids, label = "Fontes" }: { ids: SourceId[]; label?: string }) {
  if (!ids.length) return null;
  return (
    <div className="sources">
      <p className="sources-label">{label}</p>
      <ul>
        {ids.map((id) => {
          const s = SOURCES[id];
          return (
            <li key={id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.titulo}
              </a>
              <span> · {s.veiculo}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
