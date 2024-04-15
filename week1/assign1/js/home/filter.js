import { SHOPPING_LIST } from "../constants/const.js";

export const filteredItems = () => {
  const section = document.querySelector("#list");

  document.querySelectorAll(".category a").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const category = event.target.getAttribute("href").substring(1);

      while (section.firstChild) {
        section.removeChild(section.firstChild);
      }

      const categoryName = document.createElement("h2");

      if (category === "all") {
        categoryName.textContent = "전체";
      }
      if (category === "sports") {
        categoryName.textContent = "운동용품";
      }
      if (category === "tech") {
        categoryName.textContent = "개발용품";
      }
      if (category === "clothes") {
        categoryName.textContent = "옷";
      }

      section.appendChild(categoryName);

      const filteredItems = SHOPPING_LIST.filter((item) => {
        if (category !== "all") return item.category === category;
        return true;
      });

      const container = document.createElement("div");
      container.className = "container";
      section.appendChild(container);

      filteredItems.forEach((item) => {
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
    });
  });
};
