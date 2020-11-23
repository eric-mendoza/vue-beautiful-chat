export function time(date) {
  let receivedDate = date;
  date = new Date(receivedDate);

  let today = new Date();
  let seconds = Math.floor((today - date) / 1000);
  let interval = Math.floor(seconds / 86400);
  if (interval > 7) {
    return new Intl.DateTimeFormat([]).format(date);
  }

  if (interval > 1) {
    return new Intl.DateTimeFormat([], {weekday: 'long'}).format(date);
  }

  let todaysDate = new Date();
  let receivedDateObject = new Date(receivedDate);
  if (firstDateIsPastDayComparedToSecond(receivedDateObject, todaysDate)) {
    let language = navigator.language.split('-')[0].toLowerCase();
    if (language === 'es') return 'ayer';
    else return 'yesterday'
  }

  return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit'}).format(date);
}

const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) => {
  return firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) < 0;
};

export function chatTitle(chat) {
  let language = navigator.language.split('-')[0].toLowerCase();
  let you = 'You';
  let others = 'others';
  let and = ' & ';
  if (language === 'es') {
    you = 'Tú';
    others = ' y otros';
    and = ' y ';
  }

  if (chat.title !== '') return chat.title;

  if (chat.participants.length === 0) return you;
  if (chat.participants.length === 1) return chat.participants[0].name;
  if (chat.participants.length > 1) return you + ', ' + chat.participants[0].name + and + others;

  return chat.participants[0].name;
}

export function typingMessage(unknown = false) {

  let language = navigator.language.split('-')[0].toLowerCase();
  let message = 'is typing...';
  let user = 'Someone';

  if (language === 'es') {
    message = 'está escribiendo...';
    user = 'Alguien';
  }
  return (unknown ? (user + ' ') : '') + message;
}