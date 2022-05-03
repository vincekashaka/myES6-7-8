class Display {
    constructor(name){
        this.name = name;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    
}

let display = new Display("Vince");
console.log(display);



















