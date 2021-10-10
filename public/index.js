import { isElementInViewport } from "./helpers.js";

const makeDot = node => {
  const dot = document.createElement("div");
  dot.addEventListener('click', clickDot);
  dot.classList.add("dot");
  node.appendChild(dot);
};

const clickDot = dotEl => {
  console.log('clicked', dotEl)
}

const cleanUpDots = bodyEl => {
  const allDots = bodyEl.getElementsByClassName("dot")
  for(const dot of allDots) {
    !isElementInViewport(dot) && dot.remove()
  }
};

const handleTick = bodyEl => {
  cleanUpDots(bodyEl);
  makeDot(bodyEl);
};

const init = () => {
  const score = 0;
  const bodyEl = document.getElementsByTagName("body")[0];
  // const dotInterval = setInterval(() => handleTick(bodyEl), 1000)
};
init();
