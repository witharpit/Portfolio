// Select all sections
const sections = document.querySelectorAll("section");

// Function to check if a section is in the viewport
function revealSection() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

// Run function on scroll
window.addEventListener("scroll", revealSection);

// Run on page load
revealSection();