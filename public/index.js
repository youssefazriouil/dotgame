import { isElementInViewport } from "./helpers.js";

const makeDot = node => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  node.appendChild(dot);
};

const cleanUpDots = bodyEl => {
  const allDots = bodyEl.getElementsByClassName("dot")
  console.log('allDots',allDots)
  for(const dot of allDots) {
    isElementInViewport(dot) && dot.romve()
  }
};

const handleTick = bodyEl => {
  makeDot(bodyEl);
  cleanUpDots(bodyEl);
};

const init = () => {
  const bodyTag = document.getElementsByTagName("body")[0];
  // const dotInterval = setInterval(() => handleTick(bodyTag), 1000)
};
init();
