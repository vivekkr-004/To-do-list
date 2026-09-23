// select 
const inputEle = document.getElementById("inputTag")
const addBtnEle = document.getElementById("addBtn")
const taskContainerEle = document.querySelector(".taskContainer");

// console.dir(inputEle)
// console.log(inputEle)
// console.log(addBtnEle)
// console.log(taskContainerEle)

addBtnEle.addEventListener("click" , function() {
    // jo bhi text me likha hai osko task var me store kar leye 
    // let task = inputEle.value;
    // console.log(task)

    // deleting spaces 
    let task = inputEle.value.trim();
   
    inputEle.value = ""; // clear inputele ko 
    if(task.length == 0) {
        alert("task cannot be empty")
        return;
    }


    let taskEle = document.createElement("div");
    taskEle.classList.add("task");
    // text add + delete button add
    taskEle.innerHTML = `<p>${task}</p>
      <svg
        id = "delete"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"
          ></path>
        </svg>`;

         // adding delete functionallity 
         const deleteButton = taskEle.querySelector("#delete");

         deleteButton.addEventListener("click" , function() {
            taskContainerEle.removeChild(taskEle);
         });



    taskContainerEle.appendChild(taskEle);
    // console.log(taskEle)

})