export function createContact() {
    const content = document.getElementById("content")
    
    const active = document.querySelector(".active")
    active.classList.remove('active')
    
    const contact = document.querySelector('.contact')
    contact.classList.add('active')

    const container = document.createElement('div')
    container.classList.add("container")

    content.appendChild(container)

    const contactTitle = document.createElement('div')
    contactTitle.classList.add("contact-title")
    contactTitle.textContent = "CONTACT US"

    container.appendChild(contactTitle)

    const chefInfoBox = document.createElement('div')
    chefInfoBox.classList.add('box')

    const chefName = document.createElement('div')
    chefName.classList.add("contact-name", 'title')
    chefName.textContent = "Savannah"

    chefInfoBox.appendChild(chefName)

    const chefPosition = document.createElement('div')
    chefPosition.textContent = "Head Chef"

    const chefNumber = document.createElement('div')
    chefNumber.textContent = "555-555-5555"

    const chefEmail = document.createElement('div')
    chefEmail.textContent = "SuperRealEmail@notfake.com"

    chefInfoBox.append(chefPosition, chefNumber, chefEmail)

    container.appendChild(chefInfoBox)

    const managerInfoBox = document.createElement('div')
    managerInfoBox.classList.add('box')

    const managerName = document.createElement('div')
    managerName.textContent = "Sharon"
    managerName.classList.add('contact-name', 'title')

    const managerPosition = document.createElement('div')
    managerPosition.textContent = "Manager"

    const managerNumber = document.createElement('div')
    managerNumber.textContent = "555-555-5556"

    const managerEmail = document.createElement('div')
    managerEmail.textContent = "VeryRealEmail@notfake.com"

    managerInfoBox.append(managerName, managerPosition, managerNumber, managerEmail)


    container.appendChild(managerInfoBox)


    const waiterInfoBox = document.createElement('div')
    waiterInfoBox.classList.add('box')

    const waiterName = document.createElement('div')
    waiterName.textContent = "Kristi"
    waiterName.classList.add('contact-name', 'title')

    const waiterPosition = document.createElement('div')
    waiterPosition.textContent = "Waiter"

    const waiterNumber = document.createElement('div')
    waiterNumber.textContent = "555-555-5557"

    const waiterEmail = document.createElement('div')
    waiterEmail.textContent = "TotallyRealEmail@notfake.com"

    waiterInfoBox.append(waiterName, waiterPosition, waiterNumber, waiterEmail)

    container.appendChild(waiterInfoBox)
}