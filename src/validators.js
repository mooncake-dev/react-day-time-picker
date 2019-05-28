/**
 * A validator function that prevents a user from picking past days.
 *
 * @param {Date} calendarDay - a calendar day, starting at "00:00:00" hours
 *
 * @return {Boolan} If the day can be picked by the user (valid) or not.
 */
export function preventPastDays(calendarDay) {
  const now = new Date();
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  );

  const isValid = calendarDay.getTime() >= today.getTime();
  return isValid;
}
