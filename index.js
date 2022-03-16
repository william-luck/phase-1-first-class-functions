// // function Monday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// //   }
  
// //   function Tuesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// //   }
  
// //   function Wednesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Go for a five-mile run");
// //   }
  
// //   function Thursday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// //   }
  
// //   function Friday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// //   }



// // Putting all five mile runs into own function

// function runFiveMiles() {
//     console.log("Run five miles");
// }

// function liftWeights() {
//     console.log("Pump iron")
// }

// function swimFortyLaps() {
//     console.log("Go swim 40 laps")
// }

// // // Then, Monday can look like this: 

// // function Monday() {
// //     exerciseRoutine(liftWeights);
    
// // }

// // // But we still have to list out every single day of teh week. 

// // // Can create a function that took a second activity as a parameter

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }


// //In-line functions 

// // as normal function
// // exerciseRoutine(function () {
// //     console.log("Work that core");
// // })

// // As arrow function 
// // exerciseRoutine(() => console.log("Work that core"));


// // Folllowing along with returning functions

// function morningRoutine(exercise) {
//     let breakfast; 

//     if (exercise === liftWeights) { 
//         breakfast = "protein bar"
//     } else if (exercise === swimFortyLaps) {
//         breakfast === "Kale smoothie"
//     } else {
//         breakfast === "granola"
//     }

//     exerciseRoutine(exercise); 

//     return function() {
//         console.log(`Let me eat this ${breakfast}`)
//     }
// }

// const afterExercise = morningRoutine(liftWeights);
// afterExercise;




// function receivesAFunction(cb) {
//     cb();
// }

// function returnsANamedFunction() {
//     return function namedFunction(){
//         console.log("hoho");
//     }
// }

// function returnsAnAnonymousFunction() {
//     return function() {console.log("hoho")};
// }

// as arrow functions 

const receivesAFunction = cb => cb();

const returnsANamedFunction = () => function namedFunction(){"hoho"};

const returnsAnAnonymousFunction = () => function() {console.log("hoho")}


