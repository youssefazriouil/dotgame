import { isElementInViewport } from "./helpers.js";

const makeDot = node => {
  const dot = document.createElement("div");
  dot.addEvenListener('')
  dot.classList.add("dot");
  node.appendChild(dot);
};

const clickDot = dotEl => {
  console.log('clicked')
}

const cleanUpDots = bodyEl => {
  const allDots = bodyEl.getElementsByClassName("dot")
  console.log('allDots',allDots)
  for(const dot of allDots) {
    !isElementInViewport(dot) && dot.remove()
  }
};

const handleTick = bodyEl => {
  cleanUpDots(bodyEl);
  makeDot(bodyEl);
};

const init = () => {
  const bodyEl = document.getElementsByTagName("body")[0];
  // const dotInterval = setInterval(() => handleTick(bodyEl), 1000)
};
init();
