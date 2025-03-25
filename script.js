document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
function viewCertificate() {
    window.open("path-to-your-certificate.pdf", "_blank");
}
