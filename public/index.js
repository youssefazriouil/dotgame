import {} from ''

const makeDot = (node) => {
  const dot = document.createElement("div")
  dot.classList.add("dot")
  node.appendChild(dot)
  
};

const cleanUpDots = (node) => {
  const allDots = node.getElementsByClassName('dot')
}

const init = () => {
  const bodyTag = document.getElementsByTagName('body')[0]
  // const dotInterval = setInterval(() => handleTick(bodyTag), 1000)
  
}
init()
