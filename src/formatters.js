export function time(date) {
  date = new Date(date);

  let seconds = Math.floor((new Date() - date) / 1000);


  let interval = Math.floor(seconds / 86400);
  if (interval > 7) {
    return new Intl.DateTimeFormat([]).format(date);
  }

  if (interval > 1) {
    return new Intl.DateTimeFormat([], {weekday: 'long'}).format(date);
  }

  let optionsHour = { hour: '2-digit',  minute: '2-digit'};
  return new Intl.DateTimeFormat([], optionsHour).format(date);
}

