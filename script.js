document.querySelectorAll('.cert-btn').forEach(button => {
    button.addEventListener('click', function () {
        const certFrame = document.getElementById('certificate-frame');
        certFrame.src = this.getAttribute('data-cert');
        document.getElementById('certificate-modal').style.display = 'block';
    });
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('certificate-modal').style.display = 'none';
});
