const form = document.querySelector("#special-day-form");
const title = form.querySelector("input:first-child");
const dYear = document.querySelector("#D-Year");
const dMonth = document.querySelector("#D-Month");
const dDate = document.querySelector("#D-Date");

const show_result = document .querySelector("#result");
const show_Title = document.querySelector("#dday-title");
const show_dday = document.querySelector("#dday");

const DDAY = "dday";

function getDay(event) {
  event.preventDefault();
  const today = new Date();
  const sel_year = dYear.valueAsNumber;
  const sel_mon = dMonth.valueAsNumber;
  const sel_date = dDate.valueAsNumber;
  const special = new Date(sel_year, sel_mon-1, sel_date);
  const gap = special.getTime() - today.getTime();
  const day = Math.floor(gap / (1000*60*60*24));

  form.style.display = "none";

  const dayObj = {
    title: title.value,
    day: day,
  }
  paintDay(dayObj);
  saveDay(dayObj);
}

function paintDay(dayObj) {
  show_Title.innerText = dayObj.title;
  if (dayObj.day > 0) {
    show_dday.innerText = `D-${dayObj.day}`;
  } else {
    show_dday.innerText = `D+${-dayObj.day}`;
  }
  show_result.style.display = "flex";
}

function saveDay(dayObj) {
  localStorage.setItem(DDAY, JSON.stringify(dayObj));
}

form.addEventListener("submit", getDay);

const savedDate = localStorage.getItem(DDAY);

if (savedDate !== null) {
  const parsedDate = JSON.parse(savedDate);
  form.style.display = "none";
  paintDay(parsedDate);
}

// 디데이 수정 기능
const modify = document.querySelector("#modify");

function onClickModify() {
  localStorage.removeItem(DDAY);
  form.style.display = "flex";
  show_result.style.display = "none";
}

modify.addEventListener("click", onClickModify);