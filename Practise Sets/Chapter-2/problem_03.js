let number = 12;

if(number%2 == 0 && number%3 == 0){
    console.log("This number is divisible by both 2 and 3")
}

else if (number%2 == 0){
    console.log("This number is divisible by 2")
}

else if (number%3 == 0){
    console.log("This number is divisible by 3")
}

else{
    console.log("This number is not divisible by both 2 and 3")
}