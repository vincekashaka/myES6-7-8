function add(a,b=6){
    return a+b;
}


console.log(add(4,2));
console.log(add(4));

const entry =   function(name, entryDate = new Date()){
    console.log(`Date of entry ${entryDate.getFullYear()}`);
}

entry('Vincent', new Date(2022-10-20));
entry('Vin Kays');