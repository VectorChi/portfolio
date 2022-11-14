let toggleIcon = document.getElementById("nav_icon");

toggleIcon.onclick = function () {
  document.body.classList.toggle("dark_theme");
  if (document.body.classList.contains("dark_theme")) {
    toggleIcon.src = "./images/sun.svg";
  } else {
    toggleIcon.src = "./images/moon.svg";
  }
};
