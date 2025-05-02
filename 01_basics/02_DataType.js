console.log("1:", typeof 42);
console.log("2.i:", "42" == 42);
console.log("2.ii:", "42" === 42);
let x;
console.log("3.i:", typeof x);
console.log("3.ii:", typeof null);
console.log("4.i:", Boolean(0));
console.log("4.ii:", Boolean(" "));
console.log("4.iii:", Boolean(null));
console.log("5:", typeof NaN);
console.log("6.i:", typeof [1, 2, 3]);
console.log("6.ii:", typeof {a: 1});
console.log("7.i:", typeof Infinity);
console.log("7.ii:", 1 / 0);
console.log("7.iii:", -1 / 0);
const sym = Symbol("id");
console.log("8:", typeof sym);
function greet() {
  return "Hello!";
}
console.log("9:", typeof greet);
const bigNum = 123456789012345678901234567890n;
console.log("10:", typeof bigNum);
