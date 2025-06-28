// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
});

// Typing Text Effect
const roles = ["Web Developer", "UI Designer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
  if (charIndex < roles[wordIndex].length) {
    typedText.textContent += roles[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = roles[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2,
};

const reveal = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  section.classList.add("fade-section");
  reveal.observe(section);
});
