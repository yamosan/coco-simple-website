let el = document.documentElement;

document.getElementById("change-mode").onclick = () => {
  console.log("change mode");
  const nowMode = el.getAttribute("theme");
  if (nowMode == "dark") {
    el.setAttribute("theme", "light");
  } else {
    el.setAttribute("theme", "dark");
  }
};
