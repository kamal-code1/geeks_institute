const div = document.getElementById("container");
console.log(div);

const ulElements = document.querySelectorAll("ul.list");
ulElements.forEach((ul, index) => {
  if (index === 0) {
    const peteLi = ul.querySelector("li:nth-child(2)");
    if (peteLi) peteLi.textContent = "Richard";
  }
});

if (ulElements[1]) {
  const secondLi = ulElements[1].querySelector("li:nth-child(2)");
  if (secondLi) secondLi.remove();
}

ulElements.forEach(ul => {
  const firstLi = ul.querySelector("li:first-child");
  if (firstLi) firstLi.textContent = "YourName";
});

ulElements.forEach(ul => ul.classList.add("student_list"));

if (ulElements[0]) {
  ulElements[0].classList.add("university", "attendance");
}

div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

ulElements.forEach(ul => {
  const danLi = Array.from(ul.querySelectorAll("li")).find(li => li.textContent === "Dan");
  if (danLi) danLi.style.display = "none";
});

const richardLi = ulElements[0].querySelector("li:nth-child(2)");
if (richardLi && richardLi.textContent === "Richard") {
  richardLi.style.border = "2px solid black";
}

document.body.style.fontSize = "16px";

if (div.style.backgroundColor === "lightblue") {
  const users = Array.from(div.nextElementSibling.querySelectorAll("li"))
    .map(li => li.textContent)
    .join(" and ");
  alert(`Hello ${users}`);
}
