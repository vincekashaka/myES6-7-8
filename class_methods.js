class Dispaly{
    constructor(name){
        this.name = name;
    }

    greeting() {
        console.log(`wellcome : ${this.name}`);
    }
}

let myname = new Dispaly("Vince");
console.log(myname);

 console.log(myname.greeting())