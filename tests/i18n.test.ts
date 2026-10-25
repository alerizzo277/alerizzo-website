import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolveLocale, languageStorageKey } from '../src/i18n/locale.ts';
import { it } from '../src/i18n/it.ts';
import { en } from '../src/i18n/en.ts';
import { formatDuration } from '../src/utils/duration.ts';

test('legacy storage key and manual preference take priority', () => {
  assert.equal(languageStorageKey, 'aleRizzoWebsiteSelectedLanguage');
  assert.equal(resolveLocale('en-GB', ['it-IT']), 'en-GB');
  assert.equal(resolveLocale('it-IT', ['en-US']), 'it-IT');
});

test('browser preferences, variants, invalid storage, and Italian fallback', () => {
  for (const [saved, languages, expected] of [
    [null, ['it-IT'], 'it-IT'], [null, ['en-GB'], 'en-GB'],
    [null, ['en-US'], 'en-GB'], [null, ['it-CH'], 'it-IT'],
    [null, ['de-DE'], 'it-IT'], [null, ['fr-FR'], 'it-IT'],
    [null, ['de-DE', 'en-US'], 'en-GB'], ['bad', ['en-US'], 'en-GB'],
    ['bad', ['fr-FR'], 'it-IT'], [null, [], 'it-IT'],
  ] as const) assert.equal(resolveLocale(saved, languages), expected);
});

function leaves(value: unknown, prefix = ''): string[] {
  if (typeof value === 'string') { assert.ok(value.length); return [prefix]; }
  return Object.entries(value as object).flatMap(([key, child]) => leaves(child, prefix ? `${prefix}.${key}` : key));
}

test('all dictionaries and rendered text/attribute keys are complete', () => {
  const keys = leaves(it);
  assert.deepEqual(leaves(en).sort(), [...keys].sort());
  const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  for (const match of html.matchAll(/data-i18n(?:-aria-label|-alt|-content)?="([^"]+)"/g)) {
    assert.ok(keys.includes(match[1]), `Untranslated key: ${match[1]}`);
  }
});

test('shared month arithmetic formats Italian and English singular/plural', () => {
  for (const [months, english] of [[1, '1 month'], [8, '8 months'], [12, '1 year'], [19, '1 year and 7 months'], [25, '2 years and 1 month']] as const) {
    assert.equal(formatDuration(months, 'en-GB'), english);
  }
  assert.equal(formatDuration(19, 'it-IT'), '1 anno e 7 mesi');
});
