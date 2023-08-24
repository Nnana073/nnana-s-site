let sidebar = document.querySelector("#sidebar")
let navbar = document.querySelector("#nav")
let closebtn = document.querySelector("#close-btn")
let navbtn = document.querySelector("#nav-btn")
let about = document.querySelector(".ab-text")
console.log(navbtn);
console.log(sidebar);

navbtn.addEventListener("click", function () {
    sidebar.classList.remove("hidden")
    navbar.classList.add("show")
})

closebtn.addEventListener("click", function () {
    sidebar.classList.add("hidden")
    navbar.classList.remove("show")

    about.addEventListener("click", function () {
        about.classList.add("sl")
    })
})
// console.log("this code is workig");