const logoutBtn = document.querySelector("#logout");

function onClickLogout() {
  localStorage.removeItem("username");
  localStorage.removeItem("todo");
  localStorage.removeItem("dday");
  location.reload();
}

logoutBtn.addEventListener("click", onClickLogout);