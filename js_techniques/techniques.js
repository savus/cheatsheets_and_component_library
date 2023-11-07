//Find first non-consecutive number
//==================================

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

//Sum of two smallest numbers

function twoSmallestNumbers(numbers) {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

//reverse words in same order

function reverseWords(arr) {
  return arr.split("").reverse().join("");
}

//count by multiples

function countBy(multiple, limit) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(multiple * i);
  }

  return z;
}

//find multiples

function findMultiples(integer, limit) {
  const a = [];
  let increment = 1;
  while (integer * increment <= limit) {
    a.push(integer * increment);
    increment++;
  }
  return a;
}

/*sort an array of strings in order to their ASCII characters
and return each letter sepparated by '***' */

function twoSorts(s) {
  return String(sArray.sort().map((string) => string.split("").join("***")));
}

//retrieve a css variable through javascript

const root = document.documentElement;
const loadingScreenDelay = parseFloat(
  window.getComputedStyle(root).getPropertyValue("--loading-screen-delay")
);

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const quarterOf = (month) => Math.ceil(month / 3);

function grow(x) {
  return x.reduce((total, value) => total * value);
}

const noSpace = (x) => x.replaceAll(" ", "");

function distanceBetweenPoints(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x ** 2 + y ** 2);
}

//convert kilometers per hour to centimeters per second
function convertKMHToCMS(s) {
  return Math.floor((s * 1000 * 100) / (60 * 60));
}

function bonusTime(salary, bonus) {
  return bonus ? salary * 10 : salary;
}

function greet(name) {
  return `Hello ${name === "Johnny" ? "my love" : name}!`;
}

function century(year) {
  if (year.toString().length < 3) return 1; // 1rst century
  const c = parseInt(year.toString().slice(0, -2)); // the nth century is always two numbers shorter
  if (year % 100 === 0) return c; //every 100 years will be the correct century
  else return c + 1; // the nth century is always called one number higher ex (1701 is the 18th century)
}

//how many students need how many papers

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

//replace dots with dashes
const replaceDots = function (str) {
  return str.replaceAll(".", "-");
};

//find the (n) index of an array and raise it by
//(n)th power
function nthPower(array, n) {
  if (n >= array.length) return -1;
  return Math.pow(array[n], n);
}

function position(letter) {
  const alpha =
    "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z."
      .split(",")
      .join("")
      .replaceAll(" ", "");
  const position = alpha.indexOf(letter.toUpperCase()) + 1;
  return `position of alphabet: ${position}`;
}

//remove largest and smallest numbers from array
// and return sum
function sumArray(array) {
  if (array === null) return 0;
  const sorted = array.sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((total, current) => total + current);
}

function enough(cap, on, wait) {
  if (cap - (on + wait) >= 0) return 0;
  return on + wait - cap;
}

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep === true);
}

function reverseList(list) {
  return list.reverse();
}

function setAlarm(employed, vacation) {
  if (employed && !vacation) return true;
  return false;
}

function closeCompare(a, b, margin) {
  const diff = Math.abs(a - b);
  margin = margin || 0;
  if (margin >= diff) return 0;
  else if (a < b) return -1;
  else return 1;
}

function points(games) {
  return games
    .map((game) => {
      const { x, y } = game.split(":").map((score) => parseInt(score));
      if (x > y) return 3;
      if (x < y) return 0;
      return 1;
    })
    .reduce((total, currentValue) => total + currentValue);
}

function warnTheSheep(queue) {
  const reversed = queue.reverse();
  const wolfIndex = reversed.indexOf("wolf");
  if (wolfIndex === 0) return "Pls go away and stop eating my sheep!";
  return `Oi Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
}

//number of pillars (>= 1)
//distance between pillars(10 - 30 meters)
//width of the pillar(10 - 50 centimeters)
//calculate the distance between the first and last pilar in centimeters (without the width of the first and last pillar)
function pillars(numPill, dist, width) {
  //if one pillar return 0
  if (numPill === 1) return 0;
  return dist * (numPill - 1) * 100 - width * (numPill - 2);
}

const stringToNumber = (str) => +str;

function correctMistakes(string) {
  return string.replaceAll("1", "I").replaceAll("5", "S").replaceAll("0", "O");
}

//find min and max values of a list
function min(list) {
  return Math.min(...list);
}

function max(list) {
  return Math.max(...list);
}

//how many stairs will suzuki climb in 20 years
function stairsIn20(s) {
  return (
    20 *
    s
      .reduce(
        (total, day) => {
          return [...total, ...day];
        },
        [0]
      )
      .reduce((sum, currentValue) => sum + currentValue)
  );
}

//expressionsMatter

function expressionsMatter(a, b, c) {
  const results = [];
  results.push(a + b + c);
  results.push(a * b * c);
  results.push((a + b) * c);
  results.push(a * b + c);
  results.push(a * (b + c));
  return Math.max(...results);
}

//will you make it
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

//Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) sharkSpeed /= 2;
  const youTime = pontoonDistance * youSpeed;
  const sharkTime = sharkDistance / sharkSpeed;
  if (youTime < sharkTime) return "Alive!";
  return "Sharkbait";
}
