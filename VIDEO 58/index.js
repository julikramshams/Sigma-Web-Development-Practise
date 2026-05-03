function shams(name) {
  console.log("Hey " + name + ", U are nice");
  console.log("Hey " + name + ", U are good");
  console.log("Hey " + name + ", Ur course is nice");
  console.log("Hey " + name + ", U are a good programmer");
}

shams("Nidhi"); 
console.log()
shams("Shams"); 
console.log()


// function sum(a , b, c = 3) {
function sum(a , b) {
  // console.log(a + b)
  // return a + b + c;
  return a + b ;
}

result1 = sum(34, 35);
result2= sum(382, 38);
result3 = sum(490, 31);
// result3 = sum(490, 31, 3);

console.log("The sum of these number are: " + result1);
console.log("The sum of these number are: " + result2);
console.log("The sum of these number are: " + result3);


const func1 = (x) => {
  console.log("I am an arrow function number: " + x)
}

func1(69)
func1(512)
func1(420)