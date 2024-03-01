const toggleBtn = document.getElementById('toggle-btn');
  const body = document.body;
  const image = document.getElementById('image');

  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      image.src = 'https://via.placeholder.com/300/000000/FFFFFF/?text=Dark+Mode+Image';
    } else {
      image.src = 'https://via.placeholder.com/300/FFFFFF/000000/?text=Light+Mode+Image';
    }
  });