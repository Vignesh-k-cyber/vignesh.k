document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 0px 15px rgba(0, 255, 255, 0.8)";
        });
        box.addEventListener("mouseout", function () {
            this.style.boxShadow = "0px 0px 10px rgba(0, 255, 255, 0.5)";
        });
    });
});
