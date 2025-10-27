/* Tehtävä 1 */
function addNumbers(a, b){
    return a+b;
}


/* Tehtävä 2 */
function printMessage(message){
    console.log(message)
}
printMessage("moi");


/*Tehtävä 3 */

for (let i = 0; i < 5; i++){
    console.log(i)
}

/* Tehtävä 4 */
const num1 = 5
const num2 = "3"
const sum = num1 + parseInt(num2)
console.log(sum)


/* Tehtävä 5 */
function divideNumbers(a, b){
   if (b === 0){
    throw new Error("Division by zero.")
   } 
   return a / b
}
try {
    const result = divideNumbers(10,2)
    console.log(result)
}
catch (error){
    console.log(error.message)
}



/* Tehtävä 6 */
let count = 0;
while (count < 5){
    console.log(count);
    count ++;
}


/* Tehtävä 7 */
for (let i = 0; i < 5; i++){
    console.log(i)
}


/* Tehtävä 8 */
const message = "Hello, world!";
console.log(message);


/* Tehtävä 9 */
function greet(name){
    console.log("Hello, " + name);

}
greet("Alice")



/* Tehtävä 10 */
const numbers = [1, 2, 3];
console.log(numbers[2]);


/* Tehtävä 11 */
const person = { 
    name: "Alice", 
    age: 30,
    address:
    {
        street: "123 Main St",
        city: "Anytown",
    },
};
console.log(person.address.street)


/* Tehtävä 12 */
function add(a, b){
    const result = a + b;
    return result
}
const sum = add(3,4);
console.log(sum)


/* Tehtävä 13 */
const temperature = 25;
console.log(temperature)


/* Tehtävä 14 */
const y = 5;
console.log(y);


/* Tehtävä 15 */
function greet(name){
    console.log("Hello, " + name);
    console.log("Goodbye, " + name)
}
greet("Alice")



/* Tehtävä 16 */
const day = "Monday"
switch (day)
{
    case "Monday":
        console.log("Its Monday.")
        break
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday.")
        break;
    default:
        console.log("It's another day");
}


/* Tehtävä 17 */
const x = 10;
if (x == 5){
    console.log("x is equal to 5.")
} else {
    console.log("x is not wqual to 5.")
}


/* Tehtävä 18 */
function multiply(a, b){
    return a * b;
}
const result = multiply(3,4)
console.log(result)


/* Tehtävä 19 */
const numbers = [1, 2, 3];
for (let i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i])
}


/* Tehtävä 20 */
const person = {name: "Bob", age: 20}
console.log(person.age)
