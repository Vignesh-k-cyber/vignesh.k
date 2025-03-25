// Smooth scrolling for links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Glow effect on sections when hovered
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.boxShadow = "0px 4px 10px rgba(0, 128, 128, 0.6)";
    });
    section.addEventListener('mouseout', () => {
        section.style.boxShadow = "none";
    });
});
