import { SHOPPING_LIST } from "./const.js";

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const tableBody = document
  .querySelector(".cart_table")
  .getElementsByTagName("tbody")[0];

cart.forEach((id) => {
  const item = SHOPPING_LIST.find((item) => item.id === id);
  if (item) {
    const row = tableBody.insertRow();

    const checkboxCell = row.insertCell(0);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "itemCheckbox";
    checkbox.value = item.id;
    checkboxCell.appendChild(checkbox);

    const infoCell = row.insertCell(1);
    const info = document.createElement("div");
    info.className = "info__box";

    const img = document.createElement("img");
    img.src = item.img;
    img.style.width = "80px";

    const p = document.createElement("p");
    p.innerText = item.title;
    info.appendChild(img);
    info.appendChild(p);
    infoCell.appendChild(info);

    row.insertCell(2).innerText = item.price;
    row.insertCell(3).innerText = item.category;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete__btn";
    deleteBtn.innerText = "삭제";
    row.insertCell(4).appendChild(deleteBtn);
  }
});
