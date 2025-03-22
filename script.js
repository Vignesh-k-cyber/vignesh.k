document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my Cyber Security Portfolio!");

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
