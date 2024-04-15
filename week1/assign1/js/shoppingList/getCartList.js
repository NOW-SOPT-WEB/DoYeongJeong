import { SHOPPING_LIST } from "../constants/const.js";

export const getCartList = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tableBody = document
    .querySelector(".cart_table")
    .getElementsByTagName("tbody")[0];

  // 장바구니(로컬스토리지)에 담긴 상품을 테이블에 추가
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

      row.insertCell(2).innerText = `${item.price.toLocaleString()}원`;

      row.insertCell(3).innerText = item.category;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete__btn";
      deleteBtn.innerText = "삭제";

      // 장바구니 삭제
      deleteBtn.addEventListener("click", () => {
        const isDeleted = confirm("장바구니에서 삭제하시겠습니까?");
        if (isDeleted) {
          const updatedCart = cart.filter((cartId) => cartId !== item.id);
          localStorage.setItem("cart", JSON.stringify(updatedCart));

          alert("삭제되었습니다!");
          window.location.reload();
        }
      });

      row.insertCell(4).appendChild(deleteBtn);
    }
  });

  // 전체 체크 로직
  const selectAllCheckbox = document.querySelector("#selectAllCheckbox");

  selectAllCheckbox.addEventListener("change", () => {
    const itemCheckboxes = document.querySelectorAll(
      'input[name="itemCheckbox"]'
    );

    itemCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // 홈으로 리다이렉트
  document.querySelector(".to_go_home").addEventListener("click", () => {
    window.location.href = "./index.html";
  });
};
