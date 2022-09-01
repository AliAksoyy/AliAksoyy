// * DOM Elements

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");
//* Options
const showAmPm = true;

//* Show Time

function showTime() {
  let today = new Date(),
    //   let today = new Date(2022, 06, 10, 8, 33, 30),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //* Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //* 12 hr format
  hour = hour % 12 || 12;

  //* Output time
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${addZero(sec)} ${
    showAmPm ? amPm : ""
  }`;

  setTimeout(showTime, 1000);
}
//* Add Zeros (sec shows only "0". we have to change it!)
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
//* Set background and Greeting
function setBgGreet() {
  let today = new Date(),
    //   let today = new Date(2022, 06, 10, 8, 33, 30),
    hour = today.getHours();

  if (hour < 12) {
    //?Morning
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Morning";
    document.body.style.color = "white";
  } else if (hour < 16) {
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else if (hour < 18) {
    //? Afternoon
    document.body.style.backgroundImage = "url('./img/evening.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    //? Evening
    document.body.style.backgroundImage = "url('./img/nights.jpg')";
    greeting.textContent = "Good night";
    document.body.style.color = "white";
  }
}

//* Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Enter Name";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
//* Set Name
function setName(e) {
  if (e.type === "keypress") {
    //? make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//* Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "Enter Focus";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//* Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    //? make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
//* Run
showTime();
setBgGreet();
getName();
getFocus();
setName();
