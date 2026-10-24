"use client";
import { useEffect, useState } from "react";
import { SECOND_ROUND, SECOND_ROUND_END } from "@/data/config";
import { getTimeLeft, getVoteDayState, type TimeLeft, type VoteDayState } from "@/lib/time";

export function Countdown() {
  const [t, setT] = useState<TimeLeft | null>(null);
  const [estado, setEstado] = useState<VoteDayState>("antes");
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setT(getTimeLeft(SECOND_ROUND, now));
      setEstado(getVoteDayState(SECOND_ROUND, SECOND_ROUND_END, now));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  if (estado === "hoje") {
    return (
      <div className="countdown" role="timer" aria-label="Dia da votação: 25/10/2026, das 8h às 17h">
        <p><b>É hoje!</b> Votação das 8h às 17h</p>
      </div>
    );
  }
  if (estado === "depois") {
    return (
      <div className="countdown" role="timer" aria-label="Votação encerrada">
        <p>Votação encerrada — análise/resultado divulgado pelo TSE.</p>
      </div>
    );
  }
  const v = (n?: number) => (n === undefined ? "--" : n);
  return (
    <div className="countdown" role="timer" aria-label="Tempo até o segundo turno">
      <div><b>{v(t?.dias)}</b><span>dias</span></div>
      <div><b>{v(t?.horas)}</b><span>horas</span></div>
      <div><b>{v(t?.minutos)}</b><span>min</span></div>
      <p>para o 2º turno, dia 25/10</p>
    </div>
  );
}
