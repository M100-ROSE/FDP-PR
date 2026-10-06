import type { ReactNode } from "react";

export function Section({ id, title, tone, children }: { id?: string; title: string; tone?: "dark"; children: ReactNode }) {
  return (
    <section id={id} className={`sec${tone ? " " + tone : ""}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
