import { isElementInViewport } from "./helpers.js";

const makeDot = bodyEl => {
  const dot = document.createElement("div");
  dot.addEventListener('click', clickDot);
  dot.classList.add("dot");
  bodyEl.appendChild(dot);
};

const clickDot = ({target: dotEl}) => {
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
  const headerEl = document.createElement('header');
  bodyEl.prepend(headerEl)
  
  // const dotInterval = setInterval(() => handleTick(bodyEl), 1000)
};
init();
