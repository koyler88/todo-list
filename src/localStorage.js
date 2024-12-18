export function updateLocalStorage(array) {
    localStorage.setItem("tasksArray", JSON.stringify(array))
        const projects = document.querySelectorAll(".project")
        const projectNames = []
        projects.forEach((project) => {
            projectNames.push(project.classList[0])
        })
        localStorage.setItem("projectNames", JSON.stringify(projectNames))
}