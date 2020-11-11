const contact = document.querySelector(".contact-button");
const popup = document.querySelector(".modal-login");
const close = document.querySelector(".modal-close");
const login = document.querySelector(".login-user");
const form = popup.querySelector("form");


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
