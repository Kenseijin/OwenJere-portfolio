document.addEventListener("DOMContentLoaded", function () {
    // Typing effect for hero/home section
    const typed = new Typed('.multiple-text', {
        strings: ["IT Specialist", "Web Developer", "System Admin", "Tech Savvy"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Theme Toggle
    const themeToggle = document.querySelector('#theme-toggle');

    if (themeToggle) {
        // Apply saved theme
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
    }
});
