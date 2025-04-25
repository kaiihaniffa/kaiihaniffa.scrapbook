function revealMessage() {
  const message = document.getElementById("loveMessage");
  message.classList.remove("hidden");

  // Optional: floating hearts animation
  for (let i = 0; i < 10; i++) {
    createFloatingHeart();
  }
}

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  heart.style.animation = "floatUp 4s ease-out forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

const style = document.createElement('style');
style.textContent = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
