const phrases = ["IT Specialist", "Web Developer", "System Admin", "Tech Savvy"];
const el = document.getElementById("typed-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;

function type() {
  const current = phrases[phraseIndex];
  el.textContent = current.substring(0, charIndex);

  if (!isDeleting) {
    if (charIndex < current.length) {
      charIndex++;
    } else {
      isDeleting = true;
      delay = 1000;
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : delay);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
