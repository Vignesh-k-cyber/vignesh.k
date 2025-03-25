// Open Certificates in a New Tab
function openCertificate(url) {
    window.open(url, "_blank");
}

// Smooth Scroll Effect
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Add Glowing Hover Effect
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.boxShadow = "0px 4px 10px rgba(0, 255, 128, 0.7)";
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s ease-in-out";
    });

    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.3)";
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
