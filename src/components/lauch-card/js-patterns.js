// == FACTORY == \\

class IceCreamFactory {
  constructor() {
    this.createIceCream = function (flavour) {
      let iceCream;

      if (flavour === 'chocolate') {
        iceCream = new Chocolate();
      }

      if (flavour === 'cream') {
        iceCream = new Cream();
      }
      return iceCream;
    };
  }
}

class Chocolate {
  constructor() {
    this.icecreamFlavour = 'chocolate';
    this.message = function () {
      return `icecream is ${this.icecreamFlavour}`;
    };
  }
}

const iceCreamFactory = new IceCreamFactory();

const chocolate = iceCreamFactory.createIceCream('chocolate');

console.log(chocolate.message());

// == CONSTRUCTOR == \\

function Human(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;

  this.describe = function () {
    console.log(`${this.name} - ${this.age} - ${this.occupation}`);
  };
}

const mario = new Human('mario', 5, 'developer');

mario.describe();
