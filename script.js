// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Read More toggles
document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.parentElement;
        const moreText = item.querySelector(".more-text");

        if (moreText.style.display === "block") {
            moreText.style.display = "none";
            button.textContent = "Read More";
        } else {
            moreText.style.display = "block";
            button.textContent = "Read Less";
        }
    });
});

// Fade-in on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
