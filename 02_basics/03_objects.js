//   OBJECT LITERAL:-
const mysym = Symbol("key1");
const JSuser = {
    // it is taking all key as string 
    name:"Yashasvi",
    "full name":"YASHASVI SAKSHI",
     [mysym]: "mykey1",
    age:20,
    location:"Greater Noida",
    email:"yashasvisakshiadobe@gmail.com",
    // no " " around false
    isloggedin:false,
    lastsignedin: ["Monday","Friday"]


};
// console.log( typeof mysym);
// console.log(JSuser["name"]);
// console.log(JSuser["full name"]);
// JSuser.email = "yashasvisakshiBNY@gmail.com";
// console.log(JSuser);
// Object.freeze(JSuser);
// JSuser.email = "yashasvisakshiIntuit@gmail.com";
// console.log(JSuser);
JSuser.Greeting = function(){
    console.log(`Hello everyone! my name is ${this.name}`);
}
console.log(JSuser.Greeting());