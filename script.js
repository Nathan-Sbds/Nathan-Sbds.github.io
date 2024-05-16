const sections = document.querySelectorAll('main section');

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
});

window.addEventListener('load', () => {
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

const menuButton = document.querySelector('nav button');
const menu = document.getElementById('menu-deroulant');
const closeButtons = document.querySelectorAll("#close-menu");


menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);

    if (!isExpanded) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

closeButtons.forEach(closeButton =>
    closeButton.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menu.style.display = 'none';
    })
);


const form = document.getElementById('contact');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
        event.preventDefault();
        emailInput.setCustomValidity('Veuillez entrer une adresse email valide.');
        emailInput.reportValidity();
        emailInput.focus();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}