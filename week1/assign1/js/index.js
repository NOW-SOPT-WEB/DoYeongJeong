import { SHOPPING_LIST } from "./const.js";

const section = document.querySelector("#list");

const categoryName = document.createElement("h2");
categoryName.textContent = "전체";
section.appendChild(categoryName);

const container = document.createElement("div");
container.className = "container";
section.appendChild(container);

SHOPPING_LIST.forEach((item) => {
  const itemDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;

  const infoDiv = document.createElement("div");
  const likeButton = document.createElement("button");
  const likeImg = document.createElement("img");
  likeImg.id = "like";
  likeImg.src = "./img/icon/like.svg";
  likeImg.alt = "좋아요";
  likeButton.appendChild(likeImg);

  const titleSpan = document.createElement("span");
  titleSpan.className = "title";
  titleSpan.textContent = item.title;

  const priceSpan = document.createElement("span");
  priceSpan.className = "price";
  priceSpan.textContent = `${item.price.toLocaleString()}`;

  infoDiv.appendChild(likeButton);
  infoDiv.appendChild(titleSpan);
  infoDiv.appendChild(priceSpan);
  itemDiv.appendChild(img);
  itemDiv.appendChild(infoDiv);
  container.appendChild(itemDiv);
});
