const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

const hero = document.querySelector(".hero");

if (hero) {
  const updateShift = (clientX, clientY) => {
    const rect = hero.getBoundingClientRect();
    const offsetX = ((clientX - rect.left) / rect.width - 0.5) * 18;
    const offsetY = ((clientY - rect.top) / rect.height - 0.5) * 18;
    hero.style.setProperty("--hero-shift-x", `${offsetX.toFixed(2)}px`);
    hero.style.setProperty("--hero-shift-y", `${offsetY.toFixed(2)}px`);
  };

  hero.addEventListener("pointermove", (event) => {
    updateShift(event.clientX, event.clientY);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
  });
}
