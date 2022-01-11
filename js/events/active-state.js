import events from "./drawer.js";

events;
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function() {
        let currentActiveNavLink = document.querySelector(".active");
        currentActiveNavLink.className = currentActiveNavLink.className.replace(
            " active",
            ""
        );
        document.querySelector("#navbarNav").classList.contains("slide") ?
            events() :
            "";
        this.className += " active";
    });
});

document.querySelector(".footer-about").addEventListener("click", () => {
    let currentActiveNavLink = document.querySelector(".active");
    currentActiveNavLink.className = currentActiveNavLink.className.replace(
        " active",
        ""
    );
    document.querySelectorAll(".nav-link")[1].className += " active";
});
document.querySelector(".footer-service").addEventListener("click", () => {
    let currentActiveNavLink = document.querySelector(".active");
    currentActiveNavLink.className = currentActiveNavLink.className.replace(
        " active",
        ""
    );
    document.querySelectorAll(".nav-link")[2].className += " active";
});
document.querySelector(".footer-contact").addEventListener("click", () => {
    let currentActiveNavLink = document.querySelector(".active");
    currentActiveNavLink.className = currentActiveNavLink.className.replace(
        " active",
        ""
    );
    document.querySelectorAll(".nav-link")[4].className += " active";
});