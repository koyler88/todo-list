export function createHomepage() {
    const content = document.getElementById("content")
    
    const active = document.querySelector(".active")
    active.classList.remove('active')

    const home = document.querySelector('.home')
    home.classList.add('active')


    const container = document.createElement('div')
    container.classList.add("container")

    content.appendChild(container)

    const restaurantTitle = document.createElement('div')
    restaurantTitle.classList.add("restaurant-name")
    restaurantTitle.textContent = "SAVANNAH'S SOUP & SALAD"

    container.appendChild(restaurantTitle)

    const reviewBox = document.createElement('div')
    reviewBox.classList.add('review')
    reviewBox.classList.add('box')

    const quote = document.createElement('div')
    quote.classList.add("quote")
    quote.textContent = "Savannah makes the creamiest soup! The customer service makes me feel safe at home! I would definitely recommend eating here... MORE THAN ONCE!!"

    reviewBox.appendChild(quote)

    const author = document.createElement('div')
    author.textContent = "- Kimball Oyler"

    reviewBox.appendChild(author)

    container.appendChild(reviewBox)

    const hoursBox = document.createElement('div')
    hoursBox.classList.add('hours')
    hoursBox.classList.add('box')

    const hoursTitle = document.createElement('div')
    hoursTitle.textContent = "Hours"
    hoursTitle.classList.add('title')

    hoursBox.appendChild(hoursTitle)

    const sunday = document.createElement('h4')
    sunday.textContent = "Sunday: CLOSED"

    hoursBox.appendChild(sunday)

    const monday = document.createElement('h4')
    monday.textContent = "Monday: 6am - 6pm"

    hoursBox.appendChild(monday)

    const tuesday = document.createElement('h4')
    tuesday.textContent = "Tuesday: 6am - 6pm"

    hoursBox.appendChild(tuesday)

    const wednesday = document.createElement('h4')
    wednesday.textContent = "Wednesday: 6am - 6pm"

    hoursBox.appendChild(wednesday)

    const thursday = document.createElement('h4')
    thursday.textContent = "Thursday: 6am - 10pm"

    hoursBox.appendChild(thursday)

    const friday = document.createElement('h4')
    friday.textContent = "Friday: 6am - 10pm"

    hoursBox.appendChild(friday)

    const saturday = document.createElement('h4')
    saturday.textContent = "Saturday: 8am - 10pm"

    hoursBox.appendChild(saturday)


    container.appendChild(hoursBox)


    const locationBox = document.createElement('div')
    locationBox.classList.add('location')
    locationBox.classList.add('box')

    const locationTitle = document.createElement('div')
    locationTitle.textContent = "Location"
    locationTitle.classList.add('title')

    locationBox.appendChild(locationTitle)

    const address = document.createElement('div')
    address.textContent = "739 Campfire Circle Bradenton, FL 34207"

    locationBox.appendChild(address)

    container.appendChild(locationBox)
}