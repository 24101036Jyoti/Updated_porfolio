// মাউস স্ক্রল করার সময় শুধুমাত্র সঠিক ১টি বাটন হাইলাইট করার ফিক্সড কোড
const navLinks = document.querySelectorAll("nav ul li a");
const allSections = document.querySelectorAll("section[id]");

let isScrolling = false;

window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let currentSectionId = "";

            allSections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                // স্ক্রিনের মাঝ বরোবর সেকশন আসলে আইডি ক্যাপচার করবে
                if (window.scrollY >= sectionTop - 150) {
                    currentSectionId = section.getAttribute("id");
                }
            });

            // সব লিংক থেকে active ক্লাস আগে রিমুভ করে শুধুমাত্র ১টি একটিভ করবে
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (currentSectionId && link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });

            isScrolling = false;
        });
        isScrolling = true;
    }
}, { passive: true });

function scrollToSection() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.querySelector(".hero-text button");
    const aboutSection = document.getElementById("about");

    if (exploreBtn && aboutSection) {
        exploreBtn.addEventListener("click", () => {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});