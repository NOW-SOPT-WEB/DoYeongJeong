import { sideNavAnimation } from "../common/sideNav.js";
import { bannerAnimation } from "./banner.js";
import { filteredItems } from "./filter.js";
import { getAllShoppingList } from "./getAllShoppingList.js";

document.addEventListener("DOMContentLoaded", sideNavAnimation);
document.addEventListener("DOMContentLoaded", bannerAnimation);
document.addEventListener("DOMContentLoaded", getAllShoppingList);
document.addEventListener("DOMContentLoaded", filteredItems);
