import { it } from '../i18n/it.ts';
import { en } from '../i18n/en.ts';
import type { Locale } from '../i18n/types.ts';

/** Calendar months inclusive of both endpoints; no exact employment days are inferred.
 * Ongoing work includes the visitor's current local calendar month. Invalid/reversed
 * ranges (including an ongoing job with a future start) return null instead of displaying a duration.
 */
export function calendarMonths(start: string, end?: string, now: Date = new Date()): number | null {
  const index = (value: string): number | null => {
    const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(value);
    if (!match || Number(match[1]) < 1) return null;
    return Number(match[1]) * 12 + Number(match[2]) - 1;
  };
  const first = index(start);
  const last = end === undefined
    ? (Number.isNaN(now.getTime()) ? null : now.getFullYear() * 12 + now.getMonth())
    : index(end);
  if (first === null || last === null || last < first) return null;
  return last - first + 1;
}

export function formatDuration(months: number, locale: Locale = 'it-IT'): string {
  return formatDurationWithWords(months, locale === 'en-GB' ? en.duration : it.duration);
}

export function formatDurationWithWords(months: number, words: typeof en.duration | typeof it.duration): string {
  if (!Number.isInteger(months) || months < 1) throw new RangeError('Duration must be a positive integer');
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? words.year : words.years}`);
  if (remainder) parts.push(`${remainder} ${remainder === 1 ? words.month : words.months}`);
  return parts.join(` ${words.conjunction} `);
}
