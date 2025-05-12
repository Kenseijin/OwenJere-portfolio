// Toggle navbar for mobile view
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // change icon when active
    navbar.classList.toggle('active'); // toggle nav links visibility
};

// Highlight active section link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    // Optional: Close menu on scroll (for mobile UX)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ScrollReveal Configurations
ScrollReveal({
  reset: true,              // Animations repeat on scroll up/down
  distance: '60px',         // Distance element moves
  duration: 1000,           // Animation duration in ms
  delay: 200                // Delay before animation starts
});

// Targeting elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//toogle themes
const themeToggle = document.querySelector('#theme-toggle');

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.classList.replace('bx-moon', 'bx-sun');
}

themeToggle.onclick = () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    themeToggle.classList.replace('bx-moon', 'bx-sun');
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.classList.replace('bx-sun', 'bx-moon');
    localStorage.setItem("theme", "dark");
  }
};
