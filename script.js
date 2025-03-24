document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 0px 15px rgba(0, 200, 255, 0.7)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
        });
    });
});
