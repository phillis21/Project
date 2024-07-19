let current = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let actualDate = days[current.getDay()];
console.log(actualDate);

let hour = current.getHours();
let minutes = current.getMinutes();

let changedate = document.querySelector("span.datetime");
console.log(changedate);
changedate.innerHTML = `${actualDate} ${hour}:${minutes}`;


function search(event) {
  event.preventDefault();
  let input = document.querySelector(".search-input");
  let city = document.querySelector("h1.current-city");
  city.innerHTML = input.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", search);