import dictionary from "./assets/dictionary";
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
    return dictionary.yesterday;
  }

  return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit'}).format(date);
}

const firstDateIsPastDayComparedToSecond = (firstDate, secondDate) => {
  return firstDate.setHours(0, 0, 0, 0) - secondDate.setHours(0, 0, 0, 0) < 0;
};

export function chatTitle(chat) {
  if (chat.title !== '') return chat.title;

  if (chat.participants.length === 0) return dictionary.you;
  if (chat.participants.length === 1) return chat.participants[0].name;
  if (chat.participants.length > 1) return dictionary.you + ', ' + chat.participants[0].name + ' ' + dictionary.and + ' ' + dictionary.others;

  return chat.participants[0].name;
}

export function typingMessage(unknown = false) {
  return (unknown ? (dictionary.someone + ' ') : '') + dictionary.isTyping;
}