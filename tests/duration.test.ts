import test from 'node:test';
import assert from 'node:assert/strict';
import { calendarMonths, formatDuration } from '../src/utils/duration.ts';

test('inclusive calendar months without inferred days', () => {
  assert.equal(calendarMonths('2024-01', '2024-01'), 1);
  assert.equal(calendarMonths('2024-01', '2024-08'), 8);
  assert.equal(calendarMonths('2023-12', '2024-01'), 2);
  assert.equal(calendarMonths('2024-01', '2024-12'), 12);
  assert.equal(calendarMonths('2024-01', '2025-03'), 15);
});

test('ongoing durations use the injected local month, not build time or days', () => {
  assert.equal(calendarMonths('2025-04', undefined, new Date(2026, 9, 1)), 19);
  assert.equal(calendarMonths('2025-04', undefined, new Date(2026, 9, 31)), 19);
  assert.equal(calendarMonths('2025-04', undefined, new Date(2026, 10, 1)), 20);
  assert.equal(calendarMonths('2025-12', undefined, new Date(2026, 0, 1)), 2);
});

test('Italian singular, plural, and whole years', () => {
  for (const [months, expected] of [[1, '1 mese'], [8, '8 mesi'], [12, '1 anno'], [18, '1 anno e 6 mesi'], [24, '2 anni'], [25, '2 anni e 1 mese']] as const) {
    assert.equal(formatDuration(months), expected);
  }
});

test('invalid, reversed, and future ranges are hidden', () => {
  for (const start of ['2024-00', '2024-13', '2024-1', '0000-01', 'invalid']) {
    assert.equal(calendarMonths(start, '2025-03'), null);
  }
  assert.equal(calendarMonths('2025-04', '2025-03'), null);
  assert.equal(calendarMonths('2025-04', undefined, new Date(2025, 2, 1)), null);
  assert.equal(calendarMonths('2025-04', undefined, new Date(NaN)), null);
  assert.equal(calendarMonths('2024-01', 'invalid'), null);
  assert.throws(() => formatDuration(0), RangeError);
});
