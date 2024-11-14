
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
