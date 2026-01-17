const sidebar = document.getElementById("sidebar");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
});