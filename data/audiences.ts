import type { Audience } from "@/types";

export const AUDIENCES: Audience[] = [
  {
    id: "idosos",
    titulo: "Eleitores com 70 anos ou mais",
    intro: "O voto é facultativo e a abstenção é alta. Comece pela sua rede: pais, avós, tios, vizinhos. Pergunte se pretendem votar, escute os motivos e ajude no prático.",
    fatos: [
      { texto: "São entre 15 e 16 milhões de eleitores com 70+ no Brasil.", fontes: ["dpEleitorado", "sul21Idosos"] },
      { texto: "Em 2022, 58,9% dos eleitores 70+ não compareceram: cerca de 8,8 milhões de pessoas.", fontes: ["vivaIdosos", "gazeta70"] },
      { texto: "O 2º turno de 2022 foi decidido por cerca de 2,1 milhões de votos.", fontes: ["correio2022"] },
      { texto: "O TSE oferece o serviço “Seu Voto Importa”, com transporte para eleitores com dificuldade de deslocamento. Consulte seu TRE.", fontes: ["folhapeTransporte"] },
      { texto: "Farmácia Popular: a verba sofreu corte de 59% no governo Bolsonaro e o programa foi retomado e ampliado em 2023, com gratuidade total dos itens.", fontes: ["cutFarmacia", "mercadoFarmacia"] },
      { texto: "O salário mínimo voltou a ter ganho real a partir de 2023 (limitado a 2,5% acima da inflação pelo arcabouço fiscal), o que reajusta aposentadorias de um salário.", fontes: ["bnewsMinimo", "tnh1Minimo"] },
      { texto: "O relatório final da CPI da Covid apontou atraso deliberado na compra de vacinas; o governo recusou ao menos 11 propostas de fabricantes.", fontes: ["cpiCovid", "cpiVacinas"] },
    ],
    dica: "Se a pessoa quiser votar, ajude no prático: local de votação, documento, deslocamento e companhia.",
  },
  {
    id: "beneficiarios",
    titulo: "Beneficiários de programas sociais",
    intro: "Quem enfrenta dificuldades econômicas tem muitas outras preocupações além da eleição. Reconheça que a vida é difícil e que cada pessoa entende o que é melhor para si.",
    fatos: [
      { texto: "Beneficiários do Bolsa Família têm acesso gratuito aos itens do Farmácia Popular.", fontes: ["cutFarmacia", "mercadoFarmacia"] },
    ],
    dica: "Converse sobre os benefícios que a família recebe e pergunte se acredita que o Flávio vai defendê-los. Não diga que elas “votam errado”.",
  },
];
