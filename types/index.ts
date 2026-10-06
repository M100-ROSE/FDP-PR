import type { SourceId } from "@/data/sources";

export type Source = { titulo: string; veiculo: string; url: string; nota?: string };

/** Uma informação factual sempre acompanhada de fontes. */
export type Fact = { texto: string; fontes: SourceId[] };

export type Reason = {
  id: string;
  titulo: string;
  resumo: string;
  /** Contexto / posição de Flávio, para a informação ficar completa e defensável. */
  outroLado: string;
  pergunta: string;
  fontes: SourceId[];
};

export type Audience = { id: string; titulo: string; intro: string; fatos: Fact[]; dica?: string };

export type Colinha = {
  id: string;
  /** Nome baseado só no que está escrito na arte (não identificamos pessoas pelo rosto). */
  titulo: string;
  arquivo: string; // dentro de /public/colinhas
  largura: number;
  altura: number;
  credito?: string; // perfil/página que assina a arte, se visível
  estilo: "claro" | "escuro" | "vermelho" | "vinho";
  aviso?: string; // ex.: arte feita para outro estado
};
