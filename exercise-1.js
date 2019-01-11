const animal = {
  name : "name",
  species : "species",
  hunger : 0,

  init : function (name, species){
    this.name = name;
    this.species = species;
  },

  isHungry : function (){
    if (this.hunger > 0){
      console.log(`${this.name} the ${this.species} is hungry!`);
      return true;
    } else if (this.hunger === 0){
      console.log(`${this.name} the ${this.species} is full!`);
      return false;
    }
  },

  feed : function () {
    if (this.hunger === 0){
      console.log(`${this.name} the ${this.species} isn't hungry!`);
    } else if (this.hunger > 0) {
      console.log(`${this.name} the ${this.species} ate and isn't hungry anymore!`);
      this.hunger = 0;
    }
  }
}

const herbivore = Object.create(animal);
herbivore.feedHerbivoreFood = function(food) {
  if(!this.isHungry()){
    this.feed();
  } else {
    this.feed();
    zoo.spend(200);
  }
}

const carnivore = Object.create(animal);
carnivore.feedCarnivoreFood = function(food) {
  if(!this.isHungry()){
    this.feed();
  } else {
    this.feed();
    zoo.spend(500);
  }
}

const zoo = {
    cash: 4000,
    spend: function (amount) {
        if (this.cash < amount) {
            throw "Not enough money!";
        }
        this.cash -= amount;
        console.log(`Remaining funds: ${this.cash}`);
    }
};


let zebra = herbivore;
zebra.init("Zack", "zebra");
zebra.hunger = 100;
zebra.feedHerbivoreFood()
