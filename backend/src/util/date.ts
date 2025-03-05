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
