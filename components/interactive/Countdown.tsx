"use client";
import { useEffect, useState } from "react";
import { SECOND_ROUND } from "@/data/config";
import { getTimeLeft, type TimeLeft } from "@/lib/time";

export function Countdown() {
  const [t, setT] = useState<TimeLeft | null>(null);
  useEffect(() => {
    const tick = () => setT(getTimeLeft(SECOND_ROUND));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
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
