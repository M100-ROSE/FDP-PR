import type { Reason } from "@/types";

// "Ser investigado" não é "ser condenado". Mantenha `outroLado` em cada item.
export const REASONS: Reason[] = [
  {
    id: "dark-horse",
    titulo: "Investigado no caso Dark Horse",
    resumo: "O ministro André Mendonça (STF) autorizou em julho um inquérito da PF sobre suspeitas de lavagem de dinheiro, evasão de divisas e corrupção no financiamento do filme “Dark Horse”. Flávio pediu cerca de R$ 134 milhões ao banqueiro Daniel Vorcaro; mais de R$ 60 milhões foram pagos, segundo as apurações.",
    outroLado: "Flávio diz que foi um pedido de patrocínio privado para um filme privado e nega irregularidades. Ser investigado não é ser condenado.",
    pergunta: "Você acha normal pedir esse valor a um banqueiro que depois foi preso?",
    fontes: ["apublicaAudio", "cnnIntercept", "jornalOpcaoMendonca", "poder360Inquerito", "diarioNordestePF"],
  },
  {
    id: "confianca",
    titulo: "Disse que não conhecia Vorcaro",
    resumo: "Antes da reportagem do Intercept, Flávio afirmava não conhecer o banqueiro. Depois vieram mensagens e áudio em que o trata por “irmão” e “irmãozão”, e ele admitiu ter se reunido com Vorcaro após a primeira prisão dele.",
    outroLado: "Flávio afirma que o contato foi “única e exclusivamente” sobre o filme e que não sabia da gravidade da situação do Banco Master.",
    pergunta: "Dá pra acreditar no que ele fala?",
    fontes: ["metropolesNaoConhecia", "apublicaAudio", "poder360Encontro"],
  },
  {
    id: "tarifas",
    titulo: "Tarifas dos EUA e a família Bolsonaro",
    resumo: "Em 2025, Trump justificou o tarifaço de 50% citando o julgamento de Jair Bolsonaro. Em 2026, o governo americano recomendou novas tarifas de 25% depois de uma investigação que citou o Pix, pouco após Flávio visitar Trump. O governo Lula acusa a família de buscar interferência estrangeira.",
    outroLado: "Flávio se opôs publicamente às novas tarifas, defendeu o Pix e rejeita a acusação de traição. Para ele, tarifa mais alta fortaleceria o governo Lula.",
    pergunta: "Quem, de fato, defende o Brasil nessa negociação?",
    fontes: ["investnews2025", "gazetaUSTR", "abcClash", "opovoDebate", "dpPediuTrump", "intellinews"],
  },
  {
    id: "federais",
    titulo: "Universidades federais fora do MEC",
    resumo: "O plano de governo propõe transferir a gestão das federais do MEC para o MCTI e mudar prioridades da Capes e do CNPq. Críticos apontam risco para o financiamento, carreiras docentes e bolsas.",
    outroLado: "A proposta não extingue as universidades. A campanha diz que o MEC passaria a se concentrar na educação básica.",
    pergunta: "Quem estuda ou tem filho na federal sabe o que isso muda?",
    fontes: ["portalTelaFederais", "tribunaPlanaltoFederais"],
  },
  {
    id: "6x1",
    titulo: "Escala 6x1 e jornada",
    resumo: "O plano de governo de Flávio não inclui o fim da escala 6x1 e defende o “negociado sobre o legislado”. Ele propõe jornada flexível, com remuneração por hora. Economistas e juristas alertam para riscos na proteção ao trabalhador e na contribuição previdenciária.",
    outroLado: "Flávio diz que o trabalhador mantém férias, 13º, FGTS e INSS e que a mudança dá mais liberdade a quem trabalha.",
    pergunta: "Trabalhador e patrão negociam de igual para igual?",
    fontes: ["poder3606x1", "bbc6x1", "itatiaia6x1"],
  },
  {
    id: "anistia",
    titulo: "Anistia a Jair Bolsonaro",
    resumo: "Em sabatina em julho, Flávio afirmou que, se eleito, concederá anistia a Jair Bolsonaro, condenado a 27 anos por tentativa de golpe de Estado, e aos envolvidos nos atos de 8 de janeiro.",
    outroLado: "Flávio considera que o pai teve um julgamento injusto e fala em “zerar o jogo” para um recomeço político.",
    pergunta: "Quem foi condenado por tentar reverter uma eleição deve ser perdoado?",
    fontes: ["acriticaAnistia", "cnnAnistia", "opovoCondenacao"],
  },
  {
    id: "entregas",
    titulo: "Quase 24 anos de mandato",
    resumo: "Flávio foi deputado estadual no Rio de 2003 a 2019 e é senador desde então. Levantamento da Agência Pública: como senador apresentou 59 projetos de lei e 93 PECs; na Alerj, 140 projetos de lei.",
    outroLado: "Apresentar projetos não é a única forma de atuar. Flávio cita segurança pública e proteção às vítimas como bandeiras de sua trajetória.",
    pergunta: "Você lembra de alguma lei de autoria dele que mudou a sua vida?",
    fontes: ["apublicaCarreira", "itatiaiaCarreira"],
  },
];
