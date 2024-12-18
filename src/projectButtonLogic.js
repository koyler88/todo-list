import { closeButtonLogic } from "./taskFormLogic";
import { projectLogic } from "./projectLogic";
import folderSVG from "./SVG/folder.svg";
import trashcan from "./SVG/trash-can-outline.svg"
import { allTasksArray } from "./taskFormLogic";
import { updateLocalStorage } from "./localStorage";

export function projectButtonLogic() {
    const button = document.querySelector(".new-project")

    button.addEventListener("click", () => {
        if (!document.getElementById("form")) {
            createTaskFormPopup();
            closeButtonLogic();
            submitButtonLogic();
        }
    })

    function createTaskFormPopup() {
        const container = document.getElementById("container")
        container.classList.add("blur")
        const formDiv = document.querySelector(".formDiv")

        const form = document.createElement("form")
        form.id = "form"

        const closeBtn = document.createElement("button")
        closeBtn.type = "button"
        closeBtn.textContent = "X"
        closeBtn.classList.add("closeBtn")
        const titleLabel = document.createElement("label")
        titleLabel.setAttribute("for", "title")
        titleLabel.textContent = "Project Name"
        const titleInput = document.createElement("input")
        titleInput.type = "text"
        titleInput.name = "title"
        titleInput.id = "title"
        titleInput.required = true;

        

        const submitButton = document.createElement("button")
        submitButton.type = "submit"
        submitButton.classList.add("submit")
        submitButton.textContent = "Create Project"

        form.append(titleLabel, titleInput,
            submitButton, closeBtn)
        formDiv.appendChild(form)
    }

    function submitButtonLogic() {
        const taskForm = document.getElementById("form")
        taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handleTaskFormSubmit(taskForm)
        clearTaskForm();
        projectLogic();
        const container = document.getElementById("container")
        container.classList.remove("blur")
        document.querySelector(".active").click()
    })
    }

    function handleTaskFormSubmit(form) {
        const formData = new FormData(form);
        const taskObject = Object.fromEntries(formData.entries());
        const title = taskObject.title

        addNewProject(title);
    }

    function clearTaskForm() {
        const formDiv = document.querySelector(".formDiv")
    
        while (formDiv.firstChild) {
            formDiv.removeChild(formDiv.lastChild)
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

    function addNewProject(title) {
        const projectContainer = document.querySelector(".project-container")
        const projectDiv = document.createElement("div")
        projectDiv.classList.add(title, "project")

        const image = document.createElement("img")
        image.src = folderSVG
        image.classList.add("folder")

        const deleteBtn = document.createElement("img")
        deleteBtn.src = trashcan
        deleteBtn.classList.add("project-deleteBtn")

        projectDiv.textContent = title
        projectDiv.prepend(image)
        projectDiv.appendChild(deleteBtn)
        projectContainer.appendChild(projectDiv)

        deleteBtn.addEventListener("click", () => {
            let projectName = deleteBtn.parentElement.classList[0]
            for (let i = 0; i < allTasksArray.length; i++) {
                if (allTasksArray[i].project === projectName) {
                    allTasksArray.splice(i, 1)
                    i += -1
                }
            }
            deleteBtn.parentElement.remove();
            resetIndex();
            updateLocalStorage(allTasksArray);
        })
        
    }
}