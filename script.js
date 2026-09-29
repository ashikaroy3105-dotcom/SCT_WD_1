const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const links  = document.getElementById("nav-links");

/* 1. Change navbar style when the page is scrolled */
function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* 2. Mobile menu open / close */
function setMenu(open) {
  links.classList.toggle("open", open);
  navbar.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.matchMedia("(min-width: 769px)").addEventListener("change", e => { if (e.matches) setMenu(false); });

/* 3. Highlight the menu link of the section currently on screen */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.querySelectorAll("a").forEach(a =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
      );
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));

/* 4. Simple form check (no server yet) */
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("form-status");
  if (!form.checkValidity()) {
    status.style.color = "#b3261e";
    status.textContent = "Please fill in your name, a valid email, and your project details.";
    return;
  }
  status.style.color = "";
  status.textContent = "Thanks! We received your message and will reply within two working days.";
  form.reset();
});