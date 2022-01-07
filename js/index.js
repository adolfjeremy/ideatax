import "./drawer.js";
import App from "./view/app.js";

const app = new App({
    content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
    app.renderPage();
});