let toDoList = ["walk the dog", "go to the gym", "watch a movie"];
//we will update our list throw this function
function updateArr(item) {
    toDoList.push(item);

}
//when user input a task it will be added to our toDoList array
const userTask = document.getElementById("userInput");
userTask.addEventListener("change", (e) => {
    let addNewTask = e.target.value;
    updateArr(addNewTask);

});
console.log(toDoList);




    //   let list = document.getElementById("list");
    //   for (let item = 0; item < 4; item++) {
    //     //creating unorder list li
    //     let el = document.createElement("li");
    //     //appending the new element to the dom
    //     list.appendChild(el);
    //     //give the item unique id the same we generate with the for loop
    //     el.setAttribute("id", item);
    //     //change value of li inner html with the array item
    //     document.getElementById(item).textContent = toDoList[item];
    //   }
