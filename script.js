document.addEventListener('DOMContentLoaded', function() {
    // 1. Email Copy Functionality
    const emailElement = document.querySelector('.email-text');
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = '#93c5fd';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = 'white';
                }, 2000);
            });
        });
    }

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Certificate View Button Animations
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 12px rgba(37, 99, 235, 0.25)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // 4. Section Entrance Animations
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-section');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 5. LinkedIn URL Update
    const linkedinUrl = "https://linkedin.com/in/yourprofile"; // Replace with your actual LinkedIn URL
    document.querySelectorAll('[href="https://linkedin.com/in/yourprofile"]').forEach(el => {
        el.href = linkedinUrl;
    });
});

// Add CSS for animations
const styleElement = document.createElement('style');
styleElement.textContent = `
    .animate-section {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @media (prefers-reduced-motion: reduce) {
        * {
            transition: none !important;
            animation: none !important;
        }
    }
`;
document.head.appendChild(styleElement);
