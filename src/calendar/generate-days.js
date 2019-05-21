import dateFns from 'date-fns';

function generateDays(month) {
  const start = dateFns.startOfMonth(month);
  const end = dateFns.endOfMonth(month);

  const firstDay = dateFns.startOfWeek(start);
  const lastDay = dateFns.endOfWeek(end);

  const days = [];
  let day = firstDay;

  while (day <= lastDay) {
    days.push(day);
    day = dateFns.addDays(day, 1);
  }

  return [start, days];
}

export default generateDays;
