document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const currentId = entry.target.id;

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }
            });
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});

function checkScreenSize() {
    if (window.innerWidth < 1000) {
        alert(">Hey! This site is currently set up only for desktop, so please change your mobile settings or preferably use a desktop device! Thanks :)")
    }
}

checkScreenSize();
window.addEventListener("resize", checkScreenSize);
