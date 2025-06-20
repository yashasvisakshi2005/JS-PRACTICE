const myera = ["doraemon","ninja hattori","oggy","mickey mouse"]

const didiera = ["oswald","thomas and friends","mr.bean","shaktimaan"]

// const all_cartoon = myera.concat(didiera);
// console.log(all_cartoon);

// WE HAVE USED SPREAD OPERATOR HERE:-
const all_cartoons = [...myera,...didiera]
console.log(all_cartoons);

// FLAT METHOD:-
const arr_2 =[1,2,3,[4,5,[6,7,[8]]]]
const arr_2_simplified = arr_2.flat(3);
console.log(arr_2_simplified);

// TO CHECK WHETHER GIVEN DATA IS ARRAY OR NOT
console.log(Array.isArray("RESHU"));

// TO TRANSFORM TO ARRAY M1
console.log(Array.from("RESHU"));
// TO TRANSFORM TO ARRAY M2
const s1 = 100;
const s2 = 200;
const s3 = 300;
console.log(Array.of(s1,s2,s3));

//INTERESTING CASE

console.log(Array.from({name:"YASHASVI"}));
// TO GET BOTH
console.log(Object.entries({name:"Yashasvi"}));
//TO GET KEY
console.log(Object.keys({name:"Yashasvi"}));
//TO GET VALUES
console.log(Object.values({name:"Yashasvi"}));
let arr = [10,20,30];
arr.map((number)=>{
    console.log(number+1);
})
let arr = [10,20,30];
arr.map((number,index)=>{
    console.log(index);
    console.log(number);
})