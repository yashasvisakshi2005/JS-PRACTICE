// Q1 array-foreach map filter
var a = [1,2,3,4]
a.forEach(function(val){
    console.log(val+2+", Hello");
})
//Q2
for(var i=0;i<4;i++){
    if(a[i]>2){
    console.log(a[i]);
    }
}
//Q3
var sum = 0;
for(var i=0;i<4;i++){
    sum=sum+a[i];
}
console.log(sum);
//Q4 
var sum = 0;
a.forEach(function(val){
    if(typeof val === "number")
        sum = sum+val;
})
//Q5 
console.log("1");
console.log("2");
console.log("3");
setTimeout(function(){
    console.log("4");
},5000);
console.log("5");
console.log(Math.PI);


// console.log(Math.PI);
// console.log(Math.min(60,30,24,600,712,89));
// console.log(Math.max(60,30,24,600,712,89));
// console.log(Math.round(1.8)); 
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.9));
// console.log(Math.abs(-5));
// console.log(Math.random());
// console.log(Math.sqrt(26));
let curr = new Date('Sept 27 2005 6:45'); 
console.log(curr);
/ console.log(curr);
// let obj ={
//     age:12,
//     wt:72,
//     ht:168
// };
// console.log(obj);
// obj.color = 'white';
// console.log(obj)
let obj ={
    age:20,
    wt:72,
    ht:170,
}
let src ={...obj}
// console.log(src);
src.age =90;
console.log(src);
console.log(obj);
// src.age =90;
let src2={
    name:'yashasvi',
    state:'jharkhand',
}

let dest = Object.assign({},src,src2);
console.log(dest);
src.age =90;  
console.log(src);