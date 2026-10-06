import type { Source } from "@/types";

// Todas as URLs abaixo foram localizadas em pesquisa em 06/10/2026. Revise antes de publicar e
// acrescente links diretos de Senado/STF/TSE/Planalto sempre que possível.
export const SOURCES = {
  // Dark Horse / Vorcaro
  apublicaAudio: { titulo: "Áudio de Flávio Bolsonaro pedindo R$ 134 mi a Vorcaro vaza", veiculo: "Agência Pública", url: "https://apublica.org/nota/flavio-bolsonaro-audio-vazado-com-vorcaro-cobra-r-134-milhoes/" },
  cnnIntercept: { titulo: "Flávio pediu R$ 134 mi a Vorcaro para filme de Bolsonaro, diz Intercept", veiculo: "CNN Brasil", url: "https://www.cnnbrasil.com.br/politica/flavio-pediu-r-134-mi-a-vorcaro-para-filme-de-bolsonaro-diz-intercept/", nota: "Inclui a nota de Flávio sobre 'patrocínio privado'." },
  poder360Inquerito: { titulo: "Flávio é investigado no STF por financiamento do “Dark Horse”", veiculo: "Poder360", url: "https://www.poder360.com.br/poder-justica/flavio-e-investigado-no-stf-por-financiamento-do-dark-horse/" },
  jornalOpcaoMendonca: { titulo: "Mendonça manda PF investigar Flávio por suspeita de lavagem no filme “Dark Horse”", veiculo: "Jornal Opção", url: "https://www.jornalopcao.com.br/ultimas-noticias/flavio-bolsonaro-esta-sendo-investigado-pelo-stf-desde-julho-sobre-repasses-de-vorcaro-a-dark-horse-866973/" },
  diarioNordestePF: { titulo: "Flávio Bolsonaro é investigado pela PF sobre financiamento do filme Dark Horse", veiculo: "Diário do Nordeste", url: "https://diariodonordeste.verdesmares.com.br/pontopoder/flavio-bolsonaro-e-investigado-pela-pf-sobre-financiamento-do-filme-dark-horse-1.3790806" },
  metropolesNaoConhecia: { titulo: "Reação de Moro após Flávio Bolsonaro admitir visita a Vorcaro", veiculo: "Metrópoles", url: "https://www.metropoles.com/brasil/reacao-de-moro-apos-flavio-bolsonaro-admitir-visita-a-vorcaro-viraliza", nota: "Registra que Flávio dizia não conhecer o banqueiro antes das revelações." },
  poder360Encontro: { titulo: "Flávio confirma encontro com Vorcaro após prisão de dono do Master", veiculo: "Poder360", url: "https://www.poder360.com.br/poder-eleicoes/flavio-confirma-encontro-com-vorcaro-apos-prisao-do-dono-do-master/" },

  // Tarifas / soberania
  investnews2025: { titulo: "EUA iniciam investigação sobre práticas comerciais do Brasil e disparam contra Pix", veiculo: "InvestNews", url: "https://investnews.com.br/economia/trump-investigacao-governo-brasileiro/amp/" },
  gazetaUSTR: { titulo: "Órgão do governo Trump sugere tarifaço de 25% sobre produtos do Brasil", veiculo: "Gazeta do Povo", url: "https://www.gazetadopovo.com.br/mundo/orgao-governo-trump-sugere-tarifaco-sobre-produtos-brasil/" },
  abcClash: { titulo: "Lula and Flávio Bolsonaro clash over US tariff proposal", veiculo: "ABC News / AP", url: "https://abcnews.com/Business/wireStory/brazils-top-presidential-candidates-lula-flvio-bolsonaro-clash-134452795" },
  opovoDebate: { titulo: "Debate sobre tarifaço pelos EUA vira ringue de disputa eleitoral", veiculo: "O Povo", url: "https://mais.opovo.com.br/jornal/politica/2026/07/08/debate-sobre-tarifaco-pelos-eua-vira-ringue-de-disputa-eleitoral.html" },
  dpPediuTrump: { titulo: "Flávio Bolsonaro diz ter pedido a Trump que não aplicasse tarifas", veiculo: "Diario de Pernambuco", url: "https://www.diariodepernambuco.com.br/politica/2026/06/11715570-flavio-bolsonaro-diz-ter-pedido-a-trump-que-nao-aplicasse-tarifas-a-produtos-do-brasil.html" },
  intellinews: { titulo: "Bolsonaro urges Trump to delay Brazil tariff until after election", veiculo: "bne IntelliNews", url: "https://new.intellinews.com/articles/bolsonaro-urges-trump-to-delay-brazil-tariff-until-after-election-453667" },

  // Universidades federais
  portalTelaFederais: { titulo: "Flávio Bolsonaro propõe tirar universidades federais do MEC", veiculo: "Portal Tela", url: "https://www.portaltela.com/politica/2026/08/17/flavio-bolsonaro-propoe-tirar-universidades-federais-do-mec/" },
  tribunaPlanaltoFederais: { titulo: "Flávio propõe tirar universidades federais do MEC e vincular pesquisa a empresas", veiculo: "Tribuna do Planalto", url: "https://tribunadoplanalto.com.br/?p=108491" },

  // Trabalho
  poder3606x1: { titulo: "Flávio deixa fim da escala 6x1 fora do plano de governo", veiculo: "Poder360", url: "https://www.poder360.com.br/poder-eleicoes-2026/flavio-deixa-fim-da-escala-6-x-1-fora-do-plano-de-governo/" },
  bbc6x1: { titulo: "O que pode mudar no regime de trabalho por hora proposto por Flávio", veiculo: "BBC News Brasil (via O Povo)", url: "https://www.opovo.com.br/agencia/bbc/2026/06/08/amp/pec-da-liberdade-ou-escravidao-o-que-pode-mudar-no-regime-de-trabalho-por-hora-proposto-por-flavio-bolsonaro-para-barrar-fim-da-6x1.html" },
  itatiaia6x1: { titulo: "Flávio propõe flexibilização da escala 6x1", veiculo: "Itatiaia", url: "https://www.itatiaia.com.br/politica/flavio-propoe-flexibilizacao-da-escala-6x1-e-fala-em-modernizacao-do-sus/" },

  // Anistia
  acriticaAnistia: { titulo: "Flávio Bolsonaro promete anistia ao pai", veiculo: "A Crítica", url: "https://acritica.net/eleicoes-2026/flavio-bolsonaro-critica-atuacao-no-caso-lulinha-e-promete-anistia-ao-pai/" },
  cnnAnistia: { titulo: "Flávio defende anistia: “zerar o jogo”", veiculo: "CNN Brasil", url: "https://www.cnnbrasil.com.br/eleicoes/flavio-defende-anistia-zerar-o-jogo-e-subir-a-rampa-com-bolsonaro/" },
  opovoCondenacao: { titulo: "Caiado diz que, se eleito, vai dar indulto a Bolsonaro", veiculo: "O Povo", url: "https://www.opovo.com.br/noticias/politica/2026/07/26/caiado-diz-que-se-eleito-vai-dar-indulto-a-bolsonaro-quero-pacificar-o-pais.html", nota: "Cita a condenação de Jair Bolsonaro a 27 anos." },

  // Carreira
  apublicaCarreira: { titulo: "Flávio Bolsonaro fez 3 propostas de lei sobre segurança da mulher em 24 anos", veiculo: "Agência Pública", url: "https://apublica.org/2026/08/flavio-bolsonaro-fez-3-propostas-de-lei-sobre-seguranca-da-mulher-em-24-anos-como-politico/" },
  itatiaiaCarreira: { titulo: "Conheça a carreira política de Flávio Bolsonaro", veiculo: "Itatiaia", url: "https://www.itatiaia.com.br/politica/eleicoes/conheca-a-carreira-politica-de-flavio-bolsonaro-pre-candidato-a-presidencia/" },

  // Eleitorado 70+
  sul21Idosos: { titulo: "Aumento do eleitorado idoso pauta campanhas, mas abstenção é desafio", veiculo: "Sul21", url: "https://sul21.com.br/?p=299272" },
  gazeta70: { titulo: "Com que idade não precisa mais votar", veiculo: "Gazeta do Povo", url: "https://www.gazetadopovo.com.br/eleicoes/2026/com-que-idade-nao-precisa-mais-votar/" },
  vivaIdosos: { titulo: "Eleitores 60+ crescem 74% desde 2010", veiculo: "Viva (dados Nexus/TSE)", url: "https://viva.com.br/cidadania-e-direitos/eleitores-60-crescem-74-desde-2010-e-ampliam-participacao-eleitoral.html" },
  dpEleitorado: { titulo: "Mulheres representam 52,8% do eleitorado e número de votantes idosos cresce", veiculo: "Diario de Pernambuco", url: "https://www.diariodepernambuco.com.br/politica/2026/08/11722395-mulheres-representam-528-do-eleitorado-e-numero-de-votantes-idosos-cresce.html" },
  folhapeTransporte: { titulo: "Campanha incentiva voto de quem tem mais de 70 anos", veiculo: "Folha de Pernambuco", url: "https://www.folhape.com.br/politica/campanha-incentiva-voto-de-quem-tem-mais-de-70-anos/512434/", nota: "Explica o serviço “Seu Voto Importa” do TSE (transporte para eleitores)." },
  correio2022: { titulo: "Cinco dados reveladores sobre o 2º turno das eleições", veiculo: "Correio Braziliense", url: "https://www.correiobraziliense.com.br/politica/2022/10/5048322-cinco-dados-reveladores-sobre-o-2-turno-das-eleicoes.html" },

  // Políticas públicas
  cutFarmacia: { titulo: "Beneficiários do Bolsa Família terão gratuitos 40 medicamentos do Farmácia Popular", veiculo: "CUT", url: "https://www.cut.org.br/noticias/beneficiarios-do-bolsa-familia-terao-acesso-gratuito-aos-40-medicamentos-do-farm-2ddb/amp", nota: "Registra o corte de 59% da verba no governo Bolsonaro." },
  mercadoFarmacia: { titulo: "Farmácia Popular terá 100% de gratuidade em 41 remédios", veiculo: "Mercado & Consumo", url: "https://mercadoeconsumo.com.br/14/02/2025/noticias-varejo/farmacia-popular-tera-100-de-gratuidade-em-41-remedios-confira-a-lista" },
  bnewsMinimo: { titulo: "Novo salário mínimo de 2026 é oficializado", veiculo: "BNews", url: "https://www.bnewssaopaulo.com.br/noticias/politica/novo-salario-minimo-de-2026-e-oficializado-veja-o-valor-e-quando-comeca-a-valer.html" },
  tnh1Minimo: { titulo: "Decreto fixando novo valor do salário mínimo de 2026", veiculo: "TNH1", url: "https://www.tnh1.com.br/noticia/nid/decreto-fixando-novo-valor-do-salario-minimo-de-2026-e-publicado-no-diario-oficial/", nota: "Explica o limite de 2,5% ao ganho real." },
  cpiCovid: { titulo: "Relatório final da CPI da Covid aponta atraso deliberado na compra de vacinas", veiculo: "IHU Unisinos", url: "https://ihu.unisinos.br/613844" },
  cpiVacinas: { titulo: "CPI da Covid: governo recusou ao menos 11 propostas de vacinas", veiculo: "Correio Braziliense", url: "https://www.correiobraziliense.com.br/politica/2021/05/amp/4923146-cpi-da-covid-as-perguntas-que-o-ministro-marcelo-queiroga-deixou-de-responder.html" },

  // Calendário
  calendarioTRE: { titulo: "Calendário eleitoral 2026 (versão resumida)", veiculo: "TRE-SP / Res. TSE 23.760/2026", url: "https://www.tre-sp.jus.br/eleicoes/eleicoes-2026/arquivos/calendario-eleitoral-2026-versao-resumida" },
  calendarioBand: { titulo: "Quando é o segundo turno das eleições 2026?", veiculo: "Band", url: "https://www.band.com.br/politica/eleicoes/2026/quando-e-o-segundo-turno-das-eleicoes-2026-202607211852" },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;
