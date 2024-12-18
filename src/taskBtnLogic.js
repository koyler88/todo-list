import { submitButtonLogic } from "./taskFormLogic";
import { closeButtonLogic } from "./taskFormLogic";

export function taskButtonLogic() {
    const addTaskButton = document.querySelector(".add-task")

    addTaskButton.addEventListener('click', () => {
        if (!document.querySelector(".project")) {
            alert("Please Create a Project")
        } else {
            if (!document.getElementById("form")) {
                createTaskFormPopup();
                submitButtonLogic();
                closeButtonLogic();
            }
        }
        
    })

    function appendProjects(titles, selector) {
        titles.forEach(title => {
            const option = document.createElement("option")
            option.value = title.classList[0]
            option.textContent = title.classList[0]
            selector.appendChild(option)
        });
    }

    function createTaskFormPopup() {
        const container = document.getElementById("container")
        container.classList.add("blur")
        const projectTitles = document.querySelectorAll(".project")
        const formDiv = document.querySelector(".formDiv")

        const form = document.createElement("form")
        form.id = "form"

        const legend = document.createElement("legend")
        legend.textContent = "Add Task"
        legend.classList.add("legend")

        const projectLabel = document.createElement("label")
        projectLabel.setAttribute("for", "project")
        projectLabel.textContent = "Choose a Project: "
        projectLabel.classList.add("projectLabel")
        const projectSelect = document.createElement("select")
        projectSelect.id = "project"
        projectSelect.name = "project"
        appendProjects(projectTitles, projectSelect)
        

        const closeBtn = document.createElement("button")
        closeBtn.type = "button"
        closeBtn.textContent = "X"
        closeBtn.classList.add("closeBtn")
        const titleLabel = document.createElement("label")
        titleLabel.setAttribute("for", "title")
        titleLabel.textContent = "Title:"
        const titleInput = document.createElement("input")
        titleInput.type = "text"
        titleInput.name = "title"
        titleInput.id = "title"

        const dueDateLabel = document.createElement("label")
        dueDateLabel.setAttribute("for", "dueDate")
        dueDateLabel.textContent = "Due Date"
        const dueDateInput = document.createElement("input")
        dueDateInput.type = "date"
        dueDateInput.name = "dueDate"
        dueDateInput.id = "dueDate"

        const priorityTitle = document.createElement("div")
        priorityTitle.textContent = "Priority"

        const highDiv = document.createElement('div')
        const highLabel = document.createElement('label')
        highLabel.setAttribute("for", "high")
        highLabel.textContent = "High"
        const priorityInputHigh = document.createElement("input")
        priorityInputHigh.type = "radio"
        priorityInputHigh.name = "priority"
        priorityInputHigh.value = "high"
        priorityInputHigh.id = "high"
        highDiv.append(priorityInputHigh, highLabel)

        const mediumDiv = document.createElement('div')
        const mediumLabel = document.createElement('label')
        mediumLabel.setAttribute("for", "medium")
        mediumLabel.textContent = "Medium"
        const priorityInputmedium = document.createElement("input")
        priorityInputmedium.type = "radio"
        priorityInputmedium.name = "priority"
        priorityInputmedium.value = "medium"
        priorityInputmedium.id = "medium"
        mediumDiv.append(priorityInputmedium, mediumLabel)

        const lowDiv = document.createElement('div')
        const lowLabel = document.createElement('label')
        lowLabel.setAttribute("for", "low")
        lowLabel.textContent = "Low"
        const priorityInputlow = document.createElement("input")
        priorityInputlow.type = "radio"
        priorityInputlow.name = "priority"
        priorityInputlow.value = "low"
        priorityInputlow.id = "low"
        lowDiv.append(priorityInputlow, lowLabel)

        

        const submitButton = document.createElement("button")
        submitButton.type = "submit"
        submitButton.classList.add("submit")
        submitButton.textContent = "Create Task"

        form.append(legend,
            projectLabel, projectSelect,
            titleLabel, titleInput,
            dueDateLabel, dueDateInput,
            priorityTitle,
            highDiv, mediumDiv, lowDiv,
            submitButton, closeBtn)
        formDiv.appendChild(form)
    }
}