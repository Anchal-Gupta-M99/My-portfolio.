// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to Anchal's Portfolio!");


// =========================
// PROJECT BUTTON
// =========================

let projectButton = document.getElementById("projectButton");

if (projectButton) {
    projectButton.addEventListener("click", function () {
        console.log("Project button clicked!");
    });
}


// =========================
// NAVBAR LINKS
// =========================

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Navigation link clicked:", link.textContent);

    });

});


// =========================
// PAGE LOADED
// =========================

window.addEventListener("load", function () {

    console.log("Portfolio loaded successfully!");

});
// DARK MODE

let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});
let shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async function () {

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Anchal's Portfolio",
                text: "Check out my portfolio website!",
                url: window.location.href
            });

        } catch (error) {
            console.log("Sharing cancelled.");
        }

    } else {

        alert("Share feature is not supported on this browser.");

    }

});