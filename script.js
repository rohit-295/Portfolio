// Toggle icon and navbar on menuIcon click
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Smooth scroll to sections and update active nav link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (fromTop >= sectionTop && fromTop < (sectionTop + sectionHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', fromTop > 100);

    // Close the navbar when clicking a nav link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});
;

