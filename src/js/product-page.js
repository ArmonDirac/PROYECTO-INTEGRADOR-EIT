
const products = [
  {
    productName: "Ciberhead-500",
    productImage: "product01.jpg",
    productSerial: "000001",
    productDescription: "Transforma tu robot humanoide con el CyberHead X-500, una cabeza robótica de alta tecnología con sensores avanzados y un diseño futurista. Perfecta para personalización y mejoras de inteligencia, ¡haz que tu creación destaque con un estilo único y funcionalidad superior!",
    productPrice: 28000,
    productPromoted: true
  },
  {
    productName: "SmartBot Navigator",
    productImage: "product02.jpg",
    productSerial: "000002",
    productDescription: "Descubre el futuro con el SmartBot Navigator, un robot interactivo con pantalla táctil y diseño ergonómico. Perfecto para asistentes personales o exploración, ¡llevala tecnología a otro nivel con este compañero innovador!",
    productPrice: 15000,
    productPromoted: false
  },
  {
    productName: "RoboArm-200",
    productImage: "product03.jpg",
    productSerial: "000003",
    productDescription: "Potencia tu producción con el RoboArm Pro-200, un brazo robótico industrial de precisión con movimientos suaves y alta resistencia. Ideal para tareas complejas, ¡es la herramienta definitiva para optimizar tu taller robótico!",
    productPrice: 26000,
    productPromoted: false
  },
  {
    productName: "AgileBot Fighter",
    productImage: "product04.jpg",
    productSerial: "000004",
    productDescription: "Domina las competencias con el AgileBot Fighter, un robot de combate con articulaciones reforzadas y velocidad excepcional. ¡Equipado para victorias, este repuesto es esencial para tu próximo desafío robótico!",
    productPrice: 180000,
    productPromoted: false
  },
  {
    productName: "PrecisionArm X-100",
    productImage: "product05.jpg",
    productSerial: "000005",
    productDescription: "Mejora la precisión de tu robot con el PrecisionArm X-100, un brazo robótico de alta tecnología para tareas delicadas. ¡Perfecto para ensamblaje y laboratorio, un must para profesionales!",
    productPrice: 45000,
    productPromoted: true
  },
  {
    productName: "AssistBot Core",
    productImage: "product06.jpg",
    productSerial: "000006",
    productDescription: "Optimiza tu asistente robótico con el AssistBot Core, un módulo central con pantalla integrada y diseño compacto. ¡Ideal para tareas diarias, lleva la eficiencia a tu hogar o negocio!",
    productPrice: 12000,
    productPromoted: true
  },
  {
    productName: "GlobalReach Manipulator",
    productImage: "product07.jpg",
    productSerial: "000007",
    productDescription: "Amplía las posibilidades con el GlobalReach Manipulator, un brazo robótico con alcance extendido y diseño robusto. ¡Controla el mundo desde tu estación con esta pieza revolucionaria!",
    productPrice: 6000000000,
    productPromoted: false
  },
  {
    productName: "DeliveryBot Wheel Set",
    productImage: "product08.jpg",
    productSerial: "000008",
    productDescription: "Renueva tu robot de entrega con el DeliveryBot Wheel Set, un conjunto de ruedas duraderas y eficientes. ¡Garantiza entregas rápidas y confiables con este upgrade esencial!",
    productPrice: 15000,
    productPromoted: false
  },
  {
    productName: "FlexiBot Frame",
    productImage: "product09.jpg",
    productSerial: "000009",
    productDescription: "Construye o repara con el FlexiBot Frame, un chasis adaptable para robots humanoides. ¡Ligero, resistente y personalizable, es la base perfecta para tu próxima creación!",
    productPrice: 11000,
    productPromoted: false
  },
  {
    productName: "CleanBot Duo Kit",
    productImage: "product10.jpg",
    productSerial: "000010",
    productDescription: "Mantén todo impecable con el CleanBot Duo Kit, un conjunto de repuestos para robots de limpieza con herramientas versátiles. ¡Ahorra tiempo y esfuerzo con esta solución perfecta para hogares inteligentes!",
    productPrice: 12000,
    productPromoted: false
  },
  {
    productName: "VisionBot Sentinel",
    productImage: "product11.jpg",
    productSerial: "000011",
    productDescription: "Mejora la percepción de tu robot con el VisionBot Sentinel, equipado con ojos LED y sensores de alta definición. ¡Ideal para navegación y seguridad, este repuesto te ofrece control total en cualquier entorno!",
    productPrice: 2500,
    productPromoted: false
  },
  {
    productName: "MobilityBot X-700",
    productImage: "product12.jpg",
    productSerial: "000012",
    productDescription: "Revoluciona la movilidad con el MobilityBot X-700, un robot humanoide con ruedas avanzadas y panel de control integrado. ¡Perfecto para tareas de vigilancia o entrega, con un diseño robusto y versátil que no te decepcionará!",
    productPrice: 24000,
    productPromoted: false
  },
  {
    productName: "IndustroArm Elite",
    productImage: "product13.jpg",
    productSerial: "000013",
    productDescription: "Maximiza la productividad con el IndustroArm Elite, un brazo robótico de alta resistencia y precisión para industrias exigentes. ¡Con un agarre potente y diseño ergonómico, es la elección de los profesionales!",
    productPrice: 55000,
    productPromoted: false
  }
];

const displayCards = () => {
  const cards = document.createElement("div");
  cards.classList.add("gallery");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

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

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(code);
    card.appendChild(description);
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



const productsContainer = document.getElementById("normalCard");
productsContainer.appendChild(displayCards());
initializeCounters();

