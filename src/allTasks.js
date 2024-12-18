import trashcan from "./SVG/trash-can-outline.svg"
import { updateLocalStorage } from "./localStorage";

export function allTasksBtnLogic(allTasksArray) {
    const allTasksBtn = document.querySelector(".all-tasks")    

    allTasksBtn.addEventListener("click", () => {
        updateActiveClass();
        displayTasks(allTasksArray);
        updateLocalStorage(allTasksArray)
    })

    function updateActiveClass() {
        const active = document.querySelector(".active")
        if (active !== null) {
            active.classList.remove("active")
        }

        
        allTasksBtn.classList.add("active")
    }

    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        const date = new Date(year, month - 1, day); 
      
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
    
      function resetIndex() {
        const taskDivs = document.querySelectorAll(".taskDiv")
        let i = 0
        taskDivs.forEach(e => {
            e.setAttribute("array-index", i);
            i += 1;
        })
      }

      function displayProjectTitles() {
        const projects = document.querySelectorAll(".project")
        const content = document.querySelector(".content")
        projects.forEach((project) => {
            const projectTitleDiv = document.createElement("div")
            projectTitleDiv.classList.add("project-title")
            projectTitleDiv.classList.add(`${project.classList[0]}div`)
            projectTitleDiv.textContent = project.classList[0]
            content.appendChild(projectTitleDiv)
        })
      }

      function addPriorityColor(priority, div) {
        if (priority === "high") {
            div.classList.add("red")
        }
        if (priority === "medium") {
            div.classList.add("yellow")
        }
        if (priority === "low") {
            div.classList.add("green")
        }
        
      }

    function displayTasks() {
        const content = document.querySelector(".content")
        document.querySelectorAll(".taskDiv").forEach(e => e.remove())

        if (document.querySelector(".content-title")) {
            document.querySelector(".content-title").remove()
        }

        if (document.querySelector(".project-title")) {
            const projectTitles = document.querySelectorAll(".project-title")
            projectTitles.forEach((title) => {
                title.remove()
            })
        }

        const contentTitle = document.createElement("div")
        contentTitle.classList.add("content-title")
        contentTitle.textContent = "All Tasks"
        content.appendChild(contentTitle)

        displayProjectTitles();

        for (let i = 0; i < allTasksArray.length; i++) {
            const newDiv = document.createElement("div")
            newDiv.classList.add("taskDiv")
            newDiv.setAttribute("array-index", i)
            const title = allTasksArray[i].title
            const description = allTasksArray[i].description
            const DueDate = formatDate(allTasksArray[i].dueDate)
            const project = allTasksArray[i].project
            const priority = allTasksArray[i].priority

            addPriorityColor(priority, newDiv)

            const titleDiv = document.createElement('div')
            titleDiv.textContent = title
            titleDiv.classList.add("task-title")
            newDiv.appendChild(titleDiv)
            const descriptionDiv = document.createElement('div')
            descriptionDiv.textContent = description
            descriptionDiv.classList.add("task-description")
            newDiv.appendChild(descriptionDiv)
            const DueDateDiv = document.createElement('div')
            DueDateDiv.textContent = DueDate
            DueDateDiv.classList.add("task-dueDate")
            newDiv.appendChild(DueDateDiv)
            const deleteBtn = document.createElement("img")
            deleteBtn.src = trashcan
            deleteBtn.classList.add("task-deleteBtn")
            newDiv.appendChild(deleteBtn)
            const parentProject = document.querySelector(`.${project}div`)
            parentProject.appendChild(newDiv)

            deleteBtn.addEventListener("click", () => {
                const arrayIndex = deleteBtn.parentElement.getAttribute("array-index")
                deleteBtn.parentElement.remove()
                allTasksArray.splice(arrayIndex, 1)
                resetIndex();
                updateLocalStorage(allTasksArray);
            })
        }
    }
    allTasksBtn.click();
}