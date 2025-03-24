document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s ease-in-out";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});
