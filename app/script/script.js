const menuToggle = document.getElementById("menu-toggle");
const form = document.querySelector("[data-form]");
const email = document.querySelector("[data-email-input]");
const errorMessage = document.querySelector("[data-error-message]");

menuToggle.addEventListener("click", () => {
  const header = document.querySelector(".header");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }

  const navSite = document.querySelector(".site-nav");
  if (navSite.style.display === "block") {
    navSite.style.display = "none";
  } else {
    navSite.style.display = "block";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2500,
  adaptiveHeight: false,
  responsive: {
    1024: {
      dots: false,
    },
  },
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail(email);
});

function validateEmail(input) {
  let emailformat =
    /^([a-zA-z0-9\.-]+)@([a-zA-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;

  if (emailformat.test(input.value)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter a valid email";
  }

  if (input.value === "" || input.value === null) {
    errorMessage.textContent = "please insert an email";
  }
}
