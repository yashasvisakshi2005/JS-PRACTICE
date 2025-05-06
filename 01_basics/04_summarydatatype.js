//primitive data type :- which are not mutable at all 
// 7 types:- null, number, string , symbol, object , boolean , bigint 
// non primitve - string ,object 
const square = 100 ;
const squarevalue = 10000;
const isloggedin = false;
const numb = null;
const id  = Symbol('123');
const anotherid = Symbol('123')
console.log(id==anotherid);
const bigint = 23456787654345n;
const heroes = ['katrina','yami','jitendra'];
let myobj = {
    name:'Yashasvi',
    class:'b',
}
const myfunc = function(){
    console.log("Hello,World!");
}
console.log(typeof(myfunc));