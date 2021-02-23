//Event 1 
let flyingBus = document.querySelector('.busImg');
flyingBus.addEventListener('click', () => {
flyingBus.src = "/flyingBus.gif";
})

//Event 2
//Event 3

const resize = document.querySelectorAll('a');
resize.forEach(element => {
    element.addEventListener('mouseenter', () => {
    element.style.transform = "scale(1.5)";
    element.style.transform = "all 0.3s";
})})

const exit = document.querySelectorAll('a');
exit.forEach(element => {
    element.addEventListener('mouseleave', () => {
    element.style.transform = "scale(1)";
    element.style.transform = "all 0.3s";
})})

//Event 4
const colorChange = document.querySelector("footer");
colorChange.addEventListener('click', () => {
colorChange.style.backgroundColor = "dodgerblue";
})

//Event 5
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
        alert ('You have reached the bottom!')
    }
    })

//Event 6
const focus = document.querySelector("footer");
focus.addEventListener('focus', (event) => {
 event.target.style.background= "dodgerblue";
})

//Event 7
const mouseOver = document.querySelector(".home .intro");
mouseOver.addEventListener('mouseover', (event) => {
   event.target.style.background= "dodgerblue";
});

//Event 8
const mouseLeave = document.querySelector(".home .intro"); 
mouseLeave.addEventListener('mouseleave', (event) => {
   event.target.style.background= "";
});

//Event 9
const wheelEvent = document.querySelectorAll(".lets-go");
wheelEvent.forEach(element => {element.addEventListener('wheel', () => {
element.style.transform = "scale(1.5)";
element.style.transition = "all 0.3s";
}) });


//Event 10
window.addEventListener("resize", () => {
    const heightOutput = document.querySelector('#height');
    const widthOutput = document.querySelector('#width');
    function reportWindowSize() {
      heightOutput.textContent = window.innerHeight;
      widthOutput.textContent = window.innerWidth;
    }
    window.onresize = reportWindowSize;
    })