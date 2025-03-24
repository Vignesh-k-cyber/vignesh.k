document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 0px 15px rgba(184, 134, 11, 0.8)"; /* Blended Golden Accent */
        });
        box.addEventListener("mouseout", function () {
            this.style.boxShadow = "0px 0px 10px rgba(184, 134, 11, 0.5)"; /* Blended Golden Accent */
        });
    });
});
