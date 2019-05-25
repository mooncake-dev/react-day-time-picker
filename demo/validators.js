/**
 * A validator function to determine if a day can be selected by the user or
 * not.
 *
 * @param {Date} calendarDay - Calendar day starting at "00:00:00" hours
 *
 * @return {Boolan} If the day is valid or not.
 */
export function dayValidator(calendarDay) {
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

// "slotTime" is a Date Object
// NOTE: currently not passed as prop
export function timeValidator(slotTime) {
  const validTimes = [
    new Date('Tue May 21 2019 14:15:00 GMT+0200').getTime(),
    new Date('Tue May 21 2019 15:15:00 GMT+0200').getTime()
  ];
  const isValid = validTimes.includes(slotTime.getTime());
  return isValid;
}
