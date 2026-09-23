// select 
const inputEle = document.getElementById("inputTag")
const addBtnEle = document.getElementById("addBtn")
const taskContainerEle = document.querySelector(".taskContainer");

// console.dir(inputEle)
// console.log(inputEle)
// console.log(addBtnEle)
// console.log(taskContainerEle)


    inputEle.addEventListener("keydown" , function (event) {
        // jis key ko press keya store keya in key .
        let key = event.key;
        
        if(key == "Enter") {
            addTask();
        }
    }) 
    
    addBtnEle.addEventListener("click" , addTask);
    
    function addTask() {
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
        // taskEle.innerHTML = `<p>${task}</p>
        //   <svg
        //     id = "delete"
        //       xmlns="http://www.w3.org/2000/svg"
        //       viewBox="0 0 24 24"
        //       width="24"
        //       height="24"
        //       fill="currentColor"
        //     >
        //       <path
        //         d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"
        //       ></path>
        //     </svg>`;

            taskEle.innerHTML = ` <p contenteditable = "false" id = "task"  > ${task} </p>
            <div class = "icons">
              <button id = "taskCompleteBtn" class ="completeBTn" >Complete</button>
               <svg
            id="edit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"
            ></path>
          </svg>

          <svg
            id="delete"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"
            ></path>
          </svg>

</div> `
             // adding delete functionallity 
             const deleteButton = taskEle.querySelector("#delete");
             const editButton = taskEle.querySelector("#edit");
             const taskText = taskEle.querySelector("#task");
             const taskCompleteBtn = taskEle.querySelector("#taskCompleteBtn")
    
             deleteButton.addEventListener("click" , function() {
                taskContainerEle.removeChild(taskEle);
             });
            
             // console.log(taskEle)

             let isEditable = false;
             editButton.addEventListener("click" , function () {
              if(isEditable) {
                editButton.setAttribute("fill" , "white");
                taskText.setAttribute("contentEditable" , "true");
              }
              isEditable = !isEditable;
             })

             let isTaskComplete = false;
             taskCompleteBtn.addEventListener("click" , function() {
              if(isTaskComplete) {
                taskCompleteBtn.classList.remove("incompleteBtn")
                taskCompleteBtn.classList.add("conpleteBtn");
                taskCompleteBtn.innerHTML = "Complete";
                taskText.computedStyleMap.textDecoration = "none";
                taskEle.style.backgroundColor = "#92447f";
                taskEle.style.order = -1;
              } else {
                taskCompleteBtn.classList.remove("conpleteBtn")
                taskCompleteBtn.classList.add("incompleteBtn")
                taskCompleteBtn.innerHTML = "Incomplete";
                taskText.style.textDecoration = "line-through";
                taskText.style.textDecorationColor = "red";
                taskEle.style.backgroundColor = "pink"
                taskEle.style.order = 1;
              }
              isTaskComplete = !isTaskComplete;
             })
              taskContainerEle.appendChild(taskEle);
             
    }
