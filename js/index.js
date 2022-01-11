import "./events/drawer.js";
import App from "./view/app.js";
import "./events/active-state.js";

const app = new App({
    content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", async() => {
    document.querySelector("#mainContent").scrollIntoView({ behavior: "smooth" });
    await app.renderPage();
});

window.addEventListener("DOMContentLoaded", () => {
    app.renderPage();
});