// Typing effect
const text = ["DSA Enthusiast", "AI/ML Learner", "Future Security Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerHTML = current;

        if (j === text[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(type, 100);
}

type();


// Scroll reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
