let headerNav = document.getElementById("headerslid");
let logoNav = document.querySelector(".logo");
let burgicon = document.querySelector(".burg-icon");
let contactLog = document.querySelector(".contact");
let menuList = document.querySelector(".menu-list");
burgicon.addEventListener("click", function () {
  logoNav.classList.toggle("active");
  headerNav.classList.toggle("active");
  menuList.classList.toggle("active");
  burgicon.classList.toggle("active");
  contactLog.classList.toggle("active");
  console.log("active");
});
