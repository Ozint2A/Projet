let theme = localStorage.getItem("changmod");

const btn = document.getElementById("btn");
const body = document.getElementById("changeMod");

if (theme === "dark") {
  body.style.backgroundColor = "black";
} else {
  body.style.backgroundColor = "white";
}

btn.addEventListener("click", () => {
  if (theme === "light") {
    body.style.backgroundColor = "black";
    theme = "dark";
  } else {
    body.style.backgroundColor = "white";
    theme = "light";
  }
  localStorage.setItem("changmod", theme);
});
