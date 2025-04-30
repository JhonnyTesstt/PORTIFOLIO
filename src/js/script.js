// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    const mobileCloseBtn = document.getElementById('mobile_close_btn');
    const mobileNavLinks = document.querySelectorAll('#mobile_nav_list .nav-item a');
    const mainContent = document.getElementById('content'); // Assuming 'content' is your main content area
    const footer = document.querySelector('footer');

    const openMenu = () => {
        mobileMenu.hidden = false;
        mobileMenu.classList.add('active');
        mobileBtn.setAttribute('aria-expanded', 'true');
        // Optional: Prevent scrolling on the body when menu is open
        document.body.style.overflow = 'hidden'; 
        // Optional: Add overlay or blur effect to main content
        if (mainContent) mainContent.style.filter = 'blur(3px)';
        if (footer) footer.style.filter = 'blur(3px)';
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
        // Wait for transition to finish before hiding
        mobileMenu.addEventListener('transitionend', () => {
            mobileMenu.hidden = true;
        }, { once: true });
        // Restore body scroll
        document.body.style.overflow = '';
        // Remove overlay/blur
        if (mainContent) mainContent.style.filter = '';
        if (footer) footer.style.filter = '';
    };

    if (mobileBtn && mobileMenu && mobileCloseBtn) {
        mobileBtn.addEventListener('click', () => {
            if (mobileMenu.hidden) {
                openMenu();
            } else {
                closeMenu();
            }
        });

        mobileCloseBtn.addEventListener('click', closeMenu);

        // Close menu when a navigation link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu if user clicks outside of it (optional)
        // document.addEventListener('click', (event) => {
        //     if (mobileMenu.classList.contains('active') && !mobileMenu.contains(event.target) && event.target !== mobileBtn) {
        //         closeMenu();
        //     }
        // });
    }

    // ScrollReveal Initialization
    // Check if ScrollReveal is loaded
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '60px', // Distance element moves
            duration: 2000, // Animation duration
            easing: 'ease-in-out', // Animation timing function
            // reset: true, // Uncomment to reveal elements again on scroll up
            delay: 100, // Delay before animation starts
            viewFactor: 0.2 // Percentage of element needed in viewport to trigger
        });

        // Apply reveal effect to elements with the .scroll-reveal class
        sr.reveal('.scroll-reveal', { 
            origin: 'bottom', // Animate from bottom
            interval: 150 // Staggered effect for multiple elements
        });
        
        // Example of more specific reveals if needed:
        // sr.reveal('.home-content', { origin: 'left' });
        // sr.reveal('.home-banner', { origin: 'right', delay: 300 });
        // sr.reveal('.certificate-card', { interval: 100 });
        // sr.reveal('.timeline-event', { origin: 'left', interval: 150 });

    } else {
        console.warn('ScrollReveal library not loaded.');
        // Fallback: Make elements visible if ScrollReveal fails
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.style.visibility = 'visible';
        });
    }

    // Add active class to nav link corresponding to the current section on scroll (Optional)
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#nav_list .nav-item a');
    const mobileNavLinksAll = document.querySelectorAll('#mobile_nav_list .nav-item a');

    const activateNavLink = (id) => {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
        mobileNavLinksAll.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const observerOptions = {
        root: null, // relative to document viewport 
        rootMargin: '-50% 0px -50% 0px', // trigger when section is in the middle 50% of the viewport
        threshold: 0 // trigger as soon as any part enters/leaves the rootMargin area
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateNavLink(entry.target.id);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});

