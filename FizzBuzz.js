// Loop for 1 to 100 

for (let i = 1; i <= 100; i++) {
    // Check is the number is divisible by 15 .....FizzBuzz
    if (i % 15 == 0) console.log ("FizzBuzz");
    //If not check if divisible by 3....Fizz
    else if (i % 3 == 0) console.log ("Fizz");
    //If not check if divisible by 5....Fizz
    else if (i % 5 == 0) console.log ("Buzz");
    //If not number
    else console.log(i)
}