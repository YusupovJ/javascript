/* Объект Math */

// round - округление                                                                                           Math.round(x)

// ceil - округление в большую сторону                                                                          Math.ceil(x)

// floor - округление в меньшую сторону                                                                         Math.floor(x);

// pow - возведение в степень                                                                                   Math.pow(x, n);

// min - возвращает минимальное чилсо                                                                           Math.min(x, x1, x2, xn);

// max - возвращает максимальное чилсо                                                                          Math.min(x, x1, x2, xn);

// sqrt - квадратный корень                                                                                     Math.sqrt(x);

// cbrt - кубический корень                                                                                     Math.cbrt(x);

// random - возвращает рандомное число от 0 до 1                                                                Math.random() * x;       // x - число от 0 до x

/* Методы чисел */

// parseInt - переводит в целое число                                                                           parseInt(x);

// parseFloat - переводит в дробное число                                                                       parseFloat(x);

// toFixed - из числа в строку и пишет x количество чисел после точки                                           var.toFixed(x);

// isInteger - проверяет целое ли это число                                                                     Number.isInteger(x);

// isFinite - преверяет число ли это                                                                            Number.isFinite(x);

/*==============================================================================================*/

/* Урок 3 */

/* Методы строк */

// length - возвращает длину строки																				str.length;

// indexOf - возвращает индекс указанной части строки, вторым аргументом дается с какого индекса начинать,
// если строка не найдена то возвращаеться -1																	str.indexOf("o", 3);

// lastIndexOf - работает как lastIndexOf, но возвращает последний индекс найденного элемента					str.lastIndexOf("0", 4);

// slice - возвращает отрезок от указанного индекса, до указанного индекса не включая,
// можно указывать отрицательные значения, тогда отчет индексов начнеться с конца,
// если не указать второй параметр то вернеться с указанного индекса до конца									str.slice(2, -1);

// substring - работает как slice, но не принимает отрицательные значения, но можно сначала
// задавать индекс больше, а потом меньше																		str.substring(7, 2);

// substr - указываеться начальный индекс, а потом сколько индексов состоит вернуть,
// если не указать второй параметр то вернеться с указанного индекса до конца (depricated)						str.substr(0, 5);

// toLowerCase - вернет строку в нижнем регистре																str.toLowerCase();

// toUpperCase - вернет строку в верхнем регистре																str.toUpperCase();

// search - работает как indexOf, но не может начинать с определенного индекса,
// чтобы игнорировать регистр стоит писать с регулярным выражением i         									str.search("o");

// includes - возвращает true либо false, если в строке содержиться указанная строка							str.includes("o");

// repeat - возвращает строку которая повторилась определенное количество раз									str.repeat(3);

// replace - возвращает замененнную строку, первым аргементом указываеться что хотим заменит,
// а вторым на что хотим заменить																				str.replace("jasur", "mardon");

// split - превращает строку в массив, ключи появляються через определенный разделитель							str.splice(",");

// match - находит в строке определенную строку и засовывает его в массив, обычно пишется с regexp				str.match("slovo");

// charAt - возвращает символ по указанному индексу																str.charAt(2);

// charCodeAt - возвращает символ по указанному индексу и преобразует его в ascii code							str.charCodeAt(2);

// concat - соеденяет строку с указанной строкой																str.concat("some string");

// trim - убирает пробелы по сторонам строки																	str.trim();

// trimStart, trimEnd - убирает пробелы с начала и с конца соответсвенно										str.trimStart(); str.trimEnd();

// startsWith - возвращает true, если строка начинаеться с указанного символа, иначе false 						str.startsWith("qwerty");

// endsWith - возвращает true, если строка заканчиваеться указанным символом, иначе false 						str.endsWith("qwerty");

// toString - преобразует тип данных в строку																	str.toString();

/* Регулярные выражения */

// i - игнорирует разные регистры, применяеться например в методе search										/somestring/i
// g - будет брать все совпадения, применяеться например в методе match											/somestring/g

// можно также использовать их вместе, /somestring/gi или /somestring/ig

/* Switch Case */

// let day = 1;

// switch (day) {
//     case 1: console.log("Понедельник"); break;
//     case 2: console.log("Вторник"); break;
//     case 3: console.log("Среда"); break;
//     case 4: console.log("Четверг"); break;
//     case 5: console.log("Пятница"); break;
//     case 6: console.log("Суббота"); break;
//     case 7: console.log("Воскресенье"); break;
//     default: console.log("Такого дня нету");
// }

/*==============================================================================================*/

/* Конвертация типов данных */

// Implicit - автоматическая конвертация

// Explicit - ручная конвертация

// Falsy - 0, "", undefined, null, NaN, false - значения которые при конвертации
// в строку возвращают false, все кроме них возвращает true

/*==============================================================================================*/

/* Массивы */

// splice - видоизменяет массив, первым аргументом задаеться начальный индекс, вторым сколько элементов
// стоит удалить, также следующие аргументы вставляет значения в массив на указанный индекс,
// можно задавать отрицательные значения                                                                        arr.splice(1, 2, "addedVaue", "addedValue2");

// slice - работает как в строках                                                                               arr.slice(1, 4);

// indexOf - работает как в строках                                                                             arr.indexOf("value", 2);

// lastIndexOf - работает как в строках                                                                         arr.lastIndexOf("value", 2);

// length - возвращает длину массива, можно присваивать числовое значение,
// тогда длина измениться на указанное значение                                                                 arr.length = 2

// reverse - переворачивает массив                                                                              arr.reverse();

// join - преобразует массив в строку с определенным указателем                                                 arr.join(";");

// sort - сортирует массив по ascii коду, чтобы сортировал цифры нужно передать cb функцию -
// (a, b) => a - b; в аргументы метода                                                                          arr.sort(cb);

// push - добавляет новые значения в конец массива                                                              arr.push("value", "value2");

// pop - удаляет последний элемент из массива                                                                   arr.pop();

// unshift - добавляет элементы в начало массива                                                                arr.unshift("value", "value2");

// shift - удаляет первый элемент из массива                                                                    arr.shift();

// concat - соеденяет два массива или добавляет отдельные значения в конец массива                              arr.concat([1, 2, 3]);

// includes - если найдено значение то возвращает true, иначе false                                             arr.include(2);

// toString или String() - преобразует массив в строку через ","                                                arr.toString(); String(arr);

// fill - заменяет значение от одного индекса до другого индекса не включая                                     arr.fill("value", 1, 3);

// В следующих методах передается cb функция в аргументы
// передаеться три аргумента(можно задавать разные имена, но порядок менять нельзя):
// 1.item - ссылаеться на каждое значение в массиве
// 2.index - ссылаеться на каждый индекс в массиве
// 3.array - ссылаеться на массив

// find - возвращает первое попавшее значение                                                                   arr.find((item, index, array) => item === "somevalue");

// findIndex - возвращает индекс первого попавшего значения                                                     arr.findIndex((item, index, array) => item === "somevalue");

// filter - возвращает отфильтрованный массив                                                                   arr.filter((item, index, array) => item >= 5);

// map - возвращает преобразованный массив                                                                      arr.map((item, index, array) => item[0].toLowerCase);

// some - возвращает true, если есть одно или больше удовлетворивших условие значения, иначе false              arr.some((item, index, array) => item <= 3);

// every - возвращает true, если все значения удовлетворили условие, иначе false                                arr.every((item, index, array) => index < 4);

// reduce - перебирает массив но имеет еще один аргумент в cb функции это previousValue, то есть
// возвращенное значение на прошлой итерации, у reduce есть второй аргумент задающий
// значение previousValue на первой итерации, если его не задать, то previousValue будет равен
// 0 индексу, а value будет равняться 1 индексу                                                                 arr.reduce((previousValue, value, index, array) => previousValue + value, 0);

// reduceRight - работает как reduce на перебирает массив задом на перед                                        arr.reduceRight((previousValue, value, index, array) => value));

// forEach - перебирает массив как for loop, ничего особенного                                                  arr.forEach((value, index, array) => console.log(value, index))

/*==============================================================================================*/

/* Promises */

// function getInfo(users) {
// 	console.log("Получение данных с сервера...");

// 	const getData = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("Обработка данных...");
// 			resolve(users);
// 		}, 2000);
// 	});

// 	getData
// 		.then((data) => {
// 			setTimeout(() => {
// 				for (let i in data) {
// 					let obj = data[i];

// 					console.group(`Пользователь ${++i}:`);
// 					console.log(`Имя: ${obj.name}`);
// 					console.log(`Возраст: ${obj.age}`);
// 					console.groupEnd();
// 				}
// 			}, 2000);
// 		})
// 		.catch((err) => {
// 			console.log("Упс! Что-то пошло не так(");
// 		});
// }

// const users = [
// 	{ name: "Вася", age: 23 },
// 	{ name: "Андрей", age: 18 },
// 	{ name: "Лена", age: 30 },
// ];

// getInfo(users);

/*==============================================================================================*/

// Регулярные выражения

// . - любой одиночный символ
// [ ] - любой из них, диапазоны
// $ - конец строки
// ^ - начало строки
// \ - экранирование
// \d - любую цифру
// \D - все что угодно, кроме цифр
// \s - пробелы
// \S - все кроме пробелов
// \w - буква
// \W - все кроме букв
// \b - граница слова
// \B - не границ

// Квантификация
// n{4} - искать n подряд 4 раза
// n{4,6} - искать n от 4 до 6
// * от нуля и выше
// + от 1 и выше
// ? - нуль или 1 раз

/*==============================================================================================*/

// Ajax

// const xhr = new XMLHttpRequest() - вызов класса для работы с Ajax
// xhr.open(method, url) - открываем порты для начала работы
//      method - метод запроса, есть два основных метода "GET" и "POST"
//      url - адрес
// xhr.response - свойство в котором содержиться данные с сервера в JSON формате
// xhr.status - свойство в котором содержиться статус
// xhr.responseType = "json" - сразу переводит из json в js
// xhr.setRequestHeader - устанавливает заголовки
//      для отправки на сервер надо установить значение "Content-type", "application/json"
// xhr.send(body) - служит для отправки данных на сервер, обязательно надо писать в конце даже в get запросе

/* Для работы с данными полученные с сервера, надо поставить обработчики load и error*/

/*------------------------------------*/

/* GET запрос */

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.responseType = "json";

// xhr.addEventListener("load", (e) => {
// 	console.log(xhr.response);
// });
// xhr.addEventListener("error", (e) => {
// 	console.error("Ошибка");
// });

// xhr.send();

/*------------------------------------*/

/* POST запрос */

// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

// xhr.responseType = "json";
// xhr.setRequestHeader("Content-type", "application/json");

// xhr.addEventListener("load", (e) => {
// 	const data = xhr.response;
// 	console.log(data);
// });
// xhr.addEventListener("error", (e) => {
// 	console.error("Ошибка");
// });

// xhr.send(
// 	JSON.stringify({
// 		title: "Jamshud",
// 		body: "DA",
// 	}),
// );

/*==============================================================================================*/

// Fetch

// fetch(url, config) возвращает promise
//      url - адрес
//      config - настройки для пост запроса
// .json() - возвращает промис с данными в js формате
// .text() - возвращает промис с данными в json формате
// .ok - если все хорошо, то true, иначе false
// .status - определяет статус

// В config
// method - указваеться метод, по умолчанию get
// body - для отправки данных, надо перевести в JSON
// headers - объект для установки заголовков, тот же content-type

/*------------------------------------*/

/* GET запрос */

// const url = "https://jsonplaceholder.typicode.com/posts";

// const request = fetch(url).then((response) => response.json());
// request
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

/*------------------------------------*/

/* POST запрос */

// const url = "https://jsonplaceholder.typicode.com/posts";

// const request = fetch(url, {
// 	method: "POST",
// 	body: JSON.stringify({
// 		title: "Jamshud",
// 		body: "DA",
// 	}),
// 	headers: {
// 		"Content-type": "application/json",
// 	},
// }).then((response) => response.json());

// request
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

/*==============================================================================================*/

/* Set */

// Set - объект имеющий уникальные значения

// const set = new Set([1, 2, 3, 2, 1, 1, 12, 12, 1, 21, 2, 32, 3]); // - создаёт Set
// console.log(typeof set, set);

/*------------------------------------*/

/* Методы */
// size - длина Set
// add - добавляет элемент в Set
// delete - удаляет значение из Set
// has - проверяет, есть ли значение в Set

/*==============================================================================================*/

/* Генераторы */

// function* gen() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// const iter = gen();

// for (let n of iter) {
// 	console.log(n);
// }

/*------------------------------------*/

/* LinkedList */

// class Node {
// 	constructor(data, next = null) {
// 		this.data = data;
// 		this.next = next;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 	}

// 	append(data) {
// 		const node = new Node(data);

// 		if (!this.head) {
// 			this.head = node;
// 		}

// 		if (this.tail) {
// 			this.tail.next = node;
// 		}

// 		this.tail = node;
// 	}

// 	prepend(data) {
// 		const node = new Node(data, this.head);

// 		this.head = node;

// 		if (!this.tail) {
// 			this.tail = node;
// 		}
// 	}

// 	inserAfter(data, newData) {
// 		const found = this.find(data);

// 		if (!found) {
// 			return;
// 		}

// 		found.next = new Node(newData, found.next);
// 	}

// 	find(data) {
// 		let current = this.head;

// 		if (!current) {
// 			return;
// 		}

// 		while (current) {
// 			if (current.data === data) {
// 				return current;
// 			}

// 			current = current.next;
// 		}
// 	}

// 	toArray() {
// 		const output = [];
// 		let current = this.head;

// 		while (current) {
// 			output.push(current);
// 			current = current.next;
// 		}
// 		return output;
// 	}

// 	delete(data) {
// 		const found = this.find(data);

// 		found = found.next;
// 	}
// }

// const list = new LinkedList();

// list.append("1");
// list.append("2");
// list.append("3");
// list.append("4");
// list.append("5");

// list.inserAfter("2", "2.5");

// console.log(list.toArray());
