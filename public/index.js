const makeDot = () => {
  document.body.appendChild(
    document.createElement("div").classList.add("yous")
  );
};

const init = () => {
  const bodyTag = document.getElementsByTagName('body')[0]
  const h1 = document.createElement('h1')
  h1.append('Youssef')
  bodyTag.appendChild(h1)
}
init()
// document.on("load", console.log("blablabla"));
// console.log('kazkazkAZ')
