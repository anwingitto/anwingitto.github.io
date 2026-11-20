
// ANWIN GITTO — PORTFOLIO INTERACTIONS

// Rotating role text
const roles = [
  "Aspiring Software Developer",
  "Python Programmer",
  "AI & Data Analytics Enthusiast",
  "Web Development Learner"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    letterIndex++;
    typingElement.textContent =
      currentRole.slice(0, letterIndex);

    if (letterIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1300);
      return;
    }
  } else {
    letterIndex--;
    typingElement.textContent =
      currentRole.slice(0, letterIndex);

    if (letterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 38 : 75);
}

// Start typing animation
if (typingElement) {
  typeRole();
}

// Automatically update footer year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Close mobile navigation after selecting a section
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navMenu = document.getElementById("mainNav");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu && navMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});

// ==========================================
// ANWIN GITTO - MIDNIGHT BLUE INTERACTIONS
// ==========================================

// 1. Scroll reveal animation

const midnightRevealElements = document.querySelectorAll(
    ".section-heading, " +
    ".content-panel, " +
    ".stat-card, " +
    ".skill-card, " +
    ".project-feature, " +
    ".project-card, " +
    ".timeline-item, " +
    ".recognition-card, " +
    ".contact-panel"
);

// Add animation class to each element
midnightRevealElements.forEach((element, index) => {
    element.classList.add("reveal");

    // Small delay for cards in the same group
    const siblings = Array.from(element.parentElement.children);
    const siblingIndex = siblings.indexOf(element);

    element.style.setProperty(
        "--reveal-delay",
        `${(siblingIndex % 4) * 100}ms`
    );
});

// Observe elements as they enter the screen
const midnightObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    }
);

midnightRevealElements.forEach((element) => {
    midnightObserver.observe(element);
});


// 2. Navbar background transition

const midnightNavbar = document.querySelector(".navbar");

function updateMidnightNavbar() {
    if (!midnightNavbar) return;

    midnightNavbar.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );
}

window.addEventListener(
    "scroll",
    updateMidnightNavbar,
    { passive: true }
);

updateMidnightNavbar();


// 3. Active navigation link

const midnightSections = document.querySelectorAll(
    "section[id]"
);

const midnightNavLinks = document.querySelectorAll(
    ".navbar .nav-link"
);

const midnightSectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            midnightNavLinks.forEach((link) => {
                const isActive =
                    link.getAttribute("href") ===
                    "#" + entry.target.id;

                link.classList.toggle("active", isActive);
            });
        });
    },
    {
        rootMargin: "-25% 0px -65% 0px"
    }
);

midnightSections.forEach((section) => {
    midnightSectionObserver.observe(section);
});
