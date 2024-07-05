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

    const welcomeText = document.querySelector('#home h1 .highlight');
    if (welcomeText) {
        welcomeText.style.fontSize = '2em'; // Bigger
        welcomeText.style.fontWeight = 'bold'; // Bolder
    }

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

    const sectionsToAnimate = document.querySelectorAll('#about, #projects, #lesson-plan');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    const aboutMeText = document.querySelector('#about .about-me-text h2');
    aboutMeText.addEventListener('mouseover', () => {
        aboutMeText.classList.add('pulse');
    });
});