/**
 * A validator function to determine if a day can be selected by the user or
 * not.
 *
 * @param {Date} calendarDay - a calendar day, starting at "00:00:00" hours
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

/**
 * A validator function to determine if a time slot can be selected by the user
 * or not.
 *
 * @param {Date} slotTime - a time slot
 *
 * @return {Boolan} If the time slot is valid or not.
 */
export function timeSlotValidator(slotTime) {
  const eveningTime = new Date(
    slotTime.getFullYear(),
    slotTime.getMonth(),
    slotTime.getDate(),
    18,
    0,
    0
  );

  const isValid = slotTime.getTime() > eveningTime.getTime();
  return isValid;
}
