document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to sections
  const sections = document.querySelectorAll('.resume-section');
  sections.forEach((section, index) => {
    section.classList.add('fade-in');
    section.style.animationDelay = `${index * 0.1}s`;
  });

  // Make phone number clickable on mobile
  const phoneElement = document.querySelector('.contact-info p:first-child');
  if (phoneElement && window.innerWidth <= 768) {
    const phoneText = phoneElement.textContent.trim();
    phoneElement.innerHTML = `<i class="fas fa-phone"></i> <a href="tel:${phoneText.replace(/\D/g, '')}">${phoneText}</a>`;
  }

  // Make email clickable
  const emailElement = document.querySelector('.contact-info p:nth-child(2)');
  if (emailElement) {
    const emailText = emailElement.textContent.trim();
    emailElement.innerHTML = `<i class="fas fa-envelope"></i> <a href="mailto:${emailText}">${emailText}</a>`;
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });

  // Certificate view button effects
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
      btn.style.boxShadow = '0 5px 15px rgba(58, 134, 255, 0.3)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = 'none';
    });
  });

  // Print button functionality (optional)
  const printBtn = document.createElement('button');
  printBtn.textContent = 'Print Resume';
  printBtn.className = 'print-btn';
  printBtn.addEventListener('click', () => window.print());
  document.querySelector('.left-section').appendChild(printBtn);
});

// Add print button styles
const printStyle = document.createElement('style');
printStyle.textContent = `
  .print-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    transition: all 0.3s;
  }
  .print-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }
  @media print {
    .print-btn {
      display: none;
    }
    body {
      background: white !important;
    }
    .resume-container {
      box-shadow: none !important;
    }
  }
`;
document.head.appendChild(printStyle);
