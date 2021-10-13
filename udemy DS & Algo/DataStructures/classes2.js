// # Instantiation type

class Player {
    constructor(name, type) {
        console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeeeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("shelly", "Healer");
const wizard2 = new Wizard("shawn", "Dark-Magic");
console.log(wizard1);
console.log(wizard2);
