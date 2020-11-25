export default messages();

function messages() {
  let you = 'You';
  let others = 'others';
  let and = ' & ';
  if (language === 'es') {
    you = 'Tú';
    others = ' y otros';
    and = ' y ';
  }

  let spanish = {
    you: 'Tú',
    and: 'y',
  };

  let english = {

  };

  let language = navigator.language.split('-')[0].toLowerCase();
  if (language === 'es') {
    return spanish;
  }

  else return english;



}