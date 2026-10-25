import type { Locale } from './types';

export const languageStorageKey = 'aleRizzoWebsiteSelectedLanguage';

export function resolveLocale(saved: string | null, preferred: readonly string[]): Locale {
  if (saved === 'it-IT' || saved === 'en-GB') return saved;
  for (const language of preferred) {
    const base = language.toLowerCase().split(/[-_]/)[0];
    if (base === 'it') return 'it-IT';
    if (base === 'en') return 'en-GB';
  }
  return 'it-IT';
}
