// fadein effect for garderobenwLogo
document.addEventListener("DOMContentLoaded", function() {
    const garderobenwLogo = document.getElementById("garderobenwLogo");
    garderobenwLogo.classList.add("show");
});

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    // Check if the page is scrolled down
    if (window.scrollY > 50) { // Adjust the value as needed
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});