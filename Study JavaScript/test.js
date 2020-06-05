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
//splice syntax =>  arr.splice(index,number of items to delete)
//console.log(toDo);

//console.log(toDo.indexOf('watch a movie'));
let list=[0, 1, 2, 3, 4];
let newArr=list.slice(-1);
/*slice return a new array with certain elements
slice syntax => arr.slice(index to start "it is inclusive in the new array",index to end "exclusive 
in the new array")*/
console.log(newArr);
