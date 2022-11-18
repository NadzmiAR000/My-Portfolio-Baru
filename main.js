const words = ["software engineering and network engineering", "software engineering and network engineering"]

let cursor = gsap.to('.cursor', {opacity: 0, ease:"power2.inOut", repeat: -1})

let masterTl = gsap.timeline({repeat: -1})

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1.5, yoyo: true, repeatDelay: 2})
    tl.to('.text', {duration: 3, text: word})
    masterTl.add(tl)
})




const menuToggle = document.querySelector(".toggle");
const navMenu = document.querySelector("#menu-nav");
const toggle = document.querySelector(".toggle")

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show")
    toggle.classList.toggle("red")
})



