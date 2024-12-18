import { updateLocalStorage } from "./localStorage"
import { projectButtonLogic } from "./projectButtonLogic"
import folderSVG from "./SVG/folder.svg"
import trashcan from "./SVG/trash-can-outline.svg"
import { allTasksArray } from "./taskFormLogic"

const allTasksBtn = document.querySelector(".all-tasks")

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

function removeFolders() {
    const projectContainer = document.querySelector(".project-container")
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.lastChild)
    }
}

export function displayStoredProjectFolders() {
    let projectNames = JSON.parse(localStorage.getItem("projectNames"))
    if (projectNames === null) {
        projectNames = []
    }

    removeFolders();

    for (let i = 0; i < projectNames.length; i++) {
        addNewProject(projectNames[i])
    }
}