let theme = "light";

const btn = document.getElementById("btn");
const body = document.getElementById("changeMod");

btn.addEventListener("click", () => {
  if (theme === "light") {
    body.style.backgroundColor = "red";
    theme = "dark";
  } else {
    body.style.backgroundColor = "white";
    theme = "light";
  }
});

let cle = localStorage.getItem("theme");
console.log(cle);

localStorage.setItem("theme", "light");
cle = localStorage.getItem("theme");
console.log(cle);

if (null) {
  console.log("Vrai");
} else {
  console.log("Faux");
}
