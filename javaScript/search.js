document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.search-input-icon');
  const searchBlock = document.querySelector('.search-block');

  searchIcon.addEventListener('click', () => {
    if (searchBlock.style.display === 'none' || searchBlock.style.display === '') {
      searchBlock.style.display = 'block';
    } else {
      searchBlock.style.display = 'none';
    }
  });

  document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchBlock.contains(event.target)) {
      searchBlock.style.display = 'none';
    }
  });
});
