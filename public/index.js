const makeDot = (node) => {
  const dot = document.createElement("div");
  dot.classList.add("dot")
  node.appendChild(dot)
};

const init = () => {
  const bodyTag = document.getElementsByTagName('body')[0]
  makeDot(bodyTag)
  
}
init()
// document.on("load", console.log("blablabla"));
// console.log('kazkazkAZ')
