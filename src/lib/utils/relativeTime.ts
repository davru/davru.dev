const UNITS: Record<string, number> = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

export const relativeTime = (date: number = Date.now()): string | undefined => {
  const rtf = new Intl.RelativeTimeFormat('en');
  const elapsed = new Date(date).getTime() - new Date().getTime();

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (const [u, msecs] of Object.entries(UNITS)) {
    if (Math.abs(elapsed) > msecs || u == 'second') {
      return rtf.format(
        Math.round(elapsed / msecs),
        u as Intl.RelativeTimeFormatUnit
      );
    }
  }
};
