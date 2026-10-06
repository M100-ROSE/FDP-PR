"use client";
import { useState } from "react";
import { PLAN_ITEMS } from "@/data/plan";

export function VotePlan() {
  const [done, setDone] = useState<boolean[]>(PLAN_ITEMS.map(() => false));
  const n = done.filter(Boolean).length;
  return (
    <div className="plano">
      <ul>
        {PLAN_ITEMS.map((p, i) => (
          <li key={p}>
            <label>
              <input type="checkbox" checked={done[i]} onChange={() => setDone(done.map((v, j) => (j === i ? !v : v)))} />
              <span>{p}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="plano-n" aria-live="polite">
        {n === PLAN_ITEMS.length ? "Plano completo. Agora chame mais gente." : `${n} de ${PLAN_ITEMS.length} feitos`}
      </p>
    </div>
  );
}
