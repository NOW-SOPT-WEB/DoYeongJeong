import { SHOPPING_LIST } from "./const.js";

const selectedItems = SHOPPING_LIST.slice(0, 5);

const createBannerItems = (items) =>
  items
    .map(
      (item) => `
        <ol class="item">
            <img src="${item.img}" alt="${item.title}" />
        </ol>
        `
    )
    .join("");

const bannerHTML1 = createBannerItems(selectedItems);
const bannerHTML2 = createBannerItems(selectedItems);

const ul1 = document.createElement("ul");
ul1.innerHTML = bannerHTML1;
ul1.classList.add("items", "n1");

const ul2 = document.createElement("ul");
ul2.innerHTML = bannerHTML2;
ul2.classList.add("items", "n2");

const banner = document.querySelector(".banner");
banner.appendChild(ul1);
banner.appendChild(ul2);
