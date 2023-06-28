//Itens
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("MenuBtn");
const overlay = document.getElementById("overlay");

//Click no Menu
menuBtn.onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("hidden");
};

overlay.onclick = () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("hidden");
};