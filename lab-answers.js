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

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 
// 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
// 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 
// 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 
// 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf("Titanic"));
// favMovies.sort();
// //Organized elements in favMovies alphabetically
// favMovies.pop();
// //Removed last element from favMovies
// favMovies.push("Guardians of the Galaxy");
// //Inserted "Guardians of the Galaxy as the last element"
// favMovies.reverse();
// //Reversed the order of the array
// favMovies.shift();
// //Removes the first element of the array
// favMovies.unshift();
// //Does not add an element
// favMovies.splice(14,1, "Avatar");
// //Replaces "Django" with "Avatar"
// let sliced = favMovies.slice(9,18);
// console.log(sliced);
// //Logs the second half of the array into "sliced", does not alter original array

/////////////////
// Where is Waldo
/////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"],["Petunia", ["Baked Goods", "Waldo"]]];
// whereIsWaldo.splice(1,1);
// //removed "Eggbert"
// whereIsWaldo[1].splice(2,1,"No One");
// //Accessed index 1 and replaced element index 2 with "No One"
// console.log(whereIsWaldo);

/////////////////
// Excited Kitten
/////////////////

// for (i=0 ; i<=20; i++){
//     let x = Math.floor(Math.random() * 10);
//     if(i%2 === 0 && x <= 4 ){
//         console.log("...human... why you taking pictures of me...?",i);
//         }else if (i%2 === 0 && x >= 5) {
//             console.log("...the catnip made me do it...",i)
//         } else{
//         console.log( "Love me, pet me! HSSSSSS!" ,i);
//     }
// }

//////////////////
// Find the Median
//////////////////

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// nums.sort();
// let medInt = Math.floor(nums.length/2);
// console.log(nums[medInt]);

///////////////////
// Hungry for More?
///////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
///////////////
// Alien Attire
///////////////

// let kristynsShoe = kristynsCloset.splice(0,1);
// thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset[2]);

//////////////
// Dress Us Up
//////////////



//////////////// 
// Dirty Laundry 
////////////////

for (i=0; i<= kristynsCloset.length-1; i++){
    console.log("WHIRR: Now washing " + kristynsCloset[i] + ".");
}

/////////////
// Inventory
///////////// 

