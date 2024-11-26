function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const isActive = navLinks.classList.toggle('active');
    navLinks.setAttribute('aria-expanded', isActive);
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navLinks.setAttribute('aria-expanded', false);
        }
    });
});
