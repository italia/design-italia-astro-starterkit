document.addEventListener("DOMContentLoaded", function () {
  // Initialize all NavScroll components
  const navScrollElements = document.querySelectorAll("[data-bs-navscroll]");
  navScrollElements.forEach((element) => {
    new bootstrap.NavScroll(element);
  });
});
