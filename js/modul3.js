// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const yarovoy = students.map(student => student.score);
// console.log(yarovoy); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

///////////////////////




const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']
 

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 20 )
console.log(positiveValues); // [51, 27, 21, 42]

[1, 2, 3, 4, 5].every(value => value >= 0); // true

const rr = [51, -30, 270, 210, -680, 42, -37].every(value => value >= 0);
console.log(rr);

const colorPickerOptio = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptio.findIndex(option => option.label === "blue"); // 2





[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false