const burguer = document.querySelector("#burguer");
const menu = document.querySelector(".nav-nav");

burguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});