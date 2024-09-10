// 1

// const multiply = (a, b) => a * b;

/*------------------------------------*/

// 2

// function accum(s) {
// 	return s
// 		.split("")
// 		.map((el, index) => {
// 			el = el.repeat(++index);
// 			return el[0].toUpperCase() + el.substring(1).toLowerCase();
// 		})
// 		.join("-");
// }

// console.log(accum("ZpglnRxqenU"));

/*------------------------------------*/

// 3

// function likes(names) {
// 	if (names.length === 0) {
// 		return "no one likes this";
// 	} else if (names.length === 1) {
// 		return `${names[0]} likes this`;
// 	} else if (names.length === 2) {
// 		return `${names[0]} and ${names[1]} like this`;
// 	} else if (names.length === 3) {
// 		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// 	} else if (names.length > 3) {
// 		return `${names[0]}, ${names[1]} and ${
// 			names.length - 2
// 		} others like this`;
// 	}
// }

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

/*------------------------------------*/

// 4

// function addBinary(a, b) {
// 	return (a + b).toString(2);
// }

// console.log(addBinary(1, 1));

/*------------------------------------*/

// 5

// const friend = (friends) =>
// 	friends.filter((friend) => !friend.search(/\w\w\w\w$/));

// console.log(friend(["Ryan", "Kieran", "Mark"]));

/*------------------------------------*/

// 6

// function getSum(a, b) {
// 	let sum = 0,
// 		max = Math.max(a, b),
// 		min = Math.min(a, b);

// 	for (min; min <= max; min++) {
// 		sum += min;
// 	}
// 	return sum;
// }

// console.log(getSum(1, 1));

/*------------------------------------*/

// 7

// function solution(number) {
// 	let sum = [];
// 	for (let i = 1; i < number; i++)
// 		if (i % 3 === 0 || i % 5 === 0) sum.push(i);

// 	let sortedSum = Array.from(new Set(sum));

// 	let res = 0;
// 	sortedSum.forEach((item) => (res += item));

// 	return res;
// }

// console.log(solution(2));

/* ------------------------------------ */

// const fb = (n) => {
// 	let stack = [0, 1];

// 	for (let i = 0; i < n; i++) {
// 		stack.push(stack[i] + stack[i + 1]);
// 	}

// 	return stack[n - 1];
// };

// console.log(fb(100));

/* ------------------------------------ */

// const binaryTree = {
// 	value: 6,
// 	right: {
// 		value: 20,
// 		right: {
// 			value: 2,
// 		},
// 		left: {
// 			value: 3,
// 		},
// 	},
// 	left: {
// 		value: 15,
// 		right: {
// 			value: 8,
// 		},
// 		left: {
// 			value: 12,
// 		},
// 	},
// };

// const sumTree = (tree) => {
// 	let count = tree.value;

// 	if (tree.left || tree.right) {
// 		count += sumTree(tree.left) + sumTree(tree.right);
// 	}

// 	return count;
// };

// console.log(sumTree(binaryTree));

/* ------------------------------------ */

// const someFn = () => {
// 	console.log("Hello world!");
// };

// Function.prototype.callWithDelay = function (delay) {
// 	return () => {
// 		setTimeout(this, delay);
// 	};
// };

// const asd = someFn.callWithDelay(2000);
// asd();

/* ------------------------------------ */

// function firstNonRepeatingLetter(s) {
//   return (
//     s.split("").find((letter, index) => {
//       let str = s.slice(0, index) + s.slice(index + 1);

//       return !str.toLowerCase().includes(letter.toLowerCase());
//     }) || ""
//   );
// }

// console.log(firstNonRepeatingLetter("sTreSS"));

/* ------------------------------------ */

// function levenshteinDistance(a, b) {
//   const matrix = [];
//   for (let i = 0; i <= a.length; i++) {
//     matrix[i] = [];
//     for (let j = 0; j <= b.length; j++) {
//       matrix[i][j] = 0;
//     }
//   }

//   for (let i = 0; i <= a.length; i++) {
//     matrix[i][0] = i;
//   }
//   for (let j = 0; j <= b.length; j++) {
//     matrix[0][j] = j;
//   }

//   for (let i = 1; i <= a.length; i++) {
//     for (let j = 1; j <= b.length; j++) {
//       const cost = a[i - 1] === b[j - 1] ? 0 : 1;
//       matrix[i][j] = Math.min(
//         matrix[i - 1][j] + 1,
//         matrix[i][j - 1] + 1,
//         matrix[i - 1][j - 1] + cost
//       );
//     }
//   }

//   return matrix[a.length][b.length];
// }

// function Dictionary(words) {
//   this.words = words;
// }

// Dictionary.prototype.findMostSimilar = function (term) {
//   const distances = [];

//   this.words.forEach((word, index) => {
//     distances[index] = levenshteinDistance(word, term);
//   });

//   return this.word[distances.indexOf(Math.min(...distances))];
// };

// const fruits = new Dictionary([
//   "cherry",
//   "pineapple",
//   "melon",
//   "strawberry",
//   "raspberry",
// ]);
// console.log(fruits.findMostSimilar("strawbery")); // must return "strawberry"
// console.log(fruits.findMostSimilar("berry")); // must return "cherry"

/* ------------------------------------ */

// let isInteger = (number) => {
//   const split = String(number).split(".");
//   return split.length === 1;
// };

// const round = function (number) {
//   const split = String(number).split(".");
//   if (isInteger(number)) return number;

//   const decimal = Number(split[1][0]);
//   const int = Number(split[0]);

//   return decimal >= 5 ? Number(int) + 1 : Number(int);
// };

// const ceil = function (number) {
//   if (isInteger(number)) return number;
//   return Number(String(number).split(".")[0]) + 1;
// };

// const floor = function (number) {
//   if (isInteger(number)) return number;
//   return Number(String(number).split(".")[0]);
// };

// console.log(round(1));
// console.log(ceil(0));
// console.log(floor(1));

/* ------------------------------------ */

// function ipsBetween(start, end) {
//   const [x1, y1, z1, t1] = start.split(".").map((el) => +el);
//   const [x2, y2, z2, t2] = end.split(".").map((el) => +el);

//   return (
//     (x2 - x1) * 2 ** 24 + (y2 - y1) * 2 ** 16 + (z2 - z1) * 2 ** 8 + (t2 - t1)
//   );
// }

// console.log(ipsBetween("50.0.0.0", "50.1.1.1"));

/* ------------------------------------ */

// const isShuffled = (a, b) => {
//   return (
//     String(a).split("").sort().join("") === String(b).split("").sort().join("")
//   );
// };

// function nextSmaller(n) {
//   let res = n - 1;

//   if (n === +String(n).split("").sort().join("")) return -1;

//   while (!isShuffled(res, n)) {
//     if (String(res).length < String(n).length) return -1;
//     --res;
//   }

//   return res || -1;
// }

// console.log(nextSmaller(9199999));

/* ------------------------------------ */

// const squirrel = (h, H, S) => {
//   return +((1 + (S / h) ** 2) ** 0.5 * H).toFixed(4);
// };

// console.log(squirrel(8, 9, 37));

/* ------------------------------------ */

// const getOperands = (expression) => {
//   let a = expression.slice(
//     0,
//     expression.lastIndexOf("+") > 0
//       ? expression.lastIndexOf("+")
//       : expression.lastIndexOf("-")
//   );
//   let b = expression.slice(expression.indexOf(a) + a.length);
//   let koef = a.slice(a.length - 1);
//   a =
//     a.slice(0, -1) === ""
//       ? "+1"
//       : a.slice(0, -1) === "-"
//       ? "-1"
//       : a.slice(0, -1);

//   return { a, b, koef };
// };

// const factorial = (n) => {
//   let res = 1;

//   for (let i = 1; i <= n; i++) {
//     res *= i;
//   }

//   return res;
// };

// const binominalKoef = (n, i) => {
//   return factorial(n) / (factorial(i) * factorial(n - i));
// };

// function expand(expr) {
//   const [sum, n] = expr.split("^");
//   const expression = sum.slice(1, -1);
//   let res = "";

//   const { a, b, koef } = getOperands(expression);

//   for (let i = 0; i <= n; i++) {
//     let k = String(Math.pow(+a, n - i) * Math.pow(+b, i) * binominalKoef(n, i));
//     const x = n - i === 1 ? koef : n - i === 0 ? "" : `${koef}^${n - i}`;
//     k = k === "1" && x !== "" ? "" : k;

//     if (k === "0") continue;

//     const operand = k === "-1" && i !== +n ? "-" + x : k + x;

//     if (!operand.startsWith("-") && i) {
//       res += "+" + operand;
//     } else {
//       res += operand;
//     }
//   }

//   return res;
// }

// console.log(expand("(x+1)^2"));

/* --------------------------- */

// function topThreeWords(text) {
//   const obj = {};

//   const wordList = text
//     .replace(/[\.,\n]/g, "")
//     .split(" ")
//     .filter((word) => word !== " " && word !== "");

//   wordList.forEach((word) => {
//     if (word.toLowerCase() in obj) {
//       obj[word.toLowerCase()] += 1;
//     } else {
//       obj[word.toLowerCase()] = 1;
//     }
//   });

//   return Object.entries(obj)
//     .sort((a, b) => b[1] - a[1])
//     .map((entry) => entry[0])
//     .slice(0, 3);
// }

// console.log(
//   topThreeWords(`e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e`)
// );

/* ---------------------------- */

// const compareNumsLength = (a, b) => {
//   if (a.length >= b.length) return [a, b];
//   return [b, a];
// };

// const removeFirstZeros = (num) => {
//   return num.replace(/^0*/g, "")
// }

// function add(a, b) {
//   const [longer, shorter] = compareNumsLength(a, b);
//   let extra = 0;
//   let res = [];

//   for (
//     let i = longer.length - 1, j = shorter.length - 1;
//     i >= 0;
//     i -= 1, j -= 1
//   ) {
//     const a = Number(longer[i]);
//     const b = Number(shorter[j]) || 0;

//     const sum = a + b + extra;

//     if (sum >= 10 && i) {
//       res.unshift(sum.toString()[1]);
//       extra = 1;
//     } else {
//       res.unshift(sum);
//       extra = 0;
//     }
//   }

//   return removeFirstZeroz(res.join(""));
// }

/* ----------------------- */

// const filterArr = (arr) => {
//   const res = [];

//   arr.forEach((element) => {
//     if (typeof element === "object" && element !== null) {
//       res.push(compactObject(element));
//     } else {
//       element && res.push(element);
//     }
//   });

//   return res;
// };

// function compactObject(obj) {
//   if (Array.isArray(obj)) {
//     return filterArr(obj);
//   }

//   let res = {};

//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       const element = obj[key];

//       if (!element) continue;

//       if (Array.isArray(element)) {
//         res[key] = filterArr(element);
//       } else {
//         if (typeof element === "object") {
//           res[key] = compactObject(element);
//         } else {
//           res[key] = element;
//         }
//       }
//     }
//   }

//   return res;
// }

// console.log(compactObject([{ e: null, b: 1 }]));

/* --------------------- */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// const multiply = (nums) => {
//   if (!nums.length) return 0;
//   return nums.reduce((res, val) => res * val);
// };

// const maxStrength = function (nums) {
//   if (nums.length === 1 && nums[0] < 0) {
//     return nums[0];
//   }

//   nums = nums.filter((num) => num !== 0);
//   let maxNegative = { value: null, index: null };

//   const negativeCount = nums.reduce((count, value, index) => {
//     if (
//       value < 0 &&
//       (value > maxNegative.value || maxNegative.value === null)
//     ) {
//       maxNegative.value = value;
//       maxNegative.index = index;
//     }

//     return value < 0 ? count + 1 : count;
//   }, 0);

//   if (negativeCount % 2 === 0) {
//     return multiply(nums);
//   }

//   nums = nums.filter((_, index) => index !== maxNegative.index);
//   return multiply(nums);
// };

// console.log(maxStrength([-9, 0]));
