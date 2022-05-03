const personalInfo = {
    name:'Vincent',
    lname: 'Kayz',
    email: 'vincekay@gmail.com',
    phone:32467575686
}

/*
duplication

const firstname = personalInfo.name;
const lname = personalInfo.lname;

console.log(firstname);
console.log(lname);

const {name:n, lname:ln, email:em} = personalInfo;
console.log(`My name is ${n} ${ln} and my email is ${em}`);

*/



//Array destructuring

const displayInfo = () =>{
 return ['Vincent', 'Kashaka', 'vincekayz@gmail.com'];

}

let [name,lname] = displayInfo();
console.log(`My name is ${name} ${lname}` );