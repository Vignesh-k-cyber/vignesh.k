// Show Certificate in a Modal
function showCertificate(url) {
    document.getElementById("certificateFrame").src = url;
    document.getElementById("certificateModal").style.display = "flex";
}

// Close Certificate Modal
function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
    document.getElementById("certificateFrame").src = "";
}
