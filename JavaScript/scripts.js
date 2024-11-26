const products = [
    { id: 1, image: '/images/1.png', title: 'Producto 1', description: 'Descripción del Producto 1', price: '$25.00' },
    { id: 2, image: '/images/ojos.png', title: 'Producto 2', description: 'Descripción del Producto 2', price: '$30.00' },
    { id: 3, image: '/images/fondo.png', title: 'Producto 3', description: 'Descripción del Producto 3', price: '$28.00' }
];

function showPopup(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("popup-image").src = product.image;
        document.getElementById("popup-title").textContent = product.title;
        document.getElementById("popup-description").textContent = product.description;
        document.getElementById("popup-price").textContent = product.price;
        document.getElementById("popup").classList.add("visible");
    }
}

function closePopup() {
    document.getElementById("popup").classList.remove("visible");
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
