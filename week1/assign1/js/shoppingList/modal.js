import { SHOPPING_LIST } from "../constants/const.js";

// 구매하기 모달
export const modalListener = () => {
  // 구매하기 버튼 클릭
  document.querySelector(".buy__btn").addEventListener("click", () => {
    const checkedItems = document.querySelectorAll(
      'input[name="itemCheckbox"]:checked'
    );

    if (checkedItems.length == 0) {
      alert("상품을 선택해주세요.");
      return;
    }

    let price = 0;
    let content = `<button class="modal_close">
      <img src="./img/icon/close.svg" alt="닫기" />
    </button> 
    <div class="modal_flex">`;

    checkedItems.forEach((checkedItem) => {
      SHOPPING_LIST.find((item) => {
        if (item.id === Number(checkedItem.value)) {
          price += item.price;
          content += `
            <div class="modal_item">    
                <img src="${item.img}" alt="${item.title}" />
                <div class="modal_info">
                    <h3>${item.title}</h3>
                    <p>${item.price.toLocaleString()}원</p>
                </div>
            </div>
        `;
        }
      });
    });

    content += `</div>
    <div class="modal_price">
        <h2>총 결제 금액 &nbsp;</h2>
        <p>${price.toLocaleString()}원</p>
    </div>
    <div class="btn__container">
        <button class="buy__btn">구매하기</button>
    </div>`;

    const modalContent = document.querySelector(".modal_content");
    modalContent.innerHTML = content;

    modalContent.querySelector(".buy__btn").addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const checkedItemsArray = Array.from(checkedItems);

      const updatedCart = cart.filter((item) => {
        return !checkedItemsArray.some(
          (checkedItem) => Number(checkedItem.value) === item
        );
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      alert("구매가 완료되었습니다.");
      window.location.reload();
    });

    // 모달 닫기 버튼
    document
      .querySelector(".modal_close")
      .addEventListener("click", (event) => {
        document.querySelector(".modal").style.display = "none";
      });

    document.querySelector(".modal").style.display = "block";
  });
};
