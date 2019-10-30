addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");
    const taskList = document.getElementById("taskList");
    const counter = document.getElementById("counter");
    const removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");

    let tasksToDo = taskList.querySelectorAll("li:not(.done)").length;
    refreshCounter();

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.length > 5 && taskInput.value.length < 100 && parseInt(priorityInput.value) >= 0 && parseInt(priorityInput.value) <= 10) {
            let task = document.createElement("li");
            
            let title = document.createElement("h1");
            title.textContent = taskInput.value; 

            let priority = document.createElement("p");
            priority.textContent = `priority ${parseInt(priorityInput.value)}`;
            task.setAttribute("priority", parseInt(priorityInput.value));
            
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", (e) => {
                e.currentTarget.parentElement.remove();
                if (e.currentTarget.parentElement.className.indexOf("done") == -1)
                    tasksToDo -= 1;
                refreshCounter();
            })
            
            let completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.addEventListener("click", (e) => {
                e.currentTarget.parentElement.classList.toggle("done");
                if (e.currentTarget.parentElement.className.indexOf("done") != -1)
                    tasksToDo -= 1;
                else 
                    tasksToDo += 1;
                refreshCounter();
            });

            task.appendChild(title);
            task.appendChild(priority);
            task.appendChild(deleteButton);
            task.appendChild(completeButton);

            const tasks = taskList.getElementsByTagName("li");
            if (tasks.length > 0 ) {
                let before;
                for (el of tasks) {
                    if (parseInt(el.getAttribute("priority")) <= priorityInput.value) {
                        before = el;
                        break;
                    }
                }
                if (before) 
                    taskList.insertBefore(task, before);
                else
                    taskList.appendChild(task); 
            }
            else {
                taskList.appendChild(task); 
            }
            
            tasksToDo += 1;
            refreshCounter();

            //default settings
            taskInput.value = "";
            priorityInput.value = 0;
        }
    });

    removeFinishedTasksButton.addEventListener("click", () => {
        const done = taskList.getElementsByClassName("done");

        for (let i = done.length-1; i >= 0; i--) {
            taskList.removeChild(done[i])       
        }
    })

    function refreshCounter() {       
         counter.textContent = tasksToDo;
    }
});