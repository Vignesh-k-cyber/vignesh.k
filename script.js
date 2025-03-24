document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.boxShadow = "0px 0px 10px #00bcd4";
    });

    box.addEventListener('mouseleave', () => {
        box.style.boxShadow = "none";
    });
});

