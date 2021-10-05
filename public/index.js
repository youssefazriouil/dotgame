const makeDot = () => {
  document.body.appendChild(document.createElement("div").classList.add("yous"));
};

document.on("load", makeDot());
