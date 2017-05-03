const sentence = 'Lorem ipsum dolor sit amet';
console.log(sentence.includes('ipsum')); // true
console.log(sentence.includes('ipsum', 7)); // false


console.log(sentence.startsWith('Lorem')); // true
console.log(sentence.endsWith('amet')); // true

console.log(sentence.startsWith('ipsum', 6)); //true
console.log(sentence.endsWith('dolor', 17)); //true


console.log(String.raw`Hello \n raw`); //Hello \n raw

const name = 'John';
console.log(String.raw`Hello \n ${name}!`); // Hello \n John!

console.log('Hello '.repeat(3)); //Hello Hello Hello