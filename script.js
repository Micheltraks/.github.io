const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-button");
const navToggle = document.querySelector("#nav-toggle");

if (dropdown && dropdownButton) {
  dropdownButton.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      dropdownButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navToggle) {
      navToggle.checked = false;
    }
  });
});
