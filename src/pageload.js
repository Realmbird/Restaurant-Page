import BirdLogo from './images/bird.png'
import BirdChef from './images/tweeting-chef-484.webp'

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

content.append(logo)

