document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.resume-box a').forEach(link => {
        link.addEventListener("mouseover", function () {
            this.parentElement.style.boxShadow = "0px 0px 15px rgba(0, 255, 255, 0.8)";
        });
        link.addEventListener("mouseout", function () {
            this.parentElement.style.boxShadow = "0px 0px 10px rgba(0, 255, 255, 0.5)";
        });
    });
});
