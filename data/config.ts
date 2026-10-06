export const SITE = {
  nome: "Brasil Soberano · Paraná",
  grupoWhatsApp: process.env.NEXT_PUBLIC_WHATSAPP_GROUP ?? "#",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
};

// 2º turno: 25/10/2026, votação das 8h às 17h (horário de Brasília). Fontes: ver `calendario` em data/sources.ts
export const SECOND_ROUND = "2026-10-25T08:00:00-03:00";

export const EVENT = {
  titulo: "Por um Brasil Soberano: mobilização para a vitória no segundo turno",
  data: "18/10 · 13h",
  cidade: "Curitiba, Paraná",
  trajeto: "Da Praça 19 de Dezembro até o Palácio Iguaçu",
  aviso: "Leve água, documento e um amigo. Concentração a partir das 13h.",
};
