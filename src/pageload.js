import BirdLogo from './images/bird.jpg'
import BirdChef from './images/tweeting-chef.jpg'
import './style.css'

//content div we want to put things into
const content = document.querySelector('.content')

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

content.append(logo)


