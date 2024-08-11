// ==== NAVBAR TOGGLE MENU SHOW AND HIDE FUNCTIONALITY ==== //
const navMenu = document.getElementById("nav_menu"),
  toggleBtn = document.getElementById("toggle_btn"),
  closeBtn = document.getElementById("close_btn");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

// ==== ANIMATE ON SCROLL INITIALIZATION  ==== //
AOS.init();

// ==== GSAP ANIMATION ==== //
gsap.from(".main-heading", { opacity: 0, duration: 1, delay: 0.5, y: 50 });
gsap.from(".info-text", { opacity: 0, duration: 1, delay: 1, y: 50 });
gsap.from(".btn_wrapper", { opacity: 0, duration: 1, delay: 1.5, y: 50 });
gsap.from(".team_img_wrapper img", { opacity: 0, duration: 1, delay: 2, y: 50 });