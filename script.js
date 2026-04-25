// Dark / Light Mode
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
    document.body.classList.toggle("light");
};

// Scroll Animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});