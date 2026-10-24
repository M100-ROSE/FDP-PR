export type TimeLeft = { dias: number; horas: number; minutos: number };

export function getTimeLeft(target: string, now = Date.now()): TimeLeft {
  const ms = Math.max(0, new Date(target).getTime() - now);
  return {
    dias: Math.floor(ms / 864e5),
    horas: Math.floor((ms % 864e5) / 36e5),
    minutos: Math.floor((ms % 36e5) / 6e4),
  };
}

export type VoteDayState = "antes" | "hoje" | "depois";

/** "hoje" cobre o dia da votação no horário oficial (votação abre antes do fim do dia). */
export function getVoteDayState(startIso: string, endIso: string, now = Date.now()): VoteDayState {
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();
  if (now >= end) return "depois";
  const saoPauloDay = (ms: number) =>
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(ms));
  if (now >= start || saoPauloDay(now) === saoPauloDay(start)) return "hoje";
  return "antes";
}
