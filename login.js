const contact = document.querySelector(".contact-button");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = document.querySelector(".login-user");
const form = popup.querySelector("form");
const slider = document.querySelector(".features");
const slideFst = document.querySelector(".slider-buttonFst");
const slideSnd = document.querySelector(".slider-buttonSnd");
const slideThd = document.querySelector(".slider-buttonTrd");
const cleardot = document.querySelectorAll(".current");

contact.addEventListener("click",function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();

});

close.addEventListener("click",function (evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit",function (evt) {
  evt.preventDefault();
});

slideSnd.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider.classList.remove("featuresFst");
  slider.classList.add("featuresSnd");
  slider.classList.remove("cleardot");
  slideSnd.classList.add("current");
});
