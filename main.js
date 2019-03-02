// josh pantana
// tori amos
// michael jackson
// sam smith
// billy joel

const firstName = 'Josh';
const lastName = 'Pantana';
// console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

const firstName1 = 'Brittney'
const lastName1 = 'Spears'
console.log(`${firstName1} ${lastName1}`);

const firstName2 = 'Tori'
const lastName2 = 'Amos'
console.log(`${firstName2} ${lastName2}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Josh', 'Pantana');
namePrinter('Mick', 'Jagger');

const nuggetizer = (animal) => {
  return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));

const dogBreed = (x) => {
  return `My favorite dog breed is a ${x}`;
};

console.log(dogBreed('Border Collie'));
console.log(dogBreed('Lab'));
console.log(dogBreed('Boxer'));
console.log(dogBreed('Doodle'));

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('lab');

// const nuggetizerIzer = document.getElementById('nuggetizer');
// nuggetizerIzer.innerHTML = nuggetizer('zebra');
// nuggetizerIzer.innerHTML += nuggetizer('bear');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('lab'));
printToDom('nuggetizer', nuggetizer('zebra'));
printToDom('nuggetizer', nuggetizer('kitten'));
printToDom('nuggetizer', 'mmmmmmmmmmmm');

let bandNumber = 1
const addBand = (bandName) => {
  const newBandName = `<h3>${bandNumber}. ${bandName}</h3>`;
  bandNumber++
  printToDom('band-list', newBandName);
};

addBand('Metallica'); // 1. Metallica
addBand('Slayer'); //2. Slayer
addBand('Tom Petty & The Heartbreakers')