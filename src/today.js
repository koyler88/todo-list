import { allTasksArray } from "./taskFormLogic";
export function todayBtnLogic() {
    const todayBtn = document.querySelector(".today")

    todayBtn.addEventListener("click", () => {
        updateActiveClass();
        displayTasks();
    })

    function updateActiveClass() {
        const active = document.querySelector(".active")
        active.classList.remove("active")

        
        todayBtn.classList.add("active")
    }

    function resetIndex() {
        const taskDivs = document.querySelectorAll(".taskDiv")
        let i = 0
        taskDivs.forEach(e => {
            e.setAttribute("array-index", i);
            i += 1;
        })
      }

    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        const date = new Date(year, month - 1, day); 
      
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }

    function getTodaysDate() {
        const today = new Date();

        const day = today.getDate().toString().padStart(2, '0');
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
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

    function resetIndex() {
        const taskDivs = document.querySelectorAll(".taskDiv")
        let i = 0
        taskDivs.forEach(e => {
            e.setAttribute("array-index", i);
            i += 1;
        })
      }

    function removeEmptyProjects() {
        const projectTitles = document.querySelectorAll(".project-title")

        projectTitles.forEach((title) => {
            if(!title.getElementsByClassName("taskDiv").length > 0) {
                console.log(title)
                title.remove()
            }
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

    function displayTasks() {
        const dateToday = getTodaysDate();
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
        contentTitle.textContent = "Today"
        content.appendChild(contentTitle)

        displayProjectTitles();

        

        for (let i = 0; i < allTasksArray.length; i++) {
            if (allTasksArray[i].dueDate === dateToday) {
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
                deleteBtn.src = "http://localhost:8080/bcf8d6ff346603c8a51a.svg"
                deleteBtn.textContent = "Delete Task"
                deleteBtn.classList.add("task-deleteBtn")
                newDiv.appendChild(deleteBtn)
                const parentProject = document.querySelector(`.${project}div`)
                parentProject.appendChild(newDiv)

                deleteBtn.addEventListener("click", () => {
                    const arrayIndex = deleteBtn.parentElement.getAttribute("array-index")
                    deleteBtn.parentElement.remove()
                    allTasksArray.splice(arrayIndex, 1)
                    resetIndex();
                })
            }
        }

        removeEmptyProjects();
    }
}