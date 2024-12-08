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

//count odd numbers lower than N

const countOdd = (n) => Math.floor(n / 2);

// create a method each_cons that accepts a list and a number n
// and returns cascading subsets of the list of size n
//example each_cons([1,2,3,4], 2) => [[1,2], [2,3], [3,4]]

const each_cons = (array, n) => {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    let smallArr = [];
    for (let j = 0; j < n; j++) {
      let index = i + j;
      if (index >= array.length) return results;
      smallArr.push(array[index]);
    }
    results.push(smallArr);
  }
  return results;
};

const tvShows = ["The Walking Dead", "Breaking Bad", "The Office"];

const userSavedMovies = [];

for (let i = 0; i < tvShows.length; i++) {
  console.log(i);
}

//OBJECT METHODS
//METHODS ARE FUNCTIONS THAT LIVE ON AN OBJECT

const devslopesDiner = {
  name: "Devslopes Diner",
  cuisine: "American",
  address: "555 Main Street",
  avgPrice: 15,
  reviews: [{}, {}, {}],
  ratings: [9, 7, 10, 5],
  passedInspection: true,
};

console.log(Object.keys(devslopesDiner));
console.log(Object.values(devslopesDiner));
for (const [key, value] of Object.entries(devslopesDiner)) {
  console.log(`Key: ${key} / Value: ${value}`);
}

console.log(devslopesDiner.hasOwnProperty("cuisine"));

//CREATING CUSTOM METHODS
devslopesDiner.printAd = function () {
  console.log(
    `Welcome to ${devslopesDiner.name}! We serve ${devslopesDiner.cuisine} food and are located at ${devslopesDiner.address}. Come visit us!`
  );
};

devslopesDiner.printAd();

//Array.filter()
//returns a new array that satisfies the conditions
//in callback function

const numbers = [2, 5, 7, 1];
const classRoom = {
  grade: "3rd Grade",
  students: [
    { name: "james", score: 90 },
    { name: "jacob", score: 92 },
    { name: "Jenny", score: 87 },
    { name: "benny", score: 70 },
    { name: "berry", score: 99 },
    { name: "arin", score: 91 },
    { name: "danny", score: 78 },
  ],
};

const gradeAStudents = classRoom.students.filter(function (student) {
  return student.score >= 90;
});

console.log(gradeAStudents);

const filtered = numbers.filter(function (number, index) {
  console.log(index);
  return number >= 5;
});

console.log(filtered);

//Array.reduce()
//reduce elements in an array into a single value

const sumOfNumbers = numbers.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);

console.log(sumOfNumbers);

const scoreTotal = classRoom.students.reduce(function (total, student) {
  const { score } = student;
  return total + score;
}, 0);

console.log(scoreTotal);

const starStudents = classRoom.students
  .filter(function (student) {
    return student.score >= 90;
  })
  .map(function (student) {
    student.score += 5;
    return student;
  })
  .reduce(
    function (acc, student, _index, array) {
      const total = acc.sum + student.score;
      const avg = total / array.length;

      return {
        sum: total,
        arr: array,
        studentAvg: avg,
      };
    },
    { sum: 0, arr: [], studentAvg: 0 }
  );

console.log(starStudents);

//SETS

const names = new Set();

//ADD ITEMS

names.add("Jason");
names.add("Nathan");
names.add("Jared");

//Delete item

names.delete("Jason");

console.log(names);

//SETS EXTENDED

//three main helpful characteristics
//[1] They remove duplicate values and ensure we store only unique values.
//[2] They maintain the insertion order of elements we store.
//[3] They are iterable and compatible with for...of loops.

/* SYNTAX  */

const exampleArr = [1, 2, 3, 3, 3, 3, 4, 5];
const exampleStr = "This is a test string";

//declare an empty set
const exampleSet = new Set();

//declare a set from a separate existing iterable
const arrToSet = new Set(exampleArr);
console.log("arrToSet", arrToSet);

const stringToSet = new Set(exampleStr);
console.log("stringToSet", stringToSet);

/* EXAMPLE ALGOS */

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log("Removed duplicates", removeDuplicates(exampleArr));

//Prompt: Given two arrays, find the elements that are common to both arrays.

function intersection(arr1, arr2) {
  const arr1Values = new Set(arr1);
  // const arr2Values = new Set(arr2);
  const intersectionVals = new Set();

  for (let num of arr2) {
    if (arr1Values.has(num)) intersectionVals.add(num);
  }

  return Array.from(intersectionVals);
}

console.log(intersection([1, 2, 3, 4, 5], [5, 3, 9, 6, 8]));

//MAPS

const mapPeople = new Map();

mapPeople.set("Jason", 1);
mapPeople.set("Nathan", 1);
mapPeople.set("Jared", 1);

console.log(mapPeople.has("Jason"));
console.log(mapPeople.get("Jason"));

const headers = document.querySelectorAll("h5");
const totalClicks = new Map();

headers.forEach((header) => {
  totalClicks.set(header, 0);

  header.addEventListener("click", function () {
    const currentClick = totalClicks.get(this);

    totalClicks.set(this, currentClick + 1);
  });
});

console.log(headers);

//ALGORITHMS

//palindrome testing function

// "pizza" // => false
// "level" // => true
// "race car" // => true
// "raceCar" // => true
// "race.car" // => true

// CODE AND TEST

function isPalindrome(string) {
  // Break the problem into smaller, codeable steps

  //remove spaces, punctuation, and lowercase the string
  const cleanStrCopy = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  //iterate over the string from the outside in
  let left = 0;
  let right = cleanStrCopy.length - 1;

  while (left < right) {
    //if at any point the characters don't match, it's not a palindrome
    if (cleanStrCopy[left] !== cleanStrCopy[right]) {
      console.log(`${string} is not a palindrome`);
      return false;
    }
    left++;
    right--;
  }

  // if we get to the end and all characters match, it's a palindrome
  console.log(`${string} is a palindrome`);
  return true;
}

isPalindrome("racecar");

//BIG O NOTATION

//1. Constant O(1): the input size does not
//impact the number of operations needed to perform

/*
    2. Logarithmic O(logn): 
    We add fewer actions to handle a larger input

    3. Linear O(n): 
    the input and number of actions are directly related

    4. Squared O(n^2): 
    An increase in the input
  */

//1. when analyzing our code, we assume the worst case scenario

//2 our analysis should focus on major operations in our code (loops, methods, recursion),
//not small operations (conditionals, arithmetic, assignment)

//O(n-squared) demo:

function bubbleSort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

//ALGORITHMS TUTORIALS

//BIG-O notation describes the complexity of an algorithm using algebraic

// - It expressed in terms of the input

// - It focuses on the bigger picture without getting caught up in the minute details

//Time complexity of this function is O(n) - or linear
//size of input determines the size of the time-complexity
function summation(n) {
  //Count the number of times a statement executes based on the input size
  //assume n = 4
  let sum = 0; //this line executes once
  for (let i = 1; i <= n; i++) {
    sum += i; //this line executes 4 times
  }
  return sum; //this line executes once
  //total executions of this function are n + 2
  //if n = 4, total executions are 6
  //if n = 6, total executions are 8
  //if n = 100,000,000, exections are 100,00,002
}

//same function simplified
//Time complexity of this function is O(1) - or constant
function summationSimple(n) {
  //no matter how big n is, this line is executed once
  return (n * (n + 1)) / 2;
}

console.log("Summation is: ", summation(2));

//OBJECTS Big - O
/* 
    To access, insert, or remove a value of an object
    the time complexity is constant - O(1), the time to
    perform these operations is not related to the number
    of other values.
    To search for a value or iterate over an object for a
    value, the time complexity is linear - O(1), because
    the number of properties present determines the number
    of operations performed.
  */

//Object.keys() - O(n)
//Object.value() - O(n)
//Object.entreis() - O(n)

//Arrays - Big - O
// to insert / remove at the end of an array is O(1)
/*
    to insert / remove at the beginning of an array is O(n),
    because the index of each other element has to be reset
  */
// to access an element by index is O(1)
// searching for an element is O(n)
// Push/ Pop O(1)
// Shift/ Unshift / Concat / Slice / Splice - O(n)
// forEach / Map / Filter / Reduce - O(n)

//Math Algorithms

//fibonacci sequence

//given the number N, find the first N elements of the fibonacci sequence

function fibonacciSeq(n) {
  const result = [0, 1];

  if (n <= 2) return result;
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

console.log(fibonacciSeq(7));

//FACTORIAL OF A NUMBER

//given an integer N, find the factorial of that integer

// const factorialOfInt = (n) => {
//   let factorial = 1;
//   if (n < 1) return factorial;
//   for (let i = n; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// };

function factorialOfInt(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log("factorial: ", factorialOfInt(5));

//PRIME NUMBER

//Give a natural number N, determine if the number is prime or not

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const testNum = 97;
console.log(`is ${testNum} a prime number?`, isPrime(testNum));

//Power of two

//given a positive integer N, determine if the number is a power of 2 or not

//time complexity is O(log n) - logarithmic
const isPowerOfTwo = (n) => {
  //if n is not positive, return false
  if (n < 1) return false;

  //write a loop that runs as long as n is greater than 1

  while (n > 1) {
    //return false if n is not evenly divisible by 2
    if (n % 2 !== 0) return false;
    //divide n by 2
    n /= 2;
  }
  //if all quotients of n divided by 2 are evenly divisible, return true
  return true;
};

console.log(
  "power of two",
  isPowerOfTwo(1),
  isPowerOfTwo(2),
  isPowerOfTwo(5),
  isPowerOfTwo(8)
);

//recursion

//problem solving technique where the solution depends on solutions
//to smaller instances of the same problem

//when a function calls itself

//recursive fibonacci

//given a number N, find the Nth element of the fibonacci sequence
const recursiveFibonacci = (n) => {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log("recursive fibonacci ", recursiveFibonacci(1));

//Recursive factorial of a number

//Given an integer N, find the factorial of that integer

const recursiveFactorial = (n) => {
  console.log(n);
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
};

const factorialInt = 4;
console.log(
  `Factorial of ${factorialInt} is: `,
  recursiveFactorial(factorialInt)
);

const tree = {
  name: "John",
  children: [
    {
      name: "sophia",
      children: [],
    },
    {
      name: "Chris",
      children: [
        {
          name: "Gena",
          children: [],
        },
        {
          name: "Michael",
          children: [],
        },
        {
          name: "Francis",
          children: [],
        },
      ],
    },
  ],
};

const printChildrenRecursive = (t) => {
  if (t.children.length === 0) return;
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
};

printChildrenRecursive(tree);

const rescursiveSum = (n) => {
  if (n === 0) return 0;
  return n + rescursiveSum(n - 1);
};

console.log("Recursive sum is,", rescursiveSum(7));

//SEARCH ALGORITHMS

//linear search

//given an array of N elements and a target of element T,
//find the index of T in the array. Return -1 if the target
//element is not found

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

    if (target === arr[middleIndex]) return middleIndex;

    if (target < arr[middleIndex]) rightIndex = middleIndex - 1;
    else leftIndex = middleIndex + 1;
  }

  return -1;
};

const sortedArray = [-5, 1, 2, 6, 10];

console.log(`Index of ${10} is ${binarySearch(sortedArray, 10)}`);

console.log(`Index of ${6} is ${binarySearch(sortedArray, 6)}`);

console.log(`Index of ${20} is ${binarySearch(sortedArray, 20)}`);

//bubble sort

// quadradic/squared O(n^2) time complexity
const bubbleArr = [0, 20, -2, 4, -6];
//[20, 0]
function bubbleSort(arr) {
  let swapped;
  const sortedArr = arr;

  do {
    swapped = false;
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return sortedArr;
}

function reverseBubbleSort(arr) {
  let swapped;
  const sortedArr = arr;

  do {
    swapped = false;
    for (let i = 0; i < sortedArr.length - 1; i++) {
      //[0, 20]
      if (sortedArr[i] < sortedArr[i + 1]) {
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return sortedArr;
}

console.log(`Sorted version of ${bubbleArr} is ${bubbleSort(bubbleArr)}`);
console.log(
  `Reverse sorted version of ${bubbleArr} is ${reverseBubbleSort(bubbleArr)}`
);
