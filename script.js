document.addEventListener('DOMContentLoaded', function () {
  const introWrapper = document.getElementById('introWrapper');
  const introScreen = document.getElementById('introScreen');
  const startScreen = document.getElementById('startScreen');
  const startGameBtn = document.getElementById('startGameBtn');

  document.getElementById('modeIntense').addEventListener('click', () => {
    localStorage.setItem('gameMode', 'intense');
    transitionToStart();
  });

  document.getElementById('modeHidden').addEventListener('click', () => {
    localStorage.setItem('gameMode', 'hidden');
    transitionToStart();
  });

  function transitionToStart() {
    introWrapper.style.display = 'none';
    startScreen.style.display = 'flex';
    startScreen.style.opacity = 1;
  }

  startGameBtn.addEventListener('click', () => {
    const mode = localStorage.getItem('gameMode') || 'default';
    alert("Игра начинается в режиме: " + mode);
    // startGame(); // ← потом добавим вызов основного сюжета
  });
});
