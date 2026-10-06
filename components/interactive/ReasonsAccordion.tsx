"use client";
import { useState } from "react";
import { REASONS } from "@/data/reasons";
import { SourceList } from "@/components/ui/SourceList";

export function ReasonsAccordion() {
  const [open, setOpen] = useState<string | null>(REASONS[0].id);
  return (
    <div className="motivos">
      {REASONS.map((r) => {
        const isOpen = open === r.id;
        return (
          <div key={r.id} className={"motivo" + (isOpen ? " open" : "")}>
            <button aria-expanded={isOpen} aria-controls={`m-${r.id}`} onClick={() => setOpen(isOpen ? null : r.id)}>
              <span>{r.titulo}</span><i aria-hidden>{isOpen ? "−" : "+"}</i>
            </button>
            {isOpen && (
              <div id={`m-${r.id}`} className="motivo-body">
                <p>{r.resumo}</p>
                <p className="outro"><strong>Outro lado:</strong> {r.outroLado}</p>
                <p className="pergunta">Pergunte: {r.pergunta}</p>
                <SourceList ids={r.fontes} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
