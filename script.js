const name = "DARSH RAJ";
const nameText = document.getElementById("name-text");
const subtitle = document.getElementById("subtitle");
const quote = document.getElementById("quote");

let index = 0;

function typeName() {
    if (index < name.length) {
        nameText.textContent += name.charAt(index);
        index++;
        setTimeout(typeName, 120);
    } else {
        showDetails();
    }
}

function showDetails() {
    subtitle.classList.remove("hidden");
    quote.classList.remove("hidden");

    subtitle.classList.add("slide-up");

    setTimeout(() => {
        quote.classList.add("slide-up");
    }, 300);
}

// Start typing when page loads
window.onload = typeName;

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Fade-in Animation on Scroll =====
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

 window.addEventListener("load", () => {
    document.body.offsetHeight; // force repaint
  });

document.querySelectorAll("section, .project, .job, li").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});

