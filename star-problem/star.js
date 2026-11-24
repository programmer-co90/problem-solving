// const prompt = require("prompt-sync")();

// left to right, top to down

// - 1 -

// for(let i=1; i <= 5; i++){
//     for(let j=1; j<= i; j++){
//         process.stdout.write("*");
//     }
//     console.log();

// }

// - 2 -  short code

// for(let i=1; i <= 5; i++){
//     console.log("* ".repeat(i));
// }

// - 3 -

// let n = parseInt(prompt("Enter rows number: "));

// // let n = 5;
// for(let i = 1; i<= n; i++){
//     let row = "";
//     row += "* ".repeat(i);
//     row += " ".repeat((n-1)* 2);
//     console.log(row);
// }

// - 4 -

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(j <= i){
//             row += "* ";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);

// }

// left to right, down to top

// - 1 -

// for(let i =5; i >= 1; i--){
//     for(let j=1; j<= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();

// }

// - 2 - short code

// for(let i = 5; i >= 1; i--){
//     console.log("* ".repeat(i));
// }


// - 3 -

// let n = 5;
// for(let i = n; i>=1; i--){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(j <= i){
//             row += "* ";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);

// }

// right to left, top to down

// - 1 -

// let n = 5;
// for(let i=1; i <= n; i++){
//     let row ="";
//     row +=" ".repeat((n - i) * 2);
//     row +="* ".repeat(i);
//     console.log(row);

// }

// - 2 - short code

// for(let i = 1; i <= 5; i++){
//     console.log("  ".repeat(5 - i) + "* ".repeat(i));
    
// }

// - 3 -
// let n = 5;
// for (let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1 ; j <= n; j++){
//         if(j <= n - i){
//             row += "  ";
//         }else{
//             row += "* ";
//         }
//     }
//     console.log(row);
    
// }

// - 4 - 
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// right to left, down to top

// - 1 -
// let n = 5;
// for(let i = n; i >=1; i--){
//     let row ="";
//     row +=" ".repeat((n - i ) * 2);
//     row +="* ".repeat(i);
//     console.log(row);
    
// }

// - 2 - short code 
// for(let i = 5; i >= 1; i--){
//     console.log("  ".repeat(5-i) + "* ".repeat(i));
    
// }

// - 3 - 
// let n = 5;
// for(let i = n; i >= 1; i--){
//     for(let j = 1; j <= (n - i) * 2; j++){
//         process.stdout.write(" ");
//     }
//     for(let k = i; k >= 1; k--){
//         process.stdout.write("* ");
//     }
//     console.log();
    
// }

// - 4 -
// let n = 5;
// for(let i = n; i >= 1; i--){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(j <= n -i){
//             row += "  ";
//         }else{
//             row += "* ";
//         }
//     }
//     console.log(row);
    
// }

// pyramid, top to down
// - 1 -

// let n = 5 ;
// for(let i = 1; i <= n; i++){
//     let row = "";
//     for(let j = 1; j <= n - i; j++){
//         row +=" ";
//     }
//     for(let k = 1; k <= i; k++){
//         row +="* ";
//     }
//     console.log(row);
    
// }

// - 2 - short code

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let spaces = " ".repeat(n - i);
//     let stars = "* ".repeat(i);
//     console.log(spaces + stars);
// }

// - 3 -

// let n = 5; 
// for(let i = 1; i <= n; i++){
//     let row = "";

//     row += " ".repeat(n - i);
//     row += "* ".repeat(i);

//     console.log(row);
    
// }

// - 4 - 
// let n = 5 ;
// for(let i = 1; i <= n; i++){
//     let row = "";

//     for(let j = 1; j <= n; j++){
//         if(j <= n - i){
//             row +=" ";
//         }else{
//             row += "* ";
//         }
//     }
//     console.log(row);
    
// }

// - 5 - short code 

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let space = " ".repeat(n - i);
//     let stars = "* ".repeat(i);
//     console.log(space + stars);
    
// }

/// pyramid, down to top
// - 1 -

// let n = 5;
// for(let i = n; i >= 1; i--){
//   let row = "";

//   row += " ".repeat(n - i);
//   row += "* ".repeat(i); // or row +="*".repeat(i * 2 - 1);

//   console.log(row);
// }

// - 2 - short code

// for(let i = 1; i <= 5; i++){
//     console.log(" ".repeat(5 - i) + "* ".repeat(i));
// }

// - 2 -

// let n = 5; 
// for(let i = 1; i <= n; i++){
//     let row ="";

//     for (let j = 1; j <= n; j++) {
//       // or for(let j = 1; j <= 2 * n-i; j++){
//       if (j < i) {
//         row += " ";
//       } else {
//         row += "* ";
//       }
//     }
//     console.log(row);
    
// }

// - 3 - short code 
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let spaces = " ".repeat(i - 1);
//     let stars = "* ".repeat(n - i + 1); // or let stars = "*".repeat(2 * (n - i) + 1);
//     console.log(spaces + stars);
    
// }

// rhomboid 

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row ="";
//     for(let j = 1; j <= n ; j++){
//         if(j <= n - i){
//             row +=" ";
//         }else{
//             row +="* ";
//         }
//     }
//     console.log(row);
    
// }
// for (let i = n; i >= 1; i--){
//     let row ="";
//     for(let j = 1; j <= n; j++){
//         if(j <= n - i){
//             row +=" ";
//         }else{
//             row +="* ";
//         }
//     }
//     console.log(row);
    
// }

// line, top to down

// let n = 5;
// for(let i = 1; i <= n; i++){
//     let row = "";

//     for(let j = 1; j <= n; j++){
//         if(j <= n - 1){
//             row += " ";
//         }else{
//             row += "* "
//         }
//     }
//     console.log(row);
    
// }



