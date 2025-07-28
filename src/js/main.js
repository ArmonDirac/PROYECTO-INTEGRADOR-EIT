import { products } from "./data/products.js";

const displayCards = () => {
  const cards = document.createElement("div");
  cards.classList.add("gallery");

  products.forEach((product) => {
  if (product.productPromoted==true) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.setAttribute("src", `./assets/images/products/${product.productImage}`);
    image.setAttribute("alt", `Imagen de producto ${product.productSerial}`);

    const watermark = document.createElement("p");
    watermark.classList.add("card__watermark");
    watermark.innerHTML = "PRODUCTO DESTACADO";
    
    const title = document.createElement("h3");
    title.classList.add("card__title");
    title.innerHTML = product.productName;

    const code = document.createElement("span");
    code.classList.add("card__code");
    code.innerHTML = product.productSerial;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.innerHTML = product.productDescription;

    const price = document.createElement("span");
    price.classList.add("card__price");
    price.innerHTML = `USD ${product.productPrice}`;

    card.appendChild(image);
    card.appendChild(watermark);
    card.appendChild(title);
    card.appendChild(code);
    card.appendChild(description);
    card.appendChild(price);
    cards.appendChild(card);
  }});

  return cards;
};




const productsContainer = document.getElementById("promotedCard");
productsContainer.appendChild(displayCards());

