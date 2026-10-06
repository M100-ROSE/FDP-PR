"use client";
import { useState } from "react";
import { SWAPS } from "@/data/conversation";
import { Button } from "@/components/ui/Button";

export function QuestionSwap() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);
  const { acusacao, pergunta } = SWAPS[i];
  return (
    <div className="troca">
      <p className="troca-label">Em vez de falar…</p>
      <p className="troca-a">“{acusacao}”</p>
      <Button variant="ghost" aria-expanded={show} onClick={() => setShow((s) => !s)}>
        {show ? "Esconder" : "Mostrar a pergunta"}
      </Button>
      {show && (<><p className="troca-label">Pergunte…</p><p className="troca-q">“{pergunta}”</p></>)}
      <Button variant="ghost" onClick={() => { setI((i + 1) % SWAPS.length); setShow(false); }}>Próxima</Button>
    </div>
  );
}
