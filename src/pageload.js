import BirdLogo from './images/bird.jpg'
import BirdChef from './images/tweeting-chef.jpg'
import BirdHouse from './images/house.jpg'
import BirdMenu from './images/figure-3.jpg'
import './style.css'



//functions

const homepage = function (){
    //content div we want to put things into
const content = document.querySelector('.content')
content.innerHTML = ""

const title = document.createElement('div')
title.classList.add('heading')


content.append(title)


// portrait img
const portrait = document.createElement('img');
portrait.src = BirdChef
portrait.alt = "Bird Chef"

content.append(portrait)

//logo img
const logo = document.createElement('img');
logo.src = BirdLogo
logo.alt = "bird logo"
logo.classList.add('logo')
title.append(logo)

const text = document.createElement('h1')
text.textContent = "Bird Seed Buffet"
text.classList.add("home-title")
title.append(text)

const description = document.createElement('p')
description.textContent = "Dive into our carefully curated selection of seeds, each chosen for its nutritional value, freshness, and flavor profile."
content.append(description)

const list = document.createElement('ul')
content.append(list)

const l1 = document.createElement('li')
l1.textContent = "Classic Blends: Perfectly balanced mixtures that cater to the dietary needs and taste preferences of a wide variety of birds."
list.append(l1)

const l2 = document.createElement('li')
l2.textContent = "Exotic Varieties: Rare seeds from around the globe, offering a taste of adventure for the more curious and cosmopolitan avian palates."
list.append(l2)

const l3 = document.createElement('li')
l3.textContent = "Seasonal Specialties: Rotating selections that reflect the bounty of the seasons, ensuring your birds are always engaged and delighted by new flavors."
list.append(l3)
console.log("reload")
}

const menuPage = function () {
    //content div we want to put things into
    const content = document.querySelector('.content')
    content.innerHTML = ""

    //title
    const title = document.createElement('div')
    title.classList.add('heading')
    content.append(title)

    //logo
    const logo = document.createElement('img');
    logo.src = BirdLogo
    logo.alt = "bird logo"
    logo.classList.add('logo')
    title.append(logo)

    //text
    const text = document.createElement('h1')
    text.textContent = "Menu"
    text.classList.add("menu-title")
    title.append(text)

  

    //menu image
    const menu = document.createElement('img');
    menu.src = BirdMenu
    menu.alt = "bird menu"
    content.append(menu)

    const description = document.createElement('p')
    description.textContent = "Welcome to Bird Seed buffet, where every seed tells a story of flavor, nutrition, and love. Explore our carefully curated menu, designed to delight your feathered friends and support their health and well-being."
    content.append(description)

    console.log("reload menu")
}
const aboutPage = function () {
    //content div we want to put things into
    const content = document.querySelector('.content')
    content.innerHTML = ""

     //title
     const title = document.createElement('div')
     title.classList.add('heading')
     content.append(title)
 
     //logo
     const logo = document.createElement('img');
     logo.src = BirdLogo
     logo.alt = "bird logo"
     logo.classList.add('logo')
     title.append(logo)
 
     //text
     const text = document.createElement('h1')
     text.textContent = "About"
     text.classList.add("menu-title")
     title.append(text)

     const header = document.createElement('h1')
     header.textContent = "Feast on High Quality Seeds"
     content.append(header)

    //menu image
    const home = document.createElement('img');
    home.src = BirdHouse
    home.alt = "bird menu"
    home.classList.add("home")
    content.append(home)


    const description = document.createElement('p')
    description.textContent = "Ready to explore the Bird House? Secure your reservation at the bird buffet"
    content.append(description)

    const list = document.createElement('ul')
    content.append(list)

    const l1 = document.createElement('li')
    l1.textContent = "Opening Hours: Every day from 7 am to 7 pm"
    list.append(l1)

    const l2 = document.createElement('li')
    l2.textContent = "To make a reservation, send a raven to 123-456-7890"
    list.append(l2)

    const l3 = document.createElement('li')
    l3.textContent = "Make sure not to bring your human companions to this restuarant"
    list.append(l3)
    console.log("reload")
}
//immediately run homepage
homepage()

// event listeners
const homebtn = document.querySelector('#home')
homebtn.onclick = homepage

const menubtn = document.querySelector('#menu')
menubtn.onclick = menuPage

const aboutbtn = document.querySelector('#about')
aboutbtn.onclick = aboutPage


