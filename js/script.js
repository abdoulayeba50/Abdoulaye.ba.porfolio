/* =========================================================
   ABDOULAYE BA — PORTFOLIO
   Toutes les données facilement modifiables sont regroupées ici.
   ========================================================= */

const portfolioData = {
  name: "Abdoulaye Ba",
  role: "Data Analyst Junior | Ingénierie Logicielle | Développement Web",
  email: "baa108102@gmail.com",
  phone: "+221 77 889 02 34",
  location: "Dakar, Sénégal",
  linkedin: "https://www.linkedin.com/in/abdoulaye-ba-561278382/",
  github: "GITHUB_URL" // <-- Remplace par ton vrai lien GitHub
};

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNav();
  initScrollReveal();
  initProjectFilters();
  initContactForm();
  initBackToTop();
  initActiveNavLink();
});

/* ---------- Thème clair / sombre ---------- */
function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
    toggle.setAttribute("aria-pressed", saved === "dark");
  }

  toggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    toggle.setAttribute("aria-pressed", String(!isDark));
    localStorage.setItem("theme", next);
  });
}

/* ---------- Menu mobile (hamburger) ---------- */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("primary-nav");

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ---------- Apparition progressive au scroll ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(el => observer.observe(el));
}

/* ---------- Filtres de projets ---------- */
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

/* ---------- Formulaire de contact (validation + mailto) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = {
      name: form.querySelector("#name"),
      email: form.querySelector("#email"),
      subject: form.querySelector("#subject"),
      message: form.querySelector("#message"),
    };

    let isValid = true;

    Object.entries(fields).forEach(([key, field]) => {
      const errorEl = document.getElementById(`err-${key}`);
      const parent = field.closest(".form-field");
      let message = "";

      if (!field.value.trim()) {
        message = "Ce champ est requis.";
      } else if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
        message = "Merci d'indiquer un email valide.";
      }

      if (message) {
        isValid = false;
        parent.classList.add("has-error");
        errorEl.textContent = message;
      } else {
        parent.classList.remove("has-error");
        errorEl.textContent = "";
      }
    });

    if (!isValid) return;

    // Pas de backend prévu pour l'instant : ouverture du client email via mailto.
    const subject = encodeURIComponent(fields.subject.value.trim());
    const body = encodeURIComponent(
      `Nom : ${fields.name.value.trim()}\nEmail : ${fields.email.value.trim()}\n\n${fields.message.value.trim()}`
    );
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------- Bouton retour en haut ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Lien de navigation actif selon la section visible ---------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        links.forEach(link => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(section => observer.observe(section));
}
