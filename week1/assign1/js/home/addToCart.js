export const addToCart = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = [...cart, id];

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  alert("장바구니에 담겼습니다.");
};
