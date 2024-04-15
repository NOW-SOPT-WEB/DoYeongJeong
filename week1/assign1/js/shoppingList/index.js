import { sideNavAnimation } from "../common/sideNav.js";
import { getCartList } from "./getCartList.js";
import { modalListener } from "./modal.js";

document.addEventListener("DOMContentLoaded", sideNavAnimation);
document.addEventListener("DOMContentLoaded", getCartList);
document.addEventListener("DOMContentLoaded", modalListener);
