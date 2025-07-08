// //   OBJECT LITERAL:-
// const mysym = Symbol("key1");
// const JSuser = {
//     // it is taking all key as string 
//     name:"Yashasvi",
//     "full name":"YASHASVI SAKSHI",
//      [mysym]: "mykey1",
//     age:20,
//     location:"Greater Noida",
//     email:"yashasvisakshiadobe@gmail.com",
//     // no " " around false
//     isloggedin:false,
//     lastsignedin: ["Monday","Friday"]


// };
// // console.log( typeof mysym);
// // console.log(JSuser["name"]);
// // console.log(JSuser["full name"]);
// // JSuser.email = "yashasvisakshiBNY@gmail.com";
// // console.log(JSuser);
// // Object.freeze(JSuser);
// // JSuser.email = "yashasvisakshiIntuit@gmail.com";
// // console.log(JSuser);
// // JSuser.Greeting = function(){
// //     console.log(`Hello everyone! my name is ${this.name}`);
// // }
// // console.log(JSuser.Greeting());
// let obj ={
//     name:"yashasvi"
//     age:20,
//     Location:"Greater Noida",
// };
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// let obj ={
//     name:"yashasvi",
//     age: 20,
//     Location:"Greater Noida",
// };
//object destructure
// const user ={
//     name:"yash",
//     age:20,
//     address:{
//         city:"Up",
//         lat:34.5,
//         lng:40.5,
//         pincode:201306,
//     }
// };
// let {lng,lat,pincode}=user.address;
// console.log(lng);
// console.log(lat);
// console.log(pincode);
//ob1
// let role="admin";
let user ={
    name:"yashasvi",
    age:20,
    uni:"ggsipu",
    location:{
        city:"up",
        district:"pari chowk",
        pincode:201306,
        
    },
    // [role]:"student",
}
// for(let key in  user){
//     console.log(key,user[key]);
// }
//properties in array
console.log(Object.entries(user));
//good for clonign but not for nested
// let obj = {...user};
// //for nested 
// let obj1 = JSON.parse(JSON.stringify(user));
//  obj.location.city="delhi";
// console.log(obj);
// console.log(user);
// let obj ={
//     name:"yashavsi",
//     age:20,
//     isenrol:true,
// };
//obj can have key integer or boolean
// const user ={
//     "first-name":"yash",
// };
// let{"first-name":firstname}=user;
// console.log(firstname);
//with use of obj?.location?.city we can check whether that particular property is present or not , if not present then undefined





