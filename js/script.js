const weaponBtn = document.querySelectorAll(".item");
const weaponBox = document.querySelector(".box-weapon");
const gameBox = document.querySelector(".box-game");

const playerImg = document.getElementById("player");
const computerImg = document.getElementById("computer");
const hasilText = document.getElementById("hasil");
const resetBtn = document.querySelector(".button");

let skorMenang = 0;
let skorSeri = 0;
let skorKalah = 0;

const skorMenangEl = document.getElementById("skor-menang");
const skorSeriEl = document.getElementById("skor-seri");
const skorKalahEl = document.getElementById("skor-kalah");

const weapons = ["batu", "kertas", "gunting"];

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "batu" && computer === "gunting") ||
    (player === "kertas" && computer === "batu") ||
    (player === "gunting" && computer === "kertas")
  )
    return "win";
  return "lose";
}

function updateSkor() {
  skorMenangEl.textContent = skorMenang;
  skorSeriEl.textContent = skorSeri;
  skorKalahEl.textContent = skorKalah;
}

weaponBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.getAttribute("data-weapon");
    const computerChoice = weapons[Math.floor(Math.random() * 3)];

    hasilText.textContent = "";

    playerImg.src = "assets/batu.png";
    computerImg.src = "assets/batu.png";

    weaponBox.style.display = "none";
    gameBox.style.display = "block";

    setTimeout(() => {
      playerImg.src = `assets/${playerChoice}.png`;
      computerImg.src = `assets/${computerChoice}.png`;

      resetBtn.classList.add("resetAnimation");

      const result = getResult(playerChoice, computerChoice);
      if (result === "win") {
        hasilText.textContent = "You Won!";
        skorMenang++;
      } else if (result === "draw") {
        hasilText.textContent = "It's a Draw!";
        skorSeri++;
      } else {
        hasilText.textContent = "You Lost!";
        skorKalah++;
      }

      updateSkor();
    }, 1900);
  });
});

resetBtn.addEventListener("click", () => {
  gameBox.style.display = "none";
  weaponBox.style.display = "block";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-down").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-left").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-right").forEach((el) => {
  observer.observe(el);
});

const dangerBtn = document.querySelector(".danger");
const body = document.querySelector("body");

dangerBtn.addEventListener("click", () => {
  body.classList.toggle("active");
});
