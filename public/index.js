import { isElementInViewport, getRandomNumber } from "./helpers.js";

const makeDot = mainEl => {
  const dot = document.createElement("div");
  const size = getRandomNumber(10, 100);
  dot.style.setProperty('--dot-size', size+'px');
  dot.addEventListener('click', clickDot);
  dot.classList.add("dot");
  mainEl.appendChild(dot);
};

const updateScore = (score) => {
  const scoreEl = document.getElementById('score');
  scoreEl.textContent = parseInt(scoreEl.textContent) + parseInt(score);
}

const clickDot = ({target: dotEl}) => {
  const size = getComputedStyle(dotEl).width.replace('px', '');
  updateScore(size);
}

const cleanUpDots = mainEl => {
  const allDots = mainEl.getElementsByClassName("dot")
  for(const dot of allDots) {
    !isElementInViewport(dot) && dot.remove()
  }
};

const handleTick = mainEl => {
  cleanUpDots(mainEl);
  makeDot(mainEl);
};

const init = () => {
  const score = 0;
  const mainEl = document.getElementsByTagName("main")[0];

  const dotInterval = setInterval(() => handleTick(mainEl), 1000)
};
init();
