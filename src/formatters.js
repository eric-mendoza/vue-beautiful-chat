export function time(date) {
  date = new Date(date);
  let today = new Date();

  let seconds = Math.floor((new Date() - date) / 1000);


  let interval = Math.floor(seconds / 86400);
  if (interval > 7) {
    return new Intl.DateTimeFormat([]).format(date);
  }

  if (interval >= 1) {
    return new Intl.DateTimeFormat([], {weekday: 'long'}).format(date);
  }

  if (firstDateIsPastDayComparedToSecond(date, today)) {
    let language = navigator.language.split('-')[0].toLowerCase();
    if (language === 'es') return 'ayer';
    else return 'yesterday'
  }

  let optionsHour = { hour: '2-digit',  minute: '2-digit'};
  return new Intl.DateTimeFormat([], optionsHour).format(date);
}

const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) => {
  return firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) < 0;
};
