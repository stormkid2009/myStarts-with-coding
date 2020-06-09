let car = { model: "ferrari", power: "2400cc", color: "red" };
// const transport=()=>{
//     for(let myCar in car){
//         console.log(car[myCar]);
//         //we use for in loop to reach the values of our object

//     }
// }
// transport();
const list = [3, 4, 6, 7, 8, 9];
let [x, y, z,...args] = list;
//args here is the rest of arguments which gonna store in array
//console.log(x);
//console.log(args);
let {model:myModel,color:myColor}=car;
const info=`my car is ${myModel} and its color is ${myColor}.`;
//we use string method to repeat our string
// console.log(info.repeat(2));
//we use string method to search astring in the whole string or til determined position
// console.log(info.includes("is",40));
//string method to check if the string is in the beginning of certain position (0)by default
// console.log(info.startsWith('my'));
//I guess endsWith is easy to use .
