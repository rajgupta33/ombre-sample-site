document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    // Subtle parallax effect on mouse move
    hero.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        
        // Slightly move the background
        hero.style.backgroundPosition = `calc(50% + ${xAxis}px) calc(0% + ${yAxis}px)`;

        // Very slightly move the foreground text the opposite way for depth
        if (heroContent) {
            heroContent.style.transform = `translate(${xAxis * -0.5}px, ${yAxis * -0.5}px)`;
        }
    });

    // Reset positions when mouse leaves
    hero.addEventListener('mouseleave', () => {
        hero.style.backgroundPosition = 'center top';
        
        if (heroContent) {
            heroContent.style.transform = 'translate(0, 0)';
            heroContent.style.transition = 'transform 0.5s ease, background-position 0.5s ease';
            
            // Remove transition after it completes to not lag the mouse move
            setTimeout(() => {
                heroContent.style.transition = 'none';
            }, 500);
        }
    });

    // Optional: Add smooth scrolling for navigation links if needed
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Dropdown Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mobileDropdown = document.getElementById('mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu');

    if (mobileMenuBtn && mobileDropdown && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDropdown.classList.add('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileDropdown.classList.remove('active');
        });
        
        // Close menu when clicking a link
        mobileDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDropdown.classList.remove('active');
            });
        });
    }
});
