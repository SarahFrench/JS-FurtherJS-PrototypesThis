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
      console.log(`${this.name} the ${this.species} was fed and isn't hungry anymore!`);
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


const animalCreator = {
    createAnimal: function(name, speciesName, animalType) {
        const animal = Object.create(animalType);
        animal.type = animalType;
        animal.init(name, speciesName);
        return animal;
    },

    createZebra: function (name) {
      const zebra = Object.create(herbivore);
      zebra.type = "herbivore";
      zebra.init(name, "zebra");
      return zebra;
    },

    createChinchilla: function (name) {
      const chinchilla = Object.create(herbivore);
      chinchilla.type = "herbivore";
      chinchilla.init(name, "chinchilla");
      return chinchilla;
    },

    createLion: function (name) {
      const lion = Object.create(carnivore);
      lion.type = "carnivore";
      lion.init(name, "lion");
      return lion;
    },

    createFerret: function (name) {
      const ferret = Object.create(carnivore);
      ferret.type = "carnivore";
      ferret.init(name, "ferret");
      return ferret;
    }
};




let zebra = animalCreator.createZebra("Zack");
let ferret = animalCreator.createFerret("Fiona");

zebra.hunger = 50;
zebra.feedHerbivoreFood()
