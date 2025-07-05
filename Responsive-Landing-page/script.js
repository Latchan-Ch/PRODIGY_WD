const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#333";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

