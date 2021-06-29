let nav = document.querySelector("#p-navbar");

document.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        nav.classList.add("p-nav-scrolled");
    } else {
        nav.classList.remove("p-nav-scrolled");
    }
});