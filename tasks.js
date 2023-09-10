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
