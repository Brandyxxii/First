document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all navbar links
    const navbarLinks = document.querySelectorAll('#navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Enhance specific text appearance dynamically
    const welcomeText = document.querySelector('#home h1 .highlight');
    if (welcomeText) {
        welcomeText.style.fontSize = '2em'; // Bigger
        welcomeText.style.fontWeight = 'bold'; // Bolder
    }

    // Hover animation for header sections
    const header = document.querySelector('header');
    header.addEventListener('mouseover', () => {
        header.style.transition = 'transform 0.5s';
        header.style.transform = 'scale(1.05)';
    });
    header.addEventListener('mouseout', () => {
        header.style.transform = 'scale(1)';
    });

    // Build-up animation as you scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('build-up');
            }
        });
    }, { threshold: 0.1 });

    // Add the sections you want to animate on scroll
    const sectionsToAnimate = document.querySelectorAll('#about, #projects, #lesson-plan');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Additional enhancements
    // Pulse effect on 'About Me' text
    const aboutMeText = document.querySelector('#about .about-me-text h2');
    aboutMeText.addEventListener('mouseover', () => {
        aboutMeText.classList.add('pulse');
    });

    // Implementing the pulse effect using keyframes in CSS
    // Ensure to add the corresponding CSS for the 'pulse' class and 'build-up' class
});