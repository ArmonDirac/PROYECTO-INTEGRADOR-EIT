import { products } from "./data/products.js";

const displayCards = (productsList = products) => {
  const cards = document.createElement("div");
  cards.classList.add("gallery");

  productsList.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const modal_check = document.createElement("input");
    modal_check.setAttribute("hidden", "");
    modal_check.setAttribute("type", "checkbox");
    modal_check.setAttribute("id", `modal-toggle-${product.productSerial}`);

    const image = document.createElement("img");
    image.setAttribute("src", `./assets/images/products/${product.productImage}`);
    image.setAttribute("alt", `Imagen de producto ${product.productSerial}`);

    const title = document.createElement("h3");
    title.classList.add("card__title");
    title.innerHTML = product.productName;

    const code = document.createElement("span");
    code.classList.add("card__code");
    code.innerHTML = product.productSerial;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.innerHTML = product.productDescription;

    const showMore = document.createElement("label");
    showMore.classList.add("show-more");
    showMore.setAttribute("for", `modal-toggle-${product.productSerial}`);
    showMore.innerHTML = "Ver más";

    const showLess = document.createElement("label");
    showLess.classList.add("show-less");
    showLess.setAttribute("for", `modal-toggle-${product.productSerial}`);
    showLess.innerHTML = "Ver menos";

    const price = document.createElement("span");
    price.classList.add("card__price");
    price.innerHTML = `USD ${product.productPrice}`;

    const action = document.createElement("div");
    action.classList.add("card__action");

    const buttonAdd = document.createElement("button");
    buttonAdd.classList.add("button--add");
    buttonAdd.innerHTML = "Agregar al carrito";

    const quantity = document.createElement("input");
    quantity.classList.add("card__counter");
    quantity.setAttribute("value", "0");

    const buttonMinus = document.createElement("button");
    buttonMinus.classList.add("button--remove");
    buttonMinus.innerHTML = "Quitar del carrito";


    modal_check.addEventListener("change", () => {
      if (modal_check.checked) {
        card.classList.add("modal-active");
      } else {
        card.classList.remove("modal-active");
      }
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(code);
    card.appendChild(description);
    card.appendChild(showMore);
    card.appendChild(showLess);
    card.appendChild(modal_check);
    card.appendChild(price);
    card.appendChild(action);
    action.appendChild(buttonAdd);
    action.appendChild(quantity);
    action.appendChild(buttonMinus);
    cards.appendChild(card);
  });

  return cards;
};

function createQuantityCounter() {
  let qty = 0;

  function updateDisplay(counterElement) {
    counterElement.value = qty;
  }

  return {
    increment: function (counterElement) {
      qty++;
      updateDisplay(counterElement);
    },
    decrement: function (counterElement) {
      if (qty > 0) {
        qty--;
        updateDisplay(counterElement);
      }
    },
    getQuantity: function () {
      return qty;
    },
  };
}

const initializeCounters = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const counter = createQuantityCounter();
    const addButton = card.querySelector(".button--add");
    const removeButton = card.querySelector(".button--remove");
    const quantityInput = card.querySelector(".card__counter");

    addButton.addEventListener("click", () => counter.increment(quantityInput));
    removeButton.addEventListener("click", () => counter.decrement(quantityInput));
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.searcher__word');
  const searchButton = document.querySelector('.button--search');
  const productsContainer = document.getElementById('normalCard');

  productsContainer.appendChild(displayCards());
  initializeCounters();

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    productsContainer.innerHTML = '';

    if (searchTerm === '') {
      productsContainer.appendChild(displayCards());
      initializeCounters();
      return;
    }

    const filteredProducts = products.filter(product => 
      product.productName.toLowerCase().includes(searchTerm) ||
      product.productDescription.toLowerCase().includes(searchTerm) ||
      product.productSerial.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length === 0) {
      productsContainer.innerHTML = '<p>No se encontraron productos.</p>';
      return;
    }

    productsContainer.appendChild(displayCards(filteredProducts));
    initializeCounters();
  });
});