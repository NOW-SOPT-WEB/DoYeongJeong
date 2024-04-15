export const sideNavAnimation = () => {
  const hamburger = document.getElementById("hamburger");
  const navClose = document.getElementsByClassName("nav_close")[0];
  const navBar = document.getElementsByClassName("side_nav")[0];

  hamburger.addEventListener("click", () => {
    navBar.style.transform = "translateX(0)";
  });

  navClose.addEventListener("click", () => {
    navBar.style.transform = "translateX(200px)";
  });
};
