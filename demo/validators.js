// TODO: pass validator as prop
// "calendarDay" is a Date Object that starts at "00:00:00" hours, e.g.:
// "Sun Apr 28 2019 00:00:00 GMT+0200 (Central European Summer Time)"
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
