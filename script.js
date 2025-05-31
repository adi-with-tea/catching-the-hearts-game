const game = document.getElementById("game");
const catcher = document.getElementById("catcher");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const winMessage = document.getElementById("win-message");
const bestScoreDisplay = document.getElementById("best-score");

let score = 0;
let bestScore = localStorage.getItem("bestScore") || 0;
let timeLeft = 0;
let heartInterval;
let timerInterval;

// Load sounds
const tingSound = new Audio("ting.mp3");
const yaySound = new Audio("yay.mp3");
const gameoverSound = new Audio("gameover.mp3");

bestScoreDisplay.textContent = `Best: ${bestScore}`;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 370 + "px";
  heart.style.top = "0px"; // ensure heart starts at the top
  game.appendChild(heart);

  let heartFall = setInterval(() => {
    let heartTop = parseInt(heart.style.top) || 0;
    heartTop += 5;
    heart.style.top = heartTop + "px";

    const heartLeft = parseInt(heart.style.left);
    const catcherLeft = parseInt(window.getComputedStyle(catcher).left);

    const heartBottom = heartTop + 30;
    const catcherTop = 480;

    if (
      heartBottom >= catcherTop &&
      heartLeft + 30 >= catcherLeft &&
      heartLeft <= catcherLeft + 80
    ) {
      clearInterval(heartFall);
      heart.remove();

      // Clone sound to avoid overlap
      const ting = tingSound.cloneNode();
      ting.currentTime = 0;
      ting.play();

      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    } else if (heartTop > 500) {
      clearInterval(heartFall);
      heart.remove();
    }
  }, 20);
}

// Replace mouse movement with keyboard control
document.addEventListener("keydown", (e) => {
  const catcherLeft = parseInt(window.getComputedStyle(catcher).left);
  const step = 20;

  if (e.key === "ArrowLeft" && catcherLeft > 0) {
    catcher.style.left = Math.max(0, catcherLeft - step) + "px";
  } else if (e.key === "ArrowRight" && catcherLeft + 80 < 400) {
    catcher.style.left = Math.min(320, catcherLeft + step) + "px";
  }
});

function startGame(duration) {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  timeLeft = duration;
  timerDisplay.textContent = `Time: ${timeLeft}s`;
  winMessage.style.display = "none";

  heartInterval = setInterval(createHeart, 700);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(heartInterval);
  clearInterval(timerInterval);

  if (score >= 10) {
    winMessage.style.display = "block";
    yaySound.play();
    setTimeout(() => {
      window.location.href = "date.html";
    }, 3000);
  } else {
    gameoverSound.play();
    alert("Game over! Try again.");
  }

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
    bestScoreDisplay.textContent = `Best: ${bestScore}`;
  }
}
