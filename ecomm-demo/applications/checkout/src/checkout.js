const getCartItems = () =>
  fetch("http://localhost:5011/api/cart").then((resp) => resp.json());

const addToCart = (pokemon) =>
  fetch("http://localhost:5011/api/add", {
    method: "POST",
    body: JSON.stringify({
      pokemon,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

const checkout = () =>
  fetch("http://localhost:5011/api/checkout", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => resp.json());

module.exports = {
  checkout,
  getCartItems,
  addToCart,
};
