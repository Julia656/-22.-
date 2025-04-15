const container = document.getElementById('container');

container.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    alert(`Ви натиснули: ${event.target.textContent}`);
  }
});