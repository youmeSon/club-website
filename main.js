const toggleBtn = document.querySelector(".navBarToggle");
const navBar = document.querySelector(".navBar");

toggleBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');
})