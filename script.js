
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });

    document.addEventListener("click", event => {
        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });
}

// Automatic copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Close mobile navigation when returning to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && navLinks && menuToggle) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

    }
}

