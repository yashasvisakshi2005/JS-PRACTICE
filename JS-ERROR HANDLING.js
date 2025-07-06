//error handling 
try{
    console.log("YOUR TRY BLOCK STARTS HERE");
    console.log(x);
    console.log("i am inside try")
}
catch(e){
    console.log("I AM IN CATCH BLOCK");
    console.log("YOUR ERROR STARTS HERE + "+ e );
}
//error handling with finally
try{
    console.log(" i  am inside try block ");
    //reference error
    console.log(x);
    console.log("I AM NOT GOING TO EXECUTE");
}
catch(e){
    console.log("I AM INSIDE ERROR BLOCK");
    console.log("YOUR ERROR IS " + e);
    
}
finally{
    console.log("I WILL BE EXECUTED WHATEVER HAPPENS");
}
//error handling with customization
try{
    
    //reference error
    console.log(x);
    console.log("I AM NOT GOING TO EXECUTE");
}
catch(e){
   throw new error("BHAI PAHLE DECLARE TOH KAR LE AKAL KE ANDHE");
    
}
finally{
    console.log("I WILL BE EXECUTED WHATEVER HAPPENS");
}

