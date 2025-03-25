// Open Certificate in a New Tab
function openCertificate(url) {
    window.open(url, "_blank");
}

// Smooth Scroll Effect for Internal Links
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add Glowing Hover Effect to Boxes
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.boxShadow = "0px 4px 10px rgba(0, 128, 255, 0.7)";
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s ease-in-out";
    });

    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.2)";
        box.style.transform = "scale(1)";
    });
});

// Profile Image Hover Animation
document.querySelector("header img").addEventListener("mouseenter", function () {
    this.style.transform = "rotateY(360deg)";
    this.style.transition = "1s ease-in-out";
});

document.querySelector("header img").addEventListener("mouseleave", function () {
    this.style.transform = "rotateY(0deg)";
});

// Fade-in Animation for Sections
const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "0.6s ease-out";
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    observer.observe(section);
});
