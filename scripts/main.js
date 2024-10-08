// fadein effect for garderobenwLogo
document.addEventListener("DOMContentLoaded", function() {
    const garderobenwLogo = document.getElementById("garderobenwLogo");
    garderobenwLogo.classList.add("show");
});

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});