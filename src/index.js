// ======= Helper Functions ======= //
function isEmpty(str) {
  const words = str.trim().split('');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] !== ('\n' || '\r' || '\t')) {
      return false;
    }
  }
  return true;
}

// ------- addSmiley ------- //
function addSmiley(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    output += (`${str[i]}:)`);
  }
  return output;
}

// ------- deleteEvenChars ------- //
function deleteEvenChars(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  if (str.length < 2) {
    return str;
  }
  let output = '';
  for (let i = 0; i < str.length; i += 1) {
    if ((i + 1) % 2 !== 0) {
      output += str[i];
    }
  }
  return output;
}

// ------- capitalizeSecondChar ------- //
function capitalizeSecondChar(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  if (str.length < 2) {
    return str;
  }
  const firstChar = str[0];
  const secondChar = str[1].toUpperCase();
  const end = str.slice(2);
  return firstChar + secondChar + end;
}

// ------- deleteLastTwoChar ------- //
function deleteLastTwoChar(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  if (str.length < 2) {
    return str;
  }
  return str.slice(0, -2);
}

// ------- sayAmongUs ------- //
function sayAmongUs() {
  return 'Among Us';
}

module.exports = {
  addSmiley,
  deleteEvenChars,
  capitalizeSecondChar,
  deleteLastTwoChar,
  sayAmongUs,
};
