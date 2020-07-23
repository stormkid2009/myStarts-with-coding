function addTask(task){
    toDo.unshift(task);
}
let toDo=[];
addTask('watch a movie');
addTask('go to Gym');
addTask('go to the barber');
//we use indexOf method to get the index of an element in the array 
toDo.indexOf('watch a movie');
//delete operator does not actually remove the element from the array 
//it just free space from the memory
//delete toDo[0];
toDo.splice(0,1);
//splice syntax =>  arr.splice(index,number of items to delete,
//[optional]items to add)
//notice that splice will make changes to the elements of the array 
//console.log(toDo);

//console.log(toDo.indexOf('watch a movie'));
let list=['banana', 'orange', 'apple', 'grapes', 'berry','coconut'];
let newArr=list.slice(1,3);
/*slice does not change the array but return a new array with certain elements
slice syntax => arr.slice(index to start "it is inclusive in the new array"
,index to end "exclusive in the new array")*/
//console.log(newArr);
//let myArr=list.concat(newArr);
//concat does not change original arrays but it merges them in new array
let myArr=list.concat('string here will treated as one element array');
console.log(myArr);
