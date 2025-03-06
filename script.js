// Select the Back to Top button
const backToTopButton = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll back to the top when clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const textElement = document.getElementById("typing-text");
const textArray = ["Welcome to My Portfolio", "I am a Web Developer", "I Love Creating Websites"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        textElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000); // Wait before erasing
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to next phrase
        setTimeout(typeText, 500);
    }
}

// Start the typing effect
typeText();
