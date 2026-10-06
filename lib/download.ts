import type { Colinha } from "@/types";

export const colinhaSrc = (c: Colinha) => `/colinhas/${c.arquivo}`;
export const colinhaFileName = (c: Colinha) => `colinha-eleitoral-${c.id}.jpg`;
