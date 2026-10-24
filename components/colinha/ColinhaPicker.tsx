"use client";
import { useState } from "react";
import Image from "next/image";
import type { Colinha } from "@/types";
import { SITE } from "@/data/config";
import { colinhaSrc, colinhaFileName } from "@/lib/download";

export function ColinhaPicker({ colinhas }: { colinhas: Colinha[] }) {
  const [i, setI] = useState(0);
  const c = colinhas[i];
  if (!c) return null;
  return (
    <div className="picker">
      <div className="preview">
        <Image
          src={colinhaSrc(c)}
          alt={`${c.titulo} — arte para lembrar os números de voto no dia da votação`}
          width={c.largura}
          height={c.altura}
          priority
        />
        <div className="preview-info">
          <small className="small">
            {c.titulo}
            {c.credito ? <> · arte de {c.credito}</> : null}
          </small>
          <a className="btn" href={colinhaSrc(c)} download={colinhaFileName(c)}>
            Baixar imagem
          </a>
          <a
            className="btn ghost"
            href={SITE.grupoWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar no grupo da campanha
          </a>
          {c.aviso ? <small className="small">Aviso: {c.aviso}</small> : null}
        </div>
      </div>
      <div className="thumbs" role="group" aria-label="Escolher uma colinha">
        {colinhas.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className={`thumb${idx === i ? " on" : ""}`}
            aria-label={item.titulo}
            aria-pressed={idx === i}
            onClick={() => setI(idx)}
          >
            <Image
              src={colinhaSrc(item)}
              alt=""
              width={item.largura}
              height={item.altura}
              sizes="(max-width: 820px) 30vw, 150px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
