document.querySelectorAll('.cert-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('certificate-frame').src = this.getAttribute('data-cert');
        document.getElementById('certificate-modal').style.display = 'block';
    });
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('certificate-modal').style.display = 'none';
});
