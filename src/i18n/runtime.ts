import type { Dictionary, Locale } from './types';
import type { resolveLocale } from './locale';
import type { calendarMonths, formatDurationWithWords } from '../utils/duration';

/** Serialized inline at the end of the static page; keep this function self-contained. */
export function initializeI18n(
  dictionaries: Record<Locale, Dictionary>,
  resolve: typeof resolveLocale,
  monthsBetween: typeof calendarMonths,
  formatMonths: typeof formatDurationWithWords,
  storageKey: string,
) {
  let saved: string | null = null;
  try { saved = localStorage.getItem(storageKey); } catch { /* Storage can be unavailable. */ }
  let locale = resolve(saved, navigator.languages?.length ? navigator.languages : [navigator.language]);
  const selector = document.querySelector<HTMLSelectElement>('#language-select');
  const picker = document.querySelector<HTMLElement>('.language-picker');
  const trigger = document.querySelector<HTMLButtonElement>('#language-trigger');
  const menu = document.querySelector<HTMLElement>('#language-menu');
  const choices = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-locale]'));
  const lookup = (dictionary: Dictionary, path: string): string => {
    let value: unknown = dictionary;
    for (const part of path.split('.')) value = (value as Record<string, unknown>)?.[part];
    return typeof value === 'string' ? value : '';
  };
  const updateDurations = () => {
    const now = new Date();
    document.querySelectorAll<HTMLElement>('[data-duration-start]').forEach(element => {
      const months = monthsBetween(element.dataset.durationStart ?? '', element.dataset.durationEnd, now);
      element.hidden = months === null;
      if (months !== null) {
        const value = formatMonths(months, dictionaries[locale].duration);
        element.textContent = value;
        element.setAttribute('aria-label', `${dictionaries[locale].duration.label}: ${value}`);
      }
    });
  };
  const apply = () => {
    const dictionary = dictionaries[locale];
    document.documentElement.lang = locale;
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(element => {
      element.textContent = lookup(dictionary, element.dataset.i18n ?? '');
    });
    for (const attribute of ['aria-label', 'alt', 'content']) {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        element.setAttribute(attribute, lookup(dictionary, element.getAttribute(`data-i18n-${attribute}`) ?? ''));
      });
    }
    document.querySelectorAll<HTMLElement>('[data-i18n-social]').forEach(element => {
      element.setAttribute('aria-label', `${element.dataset.i18nSocial}${dictionary.newTab}`);
    });
    document.querySelectorAll<HTMLElement>('[data-month]').forEach(element => {
      element.textContent = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(`${element.dataset.month}-01T00:00:00Z`));
    });
    updateDurations();
    if (selector) selector.value = locale;
    if (picker) picker.hidden = false;
    const active = document.querySelector('#language-active');
    if (active) active.textContent = locale === 'it-IT' ? 'IT' : 'EN';
    choices.forEach(choice => choice.setAttribute('aria-checked', String(choice.dataset.locale === locale)));
  };
  try { apply(); } finally { document.documentElement.classList.remove('i18n-pending'); }
  selector?.addEventListener('change', () => {
    if (selector.value !== 'it-IT' && selector.value !== 'en-GB') return;
    locale = selector.value;
    try { localStorage.setItem(storageKey, locale); } catch { /* Keep the current selection in memory. */ }
    apply();
  });
  const closeMenu = (restoreFocus = false) => {
    if (!menu || !trigger) return;
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus({ preventScroll: true });
  };
  const openMenu = () => {
    if (!menu || !trigger) return;
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    choices.find(choice => choice.dataset.locale === locale)?.focus();
  };
  trigger?.addEventListener('click', () => menu?.hidden ? openMenu() : closeMenu(true));
  trigger?.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); openMenu(); }
  });
  choices.forEach(choice => choice.addEventListener('click', () => {
    if (!selector) return;
    selector.value = choice.dataset.locale ?? 'it-IT';
    selector.dispatchEvent(new Event('change'));
    closeMenu(true);
  }));
  menu?.addEventListener('keydown', event => {
    const index = choices.indexOf(document.activeElement as HTMLButtonElement);
    let next = index;
    if (event.key === 'ArrowDown') next = (index + 1) % choices.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + choices.length) % choices.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = choices.length - 1;
    else return;
    event.preventDefault();
    choices[next]?.focus();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu && !menu.hidden) { event.preventDefault(); closeMenu(true); }
  });
  document.addEventListener('pointerdown', event => {
    if (picker && !picker.contains(event.target as Node)) closeMenu();
  });
  document.addEventListener('focusin', event => {
    if (picker && !picker.contains(event.target as Node)) closeMenu();
  });
  window.addEventListener('pageshow', updateDurations);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) updateDurations(); });
}
