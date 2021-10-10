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
    console.log('isElementInViewport',isElementInViewport(dot))
    !isElementInViewport(dot) && dot.remove()
  }
};

const handleTick = bodyEl => {
  cleanUpDots(bodyEl);
  makeDot(bodyEl);
  
};

const init = () => {
  const bodyTag = document.getElementsByTagName("body")[0];
  // const dotInterval = setInterval(() => handleTick(bodyTag), 1000)
};
init();
