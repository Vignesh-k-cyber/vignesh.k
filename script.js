document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.resume-header').appendChild(menuToggle);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Make email clickable (will open default mail client)
    const emailElement = document.querySelector('.contact-info p:nth-child(2)');
    if (emailElement) {
        const email = emailElement.textContent.replace('vignesh.k.0429@gmail.com', '').trim();
        emailElement.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:vignesh.k.0429@gmail.com">vignesh.k.0429@gmail.com</a>`;
    }

    // Make phone clickable (on mobile devices)
    const phoneElement = document.querySelector('.contact-info p:first-child');
    if (phoneElement) {
        const phoneNumber = phoneElement.textContent.replace('+91 000 123 4567', '').trim();
        phoneElement.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:+910001234567">+91 000 123 4567</a>`;
    }

    // Certificate view buttons animation
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Dynamic year in footer (if you add one)
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2023', new Date().getFullYear());
    }

    // Mobile menu functionality
    menuToggle.addEventListener('click', function() {
        document.querySelector('.resume-container').classList.toggle('menu-open');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on a section
    document.querySelectorAll('.resume-section h3').forEach(section => {
        section.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.querySelector('.resume-container').classList.remove('menu-open');
                document.querySelector('.mobile-menu-toggle i').classList.remove('fa-times');
                document.querySelector('.mobile-menu-toggle i').classList.add('fa-bars');
            }
        });
    });
});
