export default messages();

function messages() {
  let spanish = {
    you: 'Tú',
    and: 'y',
    others: 'otros',
    isTyping: 'está escribiendo...',
    someone: 'Alguien',
    yesterday: 'ayer',
    online: 'En línea',
    contactInfo: 'Información de contacto'
  };

  let english = {
    you: 'You',
    and: 'and',
    others: '&',
    isTyping: 'is typing...',
    someone: 'Someone',
    yesterday: 'yesterday',
    online: 'Online',
    contactInfo: 'Contact info'
  };

  let language = navigator.language.split('-')[0].toLowerCase();
  if (language === 'es') {
    return spanish;
  }

  else return english;
}