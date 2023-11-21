let $ = document;
let redElm = $.querySelector(".valueRed");
let blueElm = $.querySelector(".valueBlue");
let greenElm = $.querySelector(".valueGreen");
setInterval(function () {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  document.body.style.background =
    "rgb(" + red + "," + blue + "," + green + ")";
  redElm.innerHTML = red;
  blueElm.innerHTML = blue;
  greenElm.innerHTML = green;
  document.documentElement.style.setProperty(
    "--color",
    "rgb(" + red + "," + blue + "," + green + ")"
  );
}, 3000);
