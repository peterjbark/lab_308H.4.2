/////////////
// Easy Going
/////////////

// for(let i=1;i<=20;i++){
//     console.log(i);
// }

////////////
// Get Even
////////////

// for (let i=0; i<=200; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

/////////////
// Fizz Buzz
/////////////

// for (let i=1; i<=100; i++) {
//     if (i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz")
//       } else if(i%3 === 0 ){
//             console.log("Fizz")
//         } else if (i%5 === 0) {
//             console.log("Buzz") 
//         }  else {
//             console.log(i);
//          }
//        }
    
/////////////////
// Wild Wild Life
/////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant",  5000 , "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
// wolfy.shift();
// wolfy.unshift("Gameboy");
// wolfy.pop();
// wolfy.push("Gotham City");
// dart.push("Hawkins");
// plantee[2]=5001;

////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////

// const ninjas = ["Donatello","Leonardo","Raphael","Michaelangelo"];
// let upperCase ="";
// for (let x of ninjas){
//     console.log(x.toUpperCase());
// }

////////////////////
// Methods Revisited
////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 
'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
//Organized elements in favMovies alphabetically
favMovies.pop();
//Removed last element from favMovies
favMovies.push("Guardians of the Galaxy");
//Inserted "Guardians of the Galaxy as the last element"
favMovies.reverse();
//Reversed the order of the array
favMovies.shift();
//Removes the first element of the array
favMovies.unshift();
//Does not add an element
favMovies.splice(14,1, "Avatar");
//Replaces "Django" with "Avatar"
let sliced = favMovies.slice(9,18);
console.log(sliced);
//Logs the second half of the array into "sliced", does not alter original array

/////////////////
// Where is Waldo
/////////////////

/////////////////
// Excited Kitten
/////////////////

//////////////////
// Find the Median
//////////////////

///////////////////
// Hungry for More?
///////////////////

///////////////
// Alien Attire
///////////////

//////////////
// Dress Us Up
//////////////

//////////////// 
// Dirty Laundry 
////////////////

/////////////
// Inventory
///////////// 