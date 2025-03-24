document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 0px 15px rgba(106, 0, 106, 0.8)"; /* Blended Dark Purple */
        });
        box.addEventListener("mouseout", function () {
            this.style.boxShadow = "0px 0px 10px rgba(106, 0, 106, 0.5)"; /* Blended Dark Purple */
        });
    });
});
