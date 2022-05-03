/*function myNumbers(...nums){
    console.log(nums);
}
myNumbers(2,3,4,5,6);
*/

//Spread Operator
// let a = [1,2,3,4,5];
// let b= [6,7,8,9];
// let c = [...a, ...b];

// console.log(c);



let obj1 = {
    name: 'Vincent',
    lastname: 'Kashaka'
};

let obj2 ={
    email: 'vincekas@gmail.com',
    phone: 0696678,
    ...obj1
}

console.log(obj2);