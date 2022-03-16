const navBtn = document.getElementById("mobile-nav-toggle");
const nav = document.getElementById("primary-navigation");

navBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navBtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navBtn.setAttribute("aria-expanded", false);
  }
})