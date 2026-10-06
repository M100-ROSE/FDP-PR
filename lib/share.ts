import { SITE } from "@/data/config";

export const SHARE_MESSAGES = [
  { id: "conversa", rotulo: "Convite à conversa", texto: `Votou em outro candidato no 1º turno e ainda não decidiu? Quero conversar com você sobre o que está em jogo no dia 25. ${SITE.url}` },
  { id: "idosos", rotulo: "Para 70+ e família", texto: `Você vai votar no segundo turno, dia 25? Posso ajudar com local de votação e transporte. O voto de quem tem 70+ é facultativo e pode decidir a eleição. ${SITE.url}` },
  { id: "ato", rotulo: "Convite para o ato", texto: `Dia 18/10, 13h, em Curitiba: ato Por um Brasil Soberano, da Praça 19 de Dezembro até o Palácio Iguaçu. Vem comigo? ${SITE.url}` },
] as const;

export const whatsappLink = (texto: string) => `https://wa.me/?text=${encodeURIComponent(texto)}`;
