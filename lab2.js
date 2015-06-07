'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var hoursSpentInDowington = 45; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

function Blob() {}
Blob.prototype.hoursToOoze = hoursToOoze;

var blob = new Blob();

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var currentPopulation = population;
  var currentHour = 0;

  while (currentPopulation > 0) {
    currentHour++;
    var consumed = (currentHour * peoplePerHour);
    currentPopulation -= consumed;
    //console.log(currentHour+"   "+currentPopulation+"   "+cunsumed);
  }
  return currentHour;
}

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
//console.log(blob.hoursToOoze(1000, 5));
//console.log(blob.hoursToOoze(10000, 3));
//console.log(blob.hoursToOoze(15000, 6));

assert(blob.hoursToOoze(1000, 5) === 20, 'Should match hoursToOoze\'s result for 1000 with 5 peoplePerHour increament');
assert(blob.hoursToOoze(10000, 3) === 82, 'Should match hoursToOoze\'s result for 10000 with 3 peoplePerHour increament');
assert(blob.hoursToOoze(15000, 6) === 71, 'Should match hoursToOoze\'s result for 15000 with 6 peoplePerHour increament');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(home, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.home = home;
  this.language = language;
}

SentientBeing.prototype.sayHello = sayHello;

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //console.log("Speaker: " + hello[this.language] + "  Listener:" + hello[sb.language]);
    console.log('Speaker: ' + hello[this.language]);
    return hello[sb.language];

    //TODO: put this on the SentientBeing prototype
  }

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');

function Klingon() {}
Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');

function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

//console.log((new Human()).sayHello(new Romulan()));
//console.log((new Human()).sayHello(new Klingon()));

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the Romulan should hear Jolan\'tru');

assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the Human should hear hello');

assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the Romulan should hear Jolan\'tru');

assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the Human should hear hello');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************
var myStringArray = ['strawberry', 'apple', 'watermelon', 'papaya'];
var myString2Array = ['Zombie', 'Creeper', 'Enderman', 'Skelenton'];
var myNumberArray1 = [20, 5, 45];
var myNumberArray2 = [80, 10, 18];
var myNumberArray3 = [50, 21, 42];
var numList1Array = [myNumberArray3, myNumberArray2, myNumberArray1];
var numList2Array = [myNumberArray2, myNumberArray3, myNumberArray1];

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    var aLength = a.length;
    var bLength = b.length;

    if (a.charAt((aLength - 1)) < b.charAt((bLength - 1))) {
      return -1;
    }
    if (a.charAt((aLength - 1)) > b.charAt((bLength - 1))) {
      return 1;
    }
    return 0;
  }

  return stringArray.sort(byLastLetter);
}

//lastLetterSort(myStringArray);
//lastLetterSort(myString2Array);

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  function sumOfElements(element) {
    sum += element;
  }

  numberArray.forEach(sumOfElements);

  return sum;
}

//console.log(sumArray(myNumberArray1));
//console.log(sumArray(myNumberArray2));
//console.log(sumArray(myNumberArray3));

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item1, item2) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    //console.log(item1 +"   "+ item2)
    if (sumArray(item1) <  sumArray(item2)) {
      return -1;
    }
    if (sumArray(item1) > sumArray(item2)) {
      return 1;
    }
    return 0;
  });
  return arrayOfArrays;
}

//console.log("1: " + sumSort(numList1Array));
//console.log("2: " + sumSort(numList2Array));

//Not sure this is the right way to compare arrays but only way I knew I could get it to work.
assert(lastLetterSort(myStringArray).toString() === 'papaya,apple,watermelon,strawberry',
  'myStringArray is not sorted alphabeticaly by the laster letter ');

assert(lastLetterSort(myString2Array).toString() === 'Zombie,Enderman,Skelenton,Creeper',
  'myString2Array is not sorted alphabeticaly by the laster letter ');

//sumArray Tests
assert(sumArray(myNumberArray1) === 70, 'myNumberArray1 sum value is incorrect');

assert(sumArray(myNumberArray2) === 108, 'myNumberArray2 sum value is incorrect');

assert(sumArray(myNumberArray3) === 113, 'myNumberArray2 sum value is incorrect');

//sumSort tests

assert(sumSort(numList1Array).toString() === '20,5,45,80,10,18,50,21,42', 'numList1Array is not sorted correctly');

assert(sumSort(numList2Array).toString() === '20,5,45,80,10,18,50,21,42', 'numList2Array is not sorted correctly');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
