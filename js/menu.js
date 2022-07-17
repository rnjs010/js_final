const openMenu = document.querySelector("#open-menu");
const icon = document.querySelector("#menu i");
const greet = document.querySelector("#greeting");

function onClickMenu() {
  
  if (icon.classList.contains("fa-bars")) {
    //메뮤를 열고 아이콘을 X로 변경한다.
    openMenu.classList.remove("hidden");
    icon.classList.add("fa-xmark");
    greet.classList.add("hidden");
    icon.classList.remove("fa-bars");
    upClock.classList.remove("hidden");
    clock.classList.add("hidden");
  } else {
    //메뉴를 닫고 아이콘을 -로 변경한다.
    openMenu.classList.add("hidden");
    icon.classList.add("fa-bars");
    greet.classList.remove("hidden");
    icon.classList.remove("fa-xmark");
    upClock.classList.add("hidden");
    clock.classList.remove("hidden");
  }
}

icon.addEventListener("click", onClickMenu);