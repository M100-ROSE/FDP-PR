import type { Colinha } from "@/types";

// Para adicionar uma colinha: coloque o arquivo em /public/colinhas e inclua um item aqui.
export const COLINHAS: Colinha[] = [
  { id: "01", titulo: "Colinha · São Paulo", arquivo: "colinha-01.jpg", largura: 1080, altura: 1350, credito: "colinha.ai", estilo: "claro", aviso: "Arte com cabeçalho de São Paulo. Os campos servem para qualquer estado." },
  { id: "02", titulo: "Cola Eleitoral · azul", arquivo: "colinha-02.jpg", largura: 1080, altura: 1440, estilo: "escuro" },
  { id: "03", titulo: "Minha Colinha · Portal Calango", arquivo: "colinha-03.jpg", largura: 1080, altura: 1350, credito: "Portal Calango", estilo: "vinho" },
  { id: "04", titulo: "Colinha Eleitoral · vermelha", arquivo: "colinha-04.jpg", largura: 1080, altura: 1440, credito: "Chappell Roan Brasil", estilo: "vermelho" },
  { id: "05", titulo: "Colinha · vinho com estrela", arquivo: "colinha-05.jpg", largura: 892, altura: 1144, estilo: "vinho" },
  { id: "06", titulo: "Colinha · vinho e preto", arquivo: "colinha-06.jpg", largura: 892, altura: 1144, estilo: "vinho" },
  { id: "07", titulo: "Minha Colinha · vermelha", arquivo: "colinha-07.jpg", largura: 1080, altura: 1350, credito: "Laufey Brasil", estilo: "vermelho" },
  { id: "08", titulo: "Colinha Eleitoral · preto e branco", arquivo: "colinha-08.jpg", largura: 1080, altura: 1350, estilo: "escuro" },
  { id: "09", titulo: "Colinha dos Lobers", arquivo: "colinha-09.jpg", largura: 1080, altura: 1350, credito: "Jão Media Center", estilo: "escuro", aviso: "Nesta arte, deputado estadual tem 4 quadros. No Paraná são 5 dígitos." },
  { id: "10", titulo: "Minha Colinha · estrelas vermelhas", arquivo: "colinha-10.jpg", largura: 394, altura: 507, credito: "Ariana Grande Brasil", estilo: "claro" },
  { id: "11", titulo: "Minha Colinha · vermelho e preto", arquivo: "colinha-11.jpg", largura: 394, altura: 507, credito: "SCBR", estilo: "claro" },
];

export const COLINHA_NOTAS = [
  "Presidente: 13 em todas as artes. Não há 2º turno para deputados e senadores, só para presidente e governador (onde houver).",
  "Artes feitas por fãs e páginas independentes. A presença de pessoas ou marcas nas imagens não indica apoio delas à campanha.",
  "No dia 25/10, a colinha serve de apoio: o voto continua secreto.",
];
