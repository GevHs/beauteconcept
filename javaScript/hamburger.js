
const hamburgerMenu = document.querySelector('.header-hamburger-menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('show');
});


document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
});
