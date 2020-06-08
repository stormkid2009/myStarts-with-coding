//first we have to declare our variables
let toDoList = [];
const userInput = document.getElementById("userInput");
const addTask = document.getElementById('addTask');
const tasksList = document.getElementById("tasksList");
//we will update our list throw the function in this event

userInput.addEventListener("change", (e) => {
    toDoList.unshift(userInput.value);
});

addTask.addEventListener('click', (e)=>{
    let el = document.createElement("li");
    tasksList.appendChild(el);
    el.innerHTML = userInput.value;
    userInput.value="";
    userInput.focus();

});



        
        
        
    
    



