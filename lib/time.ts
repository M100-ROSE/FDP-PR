export type TimeLeft = { dias: number; horas: number; minutos: number };

export function getTimeLeft(target: string, now = Date.now()): TimeLeft {
  const ms = Math.max(0, new Date(target).getTime() - now);
  return {
    dias: Math.floor(ms / 864e5),
    horas: Math.floor((ms % 864e5) / 36e5),
    minutos: Math.floor((ms % 36e5) / 6e4),
  };
}
