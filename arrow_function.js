/*const display = (name) => console.log(`your are welcome ${name}`);

display("Vincent");


setTimeout (function(){
    console.log("Hello Function");
},2000)

*/

setTimeout(() => console.log('Hello Mr Nice Guy'),2000);


const factorial = (n) => {
    let product = 1;

    for(let i = 1; i <= n; i++){
        product *= i;
    }

    return product;
}
console.log(factorial(5));

const displayPower = (n, exp=2) => Math.pow(n, exp);


console.log(displayPower(2,3));
console.log(displayPower(2));

