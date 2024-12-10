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

/*
    Prompt: Write a function that takes an array of numbers as input
    and returns the maximum value.
    Extension: Modify the function to return the index of the maximum
    value in the list.
  */
const maxValue = (arr) => {
  //create a variable to track and compare each value of the array
  let maximum = arr[0];
  let index = 0;

  //iterate through array, compare variable to current index value
  //if current index value is larger than variable, reassign
  //variable to current index value
  for (let i = 0; i < arr.length; i++) {
    if (maximum < arr[i]) {
      maximum = arr[i];
      index = i;
    }
  }

  return { maxValue: maximum, index: index };
};

const maxValueArray = [-2, -5, -29, -45, -1, 3];
console.log(`max value of ${maxValueArray} is`, maxValue(maxValueArray));

/*
      Implement a function that returns the first non-repeating character in a string.
      If all characters are repeating, return null.
    */

//input: str
//output: first non-repeating char

//swiss => "w" not "i"
//level => "v"
//aabbcc => nul
const firstNonRepeatingChar = (str) => {
  // count object/dictionary object
  const charCount = {};
  //iterate over the string and count chars
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  //iterate over the character count obj and find the first
  //instance of a char with count 1
  for (const char of str) {
    if (charCount[char] === 1) return char;
  }

  return null;
};

const firstNonRepeatingCharString = "ace2609";
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("level"));
console.log(firstNonRepeatingChar("aabbcc"));

/*
      Prompt: Write a function that takes a list of numbers and 
        returns the sum of all even numbers in the list.
      Extension: Modify the function to return both the sum of 
        even numbers and the sum of odd numbers.
    */

const sumEvensArray = [1, 2, 3, 4, 5, 6];

//input: array of numbers
//output: integer equal to the sum of all even numbers
//extension: composite data type that tracks sum of all
//even numbers and all odd numbers

const sumEvens = (arr) => {
  //extension: create composite variable that stores sum of evens
  //sum of odds
  let evens = 0;
  let odds = 0;

  //edgecase if array is empty return 0
  if (!arr.length)
    return {
      evens,
      odds,
    };

  //iterate through array
  for (const value of arr) {
    if (value % 2 === 0) evens += value;
    else odds += value;
  }

  return {
    evens,
    odds,
  };
};

console.log(`SumEvens for ${sumEvensArray} is`, sumEvens(sumEvensArray));

/*
      Prompt: Write a recursive function that returns the n-th number in the Fibonacci sequence using a recursive approach. 
      Bonus: write a non-recursive, iterative approach.
      Bonusx2: Memoize this function 
    */

//input: integer
//output: n-th number in fibonacci sequence
const devslopesFibSeq = (num) => {
  //initialize variable that tracks numbers in sequence
  const fibCount = [0, 1];
  let currentSequence = 0;
  if (num <= 2) return fibCount[num - 1];

  //loop as many times as the input, record each number in fibCount
  for (let i = 2; i < num; i++) {
    //0, 1, 1, 2, 3, 5
    currentSequence =
      fibCount[fibCount.length - 1] + fibCount[fibCount.length - 2];
    fibCount.push(currentSequence);
  }

  //return nth number in sequence
  return currentSequence;
};

console.log(devslopesFibSeq(3));

const devslopesFibSeqRecursive = (num) => {
  if (num === 1) return 0;
  if (num === 2) return 1;

  return devslopesFibSeqRecursive(num - 1) + devslopesFibSeqRecursive(num - 2);
};

console.log("Recursive fib devs is ", devslopesFibSeqRecursive(7));

//recursive factorials

//!5 => 5 * 4 * 3 * 2 * 1 => 5 * !4 => 120
// !4 => 4 * 3 * 2 * 1 => 4 * !3 => 24

/*
      function factorial(number) {
        if (n <= 1) return 1;
        return number * factorial(number - 1); 
      }
  
      factorial(5) => 5 * factorial(4) => 5 * 4 * factorial(3) => 
        5 * 4 * 3 * factorial(2) => 5 * 4 * 3 * 2 * factorial(1);
    
    */

/*
      "Prompt: Write a function that takes two sorted lists of 
        numbers and returns a single sorted list containing all 
        elements from both lists.
      Extension: Modify the function to merge the lists without 
        using any built-in sorting functions."
    */

const mergeSortedList = (arr1, arr2) => {
  const result = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    result.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    result.push(arr2[index2]);
    index2++;
  }

  return result;
};

//[1, 2, 3, 4, 5]
const mSL1 = [1, 3, 5, 7, 9, 11];
const mSL2 = [2, 4, 6, 8, 10, 12, 14];

console.log(mergeSortedList(mSL1, mSL2));

/*
      Given an array of integers from 1 to n with one number missing, 
      write a function to find the missing number.
    */

//inputs: array of integers from 1 to n
//outputs: integer missing from array
const findMissingNum = (arr) => {
  //expected length of nums ex: if last digit is 5
  //n should be 5
  const n = arr.length + 1;

  //expected sum of five digits would be 15
  const expectedSum = (n * (n + 1)) / 2; // => sum of all natural numbers equation

  const actualSum = arr.reduce((total, num) => total + num, 0);

  //if there is a missing number, the answer will be the difference
  return expectedSum - actualSum;
};

const findMissingNumArr = [1, 2, 3, 5];
console.log("missing num is", findMissingNum(findMissingNumArr));

/*
      Prompt: Write a function that takes a list (array) and returns a new list 
      with all duplicate elements removed.
      Extension: Modify the function to maintain the order of the original list.
    */

//inputs: array
//output: array with duplicates removed

const removeDupes = (arr) => {
  const tracked = new Set();
  return arr.filter((element) => {
    if (tracked.has(element)) {
      return false;
    } else {
      tracked.add(element);
      return true;
    }
  });
};

const dupesArray = [1, 1, 2, 5, 5, 5, 16, 47, 68, 92, 47].reverse();
console.log(`Removed dupes of ${dupesArray} is ${removeDupes(dupesArray)}`);

/*
    Write a function that takes an array of integers and a target integer. 
    The function should return indices of the two numbers that add up to the 
    target. Solve this in O(n) or better.
  */

//target = 3
//[2,4,5,1,3]
//9 - [0]: 2 => 7
const twoSumOptimized = (numbers, target) => {
  const map = new Map();
  //2: 0
  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(numbers[i], i);
  }
  return null;
};

const twoSumOptimizedArray = [2, 3, 5, 1, 3];
const twoSumOptimizedTarget = 6;
console.log(
  `Two sum optimized of ${twoSumOptimizedTarget} is ${twoSumOptimized(
    twoSumOptimizedArray,
    twoSumOptimizedTarget
  )}`
);

/*
      Write a function that takes a string and returns the length of the longest 
      substring without repeating characters.  
  */

//input: string
//output: longest substring without repeating characters

const longestSubstring = (str) => {
  const charIndex = {};
  let left = 0;
  let maxLength = 0;
  //Feel good now
  //charIndex = {F: 0, e: 2}
  //right = 2
  //left = 2
  //maxLength =
  //currentChar = "e"

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];

    if (
      charIndex[currentChar] !== undefined &&
      charIndex[currentChar] >= left
    ) {
      left = charIndex[currentChar] + 1;
    }

    charIndex[currentChar] = right;

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(longestSubstring("The fat cat likes"));
console.log(longestSubstring("Beef feels great understand?"));
console.log(longestSubstring("The fat cat likes"));

/*
    Determine if a 9x9 Sudoku board is valid. A valid Sudoku board (partially filled)
    must not violate the rules of Sudoku. The sudoku board input is represented by 
    a 2D array containing either string numbers or "." (empty space) as elements. 
  */

const board1 = [
  ["5", "7", "3", ".", ".", ".", ".", ".", "."],
  ["4", "6", "2", ".", ".", ".", ".", ".", "."],
  ["1", "8", "9", ".", ".", ".", ".", ".", "."],
  ["2", "1", "7", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

const board2 = [
  ["5", "7", "3", ".", ".", ".", ".", ".", "."],
  ["4", "6", "9", ".", ".", ".", ".", ".", "."],
  ["1", "2", "8", ".", ".", ".", ".", ".", "."],
  ["2", "1", "7", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

const validateSudoku = (board) => {
  const isValidLength = board.length === 9;
  const isValidRowLength = board.every((row) => row.length === 9);

  if (!isValidLength || !isValidRowLength) {
    console.log("Board has invalid dimensions");
    return false;
  }

  //check all rows
  for (let i = 0; i < board.length; i++) {
    if (!checkRow(board[i])) {
      console.log("There are invalid rows");
      return false;
    }
  }

  //check all columns
  for (let i = 0; i < board.length; i++) {
    if (!checkColumn(board, i)) {
      console.log("There are invalid columns");
      return false;
    }
  }

  //check all squares
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      if (!checkSquare(board, i, j)) {
        console.log("Invalid duplicates in square");
        return false;
      }
    }
  }

  console.log("Board is valid");
  return true;
};

const checkNoDuplicates = (arr) => {
  const set = new Set();
  for (const value of arr) {
    if (value === ".") continue;
    if (set.has(value)) {
      console.log("There are invalid duplicate numbers");
      return false;
    }
    set.add(value);
  }
  return true;
};

const checkRow = (row) => {
  return checkNoDuplicates(row);
};

const checkColumn = (board, columnNum) => {
  const column = board.map((row) => row[columnNum]);
  return checkNoDuplicates(column);
};

const checkSquare = (board, startRow, startCol) => {
  const square = [];
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      square.push(board[i][j]);
    }
  }
  return checkNoDuplicates(square);
};

validateSudoku(board1);

/*
      Find the k-th largest element in an unsorted array. Note that it is
       the k-th largest element in sorted order, not the k-th distinct 
       element.
  */

//inputs: sorted array
//output: k-th largest element in sorted order

const kthLargest = (arr, k) => {
  return arr.sort((a, b) => b - a)[k - 1];
};

const kthArray = [25, 1, 3, 108, 22, 21];
const kthNumber = 4;
console.log(
  `the ${kthNumber}th number of ${kthArray} is ${kthLargest(
    kthArray,
    kthNumber
  )}`
);

/*
    Prompt: Write a function that takes a string as input and returns 
    the longest word in the string.
    Extension: Modify the function to return an array of all longest 
    words (in case there are ties).
  */

//input: string
//output: longest word in a string
const longestWord = (str) => {
  // const words = str.split(/\s+/).sort((a, b) => b.length - a.length);
  // const longestLength = words[0].length;
  // return words.filter((string) => string.length === longestLength);

  const words = str.split(/\s+/);
  const longestWords = [];
  let maxLength = 0;

  for (const word of words) {
    const length = word.length;
    if (length > maxLength) {
      maxLength = length;
      longestWords.length = 0;
      longestWords.push(word);
    } else if (length === maxLength) {
      longestWords.push(word);
    }
  }

  return longestWords;
};

const longestWordStr = "mew mew mew mew   few";
console.log(
  `Longest word in ${longestWordStr} is ${longestWord(longestWordStr)}`
);
/*
    In this kata, you will sort elements in an array by decreasing 
    frequency of elements. 
    If two elements have the same frequency, sort them by increasing 
    value. 
  */

const simpleFrequencySort = (arr) => {
  /**
    const freqMap = {};
    arr.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });
    
    return arr.sort((a, b) => {
      if(freqMap[b] !== freqMap[a]){
        return freqMap[b] - freqMap[a];
      }
      return a - b;
   }) 

     */
  //loop through array and record frequencies in object
  const frequencyCount = {};
  const list = [];
  const result = [];
  let reversedList = [];

  for (const value of arr) {
    frequencyCount[value] = (frequencyCount[value] || 0) + 1;
  }

  for (const [number, frequency] of Object.entries(frequencyCount)) {
    list.push({ number: number, frequency: frequency });
  }

  reversedList = list.sort((a, b) => b.frequency - a.frequency);

  for (const obj of reversedList) {
    for (let i = 0; i < obj.frequency; i++) {
      result.push(parseInt(obj.number));
    }
  }

  return result;
};

const frequenciesArray = [1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1];
console.log(
  `the sorted frequency of ${frequenciesArray} is ${simpleFrequencySort(
    frequenciesArray
  )} `
);

//find the capitals

const capitalsCodewars = (word) => {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) result.push(i);
  }
  return result;
};

//+1 Array: codewars
const plusOneArray = (arr) => {
  const hasNoNegatives = arr.every((num) => num > -1);
  const hasSingleDigits = arr
    .map((num) => num + "")
    .every((char) => char.length === 1);
  const isInvalidArray = !arr.length || !hasNoNegatives || !hasSingleDigits;

  let arrayInt = parseInt(arr.join(""));
  const isFirstNumberZero = arr[0] === 0;
  if (isInvalidArray) return null;

  arrayInt = `${isFirstNumberZero ? 0 : ""}${arrayInt + 1}`;

  return arrayInt.split("").map((char) => parseInt(char));
};

const plusOneArrayArr = [0, 1];
console.log(
  `Answer for +1 array ${plusOneArrayArr} is ${plusOneArray(plusOneArrayArr)} `
);
/*
[
  [1]
]
[   0, 1
  0[1,2],
]
[
  [1, 2, 3]
]
[
  [1, 2, 3, 4]
]
]
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]

*/

const lengthOfMissingArray = (arrayOfArrays) => {
  const result = (arrayOfArrays || [])
    .map((array) => (array ? array.length : 0))
    .sort((a, b) => a - b);

  if (result.includes(0)) return 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] + 1 !== result[i + 1]) return result[i] + 1;
  }
  return 0;
};

console.log(
  lengthOfMissingArray([
    [1],
    [1, 2],
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6, 7],
  ])
);

/*
    Given a string containing just the characters '(', ')', '{', '}', 
    '[' and ']', determine if the input string is valid. An input string 
    is valid if the brackets are closed in the correct order.
  */

//input: string containing characters "(){}[]"
//output: boolean => true or false if string has opening and closing
//brackets in correct order

const validParens = (str) => {
  const beginningParens = ["(", "{", "["];
  const endingParens = [")", "}", "]"];
  const matchingParens = { ")": "(", "}": "{", "]": "[" };
  const parensSeen = new Set();

  if (!/[[{(].*[)}\]]/.test(str)) return false;

  for (const char of str) {
    if (beginningParens.includes(char)) {
      if (parensSeen.has(char)) {
        continue;
      } else {
        parensSeen.add(char);
      }
    } else if (endingParens.includes(char)) {
      if (parensSeen.has(matchingParens[char])) {
        return true;
      }
    }
  }
  return false;
};

const validParensStr = "(((}}])fjwleriw";
console.log(
  `valid parens of ${validParensStr} is ${validParens(validParensStr)}`
);

/*
    Prompt: Write a function that takes an array and a number k as input and
     rotates the array to the right by k steps.
    Extension: Modify the function to handle negative values of k to rotate
     the array to the left.
  */

const rotateArray = (array, k) => {
  const n = array.length;
  k = k % n;
  if (k < 0) {
    k += n;
  }

  return [...array.slice(n - k), ...array.slice(0, n - k)];
};

const unrotatedArray = [1, 2, 3, 4, 5];
const stepsToRotate = -2;
console.log(
  `rotate ${unrotatedArray} by ${stepsToRotate} steps: ${rotateArray(
    unrotatedArray,
    stepsToRotate
  )}`
);

/*
    Write a function, persistence, that takes in a positive parameter 
    num and returns its multiplicative persistence, which is the number 
    of times you must multiply the digits in num until you reach a single
    digit.
  */

const persistentBugger = (num) => {
  // let currentTotal = 1;
  // let multiplicativePersistence = 0;
  // num = Math.abs(num);

  // if (num < 10) return 0;

  // while (num >= 10) {
  //   while (num > 0) {
  //     const currentNum = num % 10;
  //     currentTotal *= currentNum;
  //     num = Math.floor(num / 10);
  //   }
  //   num = currentTotal;
  //   currentTotal = 1;
  //   multiplicativePersistence++;
  // }
  // return multiplicativePersistence;

  let result = 0;

  while (num >= 10) {
    num = [...`${num}`].reduce((total, num) => total * num);
    result++;
  }
  return result;
};

/*
    Prompt: Write a function filterArray that takes an array and a callback function as input.
     The function should return a new array containing only the elements that satisfy the condition defined 
     in the callback function.

    Extension: Modify the filterArray function to accept an additional argument that specifies the starting 
     index from which to begin filtering the array.
  */

const filterArrayDevslopes = (arr, cb, startIndex = 3) => {
  if (arr.length === 0) return 0;
  const newArr = [];
  for (let i = startIndex; i < arr.length; i++) {
    if (cb(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
};

const persistentNumber = 999;
console.log(
  `persistentBugger of ${persistentNumber} is ${persistentBugger(
    persistentNumber
  )}`
);

/*
    Complete the solution so that the function will break up camel casing, 
    using a space between words.
  */

//input: string
//output: string with space between words

const breakCamelCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};

const camelCase1 = "camelCase";
const camelCase2 = "identifier";
const camelCase3 = "";
const camelCase4 = "camel Casing Test";
const camelCase5 = "hereIsMyTestOfCamelCasingAndAMoose";

console.log(breakCamelCase(camelCase1));
console.log(breakCamelCase(camelCase2));
console.log(breakCamelCase(camelCase3));
console.log(breakCamelCase(camelCase4));
console.log(breakCamelCase(camelCase5));

/*
  Given a list and a number, create a new list that contains each number of 
    list at most N times, without reordering.
  For example if the input number is 2, and the input list is 
    [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
  With list [20,37,20,21] and number 1, the result would be [20,37,21]. 
  */

const deleteNth = (arr, n) => {
  const duplicates = {};
  return (arr || []).filter((num) => {
    duplicates[num] = (duplicates[num] || 0) + 1;
    if (duplicates[num] > n) return false;
    return true;
  });
};

const deleteNthArray = [1, 1, 2, 2, 2];
const nthDuplicate = 0;
console.log(
  `DeleteNth for ${nthDuplicate} of ${deleteNthArray} is ${deleteNth(
    deleteNthArray,
    nthDuplicate
  )}`
);

/*
    Given an array where the i-th element is the price of a given stock on day i, 
    find the maximum profit you can achieve by buying and then selling the stock.
     You can only complete one transaction.
  */

const buySellStock = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  console.log(minPrice);
  return maxProfit;
};

const buySellStockArr = [7, 1, 3, 4, 5, 6, 0];
console.log(
  `max profit of ${buySellStockArr} is ${buySellStock(buySellStockArr)}`
);

/*
    Prompt: Given an array of integers, find the highest 
    product of two unique numbers in the array.
    Extension: Do not use native methods.
  */

const highestOfTwoProducts = (arr) => {
  if (arr.length < 2) {
    throw new Error("Array must have at least two values");
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const value of arr) {
    if (value > largest) {
      secondLargest = largest;
      largest = value;
    } else if (value > secondLargest) {
      secondLargest = value;
    }

    if (value < smallest) {
      secondSmallest = smallest;
      smallest = value;
    } else if (value < secondSmallest) {
      secondSmallest = value;
    }
  }
  return Math.max(largest * secondLargest, smallest * secondSmallest);
};

const hightestProductArr = [7, -3];
console.log(
  `Highest product of ${hightestProductArr} is ${highestOfTwoProducts(
    hightestProductArr
  )}`
);

/*
    Given an array of integers, find the one that appears an
     odd number of times.
    There will always be only one integer that appears an odd
     number of times.
  */

const findOdd = (arr) => {
  const list = {};
  for (const value of arr) {
    list[value] = (list[value] || 0) + 1;
  }

  for (const [key, value] of Object.entries(list)) {
    if (value % 2 !== 0) return parseInt(key);
  }
};

const findOddArr = [4, 4, 4, 1, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1];
console.log(`The odd man out is ${findOdd(findOddArr)}`);

/*
    Write a function that will return the count of distinct
     case-insensitive alphabetic characters and numeric digits
     that occur more than once in the input string. 
      The input string can be assumed to contain only
      alphabets (both uppercase and lowercase) and 
      numeric digits.
  */

const duplicateCount = (text) => {
  const lowerCase = text.toLowerCase();
  const frequencyCount = {};
  let occurrences = 0;
  for (const char of lowerCase) {
    frequencyCount[char] = (frequencyCount[char] || 0) + 1;
  }

  for (const value of Object.values(frequencyCount)) {
    if (value > 1) occurrences++;
  }
  return occurrences;
};

const dupilcateCountString = "ABBA";
console.log(
  `duplicate count of ${dupilcateCountString} is ${duplicateCount(
    dupilcateCountString
  )}`
);

/*
    You live in the city of Cartesia where all roads are laid
     out in a perfect grid. You arrived ten minutes too early 
     to an appointment, so you decided to take the opportunity 
     to go for a short walk. The city provides its citizens 
     with a Walk Generating App on their phones -- 
     everytime you press the button it sends you an array
      of one-letter strings representing directions to walk 
      (eg. ['n', 's', 'w', 'e']). You always walk only a single 
      block for each letter (direction) and you know it takes
       you one minute to traverse one city block, so create a
        function that will return true if the walk the app
         gives you will take you exactly ten minutes (you don't
          want to be early or late!) and will, of course
          , return you to your starting point. Return false 
          otherwise.
  */
const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;
  let x = 0;
  let y = 0;
  const directions = {
    n: () => (x += 1),
    s: () => (x -= 1),
    e: () => (y += 1),
    w: () => (y -= 1),
  };

  for (const dir of walk) {
    directions[dir]();
  }

  return x === 0 && y === 0;
};

const walk1 = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]; // => true
const walk2 = ["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]; // => false
const walk3 = ["w", "w", "w", "e", "e", "e", "w", "e", "w", "e"]; // => true
const walk4 = ["e", "e", "w", "e", "w", "e"]; // => false
const walk5 = ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]; // => false
const walk6 = ["w", "n", "n", "s", "e", "s", "e", "e", "w", "w"];
console.log(`current walk validity is : ${isValidWalk(walk6)}`);
// console.log(`Current walk is valid: ${walk3} - ${isValidWalk(walk3)}`);

//OOP & Factory Functions

function createRestaurant(name, cuisine, rating) {
  return {
    name,
    cuisine,
    rating,
    getRating: function () {
      return `${name} has a rating of ${rating}`;
    },
  };
}

const restaurant1 = createRestaurant("The Spicy Spoon", "Thai", 4.6);
const restaurant2 = createRestaurant("Pizza Palace", "Italian", 4.0);

console.log(restaurant1, restaurant2);

//Constructors & Prototype Chain
//Constructors allow us to create objects dynamically, have mechanisms
// for storing common methods and properties more efficiently

function Restaurant(name, cuisine, rating) {
  this.name = name;
  this.cuisine = cuisine;
  this.rating = rating;
}

Restaurant.prototype.getRating = function () {
  return `${this.name} has a rating of ${this.rating}`;
};

const rest1 = new Restaurant("Devslopes Diner", "American", 4.5);
const rest2 = new Restaurant("Pizza Palace", "Italian", 4.0);

console.log(rest1.getRating());
console.log(rest2.getRating());

//Class Syntax - a JS syntax we can use to organize and maintain our
//constructors and methods more formally

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  calcArea() {
    return Math.PI * this.radius ** 2;
  }

  calcCircumference() {
    return 2 * this.radius * Math.PI;
  }

  describe() {
    console.log(
      `This circle has a radius of  ${
        this.radius
      }, an area of ${this.calcArea().toFixed(2)},
        and a circumference of ${this.calcCircumference().toFixed(2)},
        it is ${this.color}. `
    );
  }

  static isValidRadius(radius) {
    return radius > 0 && typeof radius === "number";
  }
}

const myCircle = new Circle(10, "red");

//EXTEND a Class

class Sphere extends Circle {
  constructor(radius, color, nickname) {
    super(radius, color);
    this.nickname;
  }

  getVolume() {
    return (4 / 3) * Math.PI * this.radius ** 3;
  }

  describe() {
    console.log(
      `This sphere has a radius of  ${
        this.radius
      }, an area of ${this.calcArea().toFixed(2)},
        and a volume of ${this.getVolume().toFixed(2)},
        it is ${this.color}. `
    );
  }
}

const mySphere = new Sphere(5, "Blue", "Earth");
console.log(mySphere);
console.log(mySphere.describe());
