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
