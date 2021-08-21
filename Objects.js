`OBJECTS IN JS`
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;      
testObj.shirt = "CaroCaro"
var shirtValue = testObj["shirt"];    

console.log(hatValue)
console.log(shirtValue)



// Add property to JS objects
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

myDog.bark = "woof";
console.log(myDog);


// Delete property from JS Object
delete myDog.bark;
console.log(myDog);


