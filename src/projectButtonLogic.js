import { closeButtonLogic } from "./taskFormLogic";
import { projectLogic } from "./projectLogic";

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

    function addNewProject(title) {
        const projectContainer = document.querySelector(".project-container")
        const projectDiv = document.createElement("div")
        projectDiv.classList.add(title, "project")

        const image = document.createElement("img")
        image.src = 'http://localhost:8080/4f7502b516619bd506d6.svg'
        image.classList.add("folder")

        projectDiv.textContent = title
        projectDiv.prepend(image)
        projectContainer.appendChild(projectDiv)
        
    }
}