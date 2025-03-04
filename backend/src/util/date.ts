import {
  HOURS_IN_A_DAY,
  MINUTES_IN_AN_HOUR,
  MS_IN_A_SECOND,
  SECONDS_IN_A_MINUTE,
} from '@/database/constants/date';

/**
 * Add number of days to date
 *
 */
export function addDaysToDate(date: Date, days: number): Date {
  const newDate = new Date(date);

  newDate.setUTCDate(newDate.getUTCDate() + days);
  newDate.setUTCHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );

  return newDate;
}
