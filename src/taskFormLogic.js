let allTasksArray = JSON.parse(localStorage.getItem("tasksArray"))
if (allTasksArray === null) {
    allTasksArray = []
}



export function submitButtonLogic() {
    const taskForm = document.getElementById("form")
    taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleTaskFormSubmit(taskForm)
    clearTaskForm();
    document.querySelector(".active").click()

    const container = document.getElementById("container")
    container.classList.remove("blur")
})
}

export function closeButtonLogic() {
    const closeBtn = document.querySelector(".closeBtn")
    closeBtn.addEventListener("click", () => {
        clearTaskForm();
        const container = document.getElementById("container")
        container.classList.remove("blur")
    })
}

function handleTaskFormSubmit(form) {
    const formData = new FormData(form);
    const taskObject = Object.fromEntries(formData.entries());
    
    allTasksArray.push(taskObject)
}

export {allTasksArray}

function clearTaskForm() {
    const formDiv = document.querySelector(".formDiv")

    while (formDiv.firstChild) {
        formDiv.removeChild(formDiv.lastChild)
    }
}