const arr = [1,2,3,4,5];
const myheros = ["shaktimaan","balveer","chhota bheem","mighty raju"];
console.log(myheros[3]);
//array methods
//to add element into array
arr.push(6);
arr.push(7);
// to remove last element of array
arr.pop();
// to add elemnt in beginning
arr.unshift(9);
//to remove firts element from array,no need to state any number
arr.shift(); 
console.log(arr);
console.log(arr.includes(6));
console.log(arr.indexOf(9));

//love babbar:-
let obj ={
    Name:"Yashasvi",
    age:20,
    weight: 70,
    height:"5ft 7in",
    greet:function(){
        console.log("hi");
    }
}