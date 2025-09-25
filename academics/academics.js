
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Hover effect for CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
      });
      button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    });

    // Dropdown toggle for program details
    document.querySelectorAll('.dropdown-button').forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const details = document.getElementById(targetId);
        details.classList.toggle('show');
        this.classList.toggle('active');
      });
    });

    // Scroll animation for sections
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });
