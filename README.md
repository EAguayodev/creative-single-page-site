# Frontend Mentor - Creative agency single page site solution

This is a solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider usin either their mouse/trackpad or keyboard


### Links

- Solution URL: [https://github.com/EAguayodev/creative-single-page-site](Github)
- Live Site URL: [https://creative-single-page-site.netlify.app/](Netlify)

## My process
I started the challenge using Tailwind CSS, since I wanted to move quickly with utility classes and responsive breakpoints. While it worked well for styling the general structure, I ran into limitations when I needed certain components and sections to overlap in a controlled way. Tailwind’s utility approach made those overlapping layouts feel clunky, especially when I wanted fine-grained control over spacing and positioning.

To solve this, I switched over to a more traditional stack with HTML, SCSS, and JavaScript. SCSS gave me the flexibility to structure styles with variables, nesting, and mixins, which made overlapping sections easier to manage without affecting the rest of the layout. On the JavaScript side, I used arrays to dynamically change images and headings whenever the user clicked the arrow buttons, giving the page a more interactive feel.

This combination gave me the best of both worlds: a clean, responsive layout where overlapping sections look intentional and a dynamic experience powered by JS.

### Built with

- Semantic HTML5 markup
- SCSS
- JavaScript
- Desktop-first workflow

### What I learned
One of the biggest lessons from this challenge was understanding when to use utility frameworks like Tailwind vs. when to switch to custom SCSS. Tailwind was fast for prototyping, but when I needed overlapping layouts and component-level control, I realized that utility-first classes sometimes fight against more complex design requirements.

By moving over to SCSS, I learned how to:

Manage overlapping sections without creating unwanted white space.

Use nesting and variables to keep my codebase organized and consistent.

Structure styles so that responsiveness worked naturally across devices.

On the JavaScript side, I reinforced my knowledge of working with arrays and the DOM. Setting up arrays for images and headings allowed me to swap content dynamically with the arrow buttons — a pattern I can reuse for sliders, galleries, or testimonial sections in future projects.

Overall, this project taught me how to choose the right tool for the job and how much flexibility a traditional HTML/SCSS/JS setup still offers when fine-tuning layouts.


### Continued development

Going forward, I want to dig deeper into when to choose CSS and JS frameworks over others depending on the situation. This project made me realize that the “right” tool can shift depending on whether the priority is rapid prototyping, pixel-perfect layout control, or reusable component structures. Building that decision-making skill set is something I’ll focus on as I take on more challenges.


### Useful resources

- [https://codepen.io/w3resource/pen/dyQpqdg](codepen) - W3source codepen helped me with getting ideas for helping me get ideas for text and image transitions.
- [https://forum.freecodecamp.org/t/how-can-i-display-different-text-everytime-i-click-a-button/369721](freecodecamp) - The Freecodecamp forum provided from community members other directions for getting the text to change and transition displaying other text in JavaScript.


## Author

- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)


## Acknowledgments

I want to give acknoledgementto frontendmentor for providing this intermediate challenge. Challenged me to go outside my scope of using flexbox to solve most of my layout solutions when taking on challenges to using grid.