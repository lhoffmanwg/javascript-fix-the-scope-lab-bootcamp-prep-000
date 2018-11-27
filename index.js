function myAnimal() {
  var animal = "dog";
  return animal;
}

function yourAnimal() {
  var animal = "cat";
  return animal;
}

function add2(n) {
  n = n += 2;
  return n;
}

function funkyFunction() {
  return function() {
  return "FUNKY!";  
  }
  
}

var theFunk = funkyFunction()();