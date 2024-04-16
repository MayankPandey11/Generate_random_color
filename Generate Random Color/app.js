let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let rcolor = randomcolor();
  h3.innerText = rcolor;

  let div = document.querySelector("div");

  div.style.backgroundColor = rcolor;

  console.log("color updated");
});

function randomcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `${red}, ${green}, ${blue}`;
  return `rgb(${color})`;
}
