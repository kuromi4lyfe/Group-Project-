const card = document.querySelector('.facilities-card');
card.addEventListener('hover', () => {
  card.querySelector('.card-desc').textContent = 'Dynamically updated description!';
});