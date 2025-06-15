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