"use client";
import { useState } from "react";
import { SHARE_MESSAGES, whatsappLink } from "@/lib/share";
import { Button, LinkButton } from "@/components/ui/Button";

export function ShareBox() {
  const [i, setI] = useState(0);
  const [copied, setCopied] = useState(false);
  const m = SHARE_MESSAGES[i];
  const copy = async () => {
    try { await navigator.clipboard.writeText(m.texto); setCopied(true); } catch { setCopied(false); }
  };
  return (
    <div className="share">
      <div className="tabs" role="tablist">
        {SHARE_MESSAGES.map((s, idx) => (
          <button key={s.id} role="tab" aria-selected={i === idx} className={i === idx ? "on" : ""} onClick={() => { setI(idx); setCopied(false); }}>{s.rotulo}</button>
        ))}
      </div>
      <p className="share-text">{m.texto}</p>
      <div className="row">
        <LinkButton href={whatsappLink(m.texto)} external>Enviar no WhatsApp</LinkButton>
        <Button variant="ghost" onClick={copy}>{copied ? "Copiado" : "Copiar texto"}</Button>
      </div>
    </div>
  );
}
