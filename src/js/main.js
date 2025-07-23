const createProduct = (nombre, archivo, serial, descripcion, precio, destacado) => ({
            productName: nombre ,
            productImage: archivo,
            productSerial: serial,
            productDescription: descripcion,
            productPrice: Number.parseFloat(precio),
            productPromoted: destacado
});



const products =
    [
    createProduct("Ciberhead-500","product01.jpg","000001","Transforma tu robot humanoide con el CyberHead X-500, una cabeza robótica de alta tecnología con sensores avanzados y un diseño futurista. Perfecta para personalización y mejoras de inteligencia, ¡haz que tu creación destaque con un estilo único y funcionalidad superior!",28000,true),
    createProduct("SmartBot Navigator","product02.jpg","000002","Descubre el futuro con el SmartBot Navigator, un robot interactivo con pantalla táctil y diseño ergonómico. Perfecto para asistentes personales o exploración, ¡llevala tecnología a otro nivel con este compañero innovador!",15000,false),
    createProduct("RoboArm-200","product03.jpg","000003","Potencia tu producción con el RoboArm Pro-200, un brazo robótico industrial de precisión con movimientos suaves y alta resistencia. Ideal para tareas complejas, ¡es la herramienta definitiva para optimizar tu taller robótico!",26000,false),
    createProduct("AgileBot Fighter","product04.jpg","000004","Domina las competencias con el AgileBot Fighter, un robot de combate con articulaciones reforzadas y velocidad excepcional. ¡Equipado para victorias, este repuesto es esencial para tu próximo desafío robótico!",180000,false),
    createProduct("PrecisionArm X-100","product05.jpg","000005","Mejora la precisión de tu robot con el PrecisionArm X-100, un brazo robótico de alta tecnología para tareas delicadas. ¡Perfecto para ensamblaje y laboratorio, un must para profesionales!",45000,true),
    createProduct("AssistBot Core","product06.jpg","000006","Optimiza tu asistente robótico con el AssistBot Core, un módulo central con pantalla integrada y diseño compacto. ¡Ideal para tareas diarias, lleva la eficiencia a tu hogar o negocio!",12000,true),
    createProduct("GlobalReach Manipulator","product07.jpg","000007","Amplía las posibilidades con el GlobalReach Manipulator, un brazo robótico con alcance extendido y diseño robusto. ¡Controla el mundo desde tu estación con esta pieza revolucionaria!",6000000000,false),
    createProduct("DeliveryBot Wheel Set","product08.jpg","000008","Renueva tu robot de entrega con el DeliveryBot Wheel Set, un conjunto de ruedas duraderas y eficientes. ¡Garantiza entregas rápidas y confiables con este upgrade esencial!",15000,false),
    createProduct("FlexiBot Frame","product09.jpg","000009","Construye o repara con el FlexiBot Frame, un chasis adaptable para robots humanoides. ¡Ligero, resistente y personalizable, es la base perfecta para tu próxima creación!",11000,false),
    createProduct("CleanBot Duo Kit","product10.jpg","000010","DescrMantén todo impecable con el CleanBot Duo Kit, un conjunto de repuestos para robots de limpieza con herramientas versátiles. ¡Ahorra tiempo y esfuerzo con esta solución perfecta para hogares inteligentes!ipción",12000,false),
    createProduct("VisionBot Sentinel","product11.jpg","000011","Mejora la percepción de tu robot con el VisionBot Sentinel, equipado con ojos LED y sensores de alta definición. ¡Ideal para navegación y seguridad, este repuesto te ofrece control total en cualquier entorno!",2500,false),
    createProduct("MobilityBot X-700","product12.jpg","000012","Revoluciona la movilidad con el MobilityBot X-700, un robot humanoide con ruedas avanzadas y panel de control integrado. ¡Perfecto para tareas de vigilancia o entrega, con un diseño robusto y versátil que no te decepcionará!",24000,false),
    createProduct("IndustroArm Elite","product13.jpg","000013","Maximiza la productividad con el IndustroArm Elite, un brazo robótico de alta resistencia y precisión para industrias exigentes. ¡Con un agarre potente y diseño ergonómico, es la elección de los profesionales!",55000,false)
    ];

const highlightedProducts = 

const displayCards = () => {
     const cards = document.createElement("div");
     cards.classList.add("special-gallery");
     products.forEach((product) => {
     const card = document.createElement("div");
     card.classList.add("card");
     const image = document.createElement("img");
     image.setAttribute("src", "./assets/images/products/"+product.productImage);
     image.setAttribute("alt", "Imagen de producto"+product.productSerial);
     const title = document.createElement("h3");
     title.classList.add("card__title");
     title.innerHTML += product.productName;
     const code = document.createElement("span");
     code.classList.add("card__code");
     code.innerHTML += product.productSerial;
     const description = document.createElement("p");
     description.classList.add("card__description");
     description.innerHTML += product.productDescription;
     const price = document.createElement("span");
     price.classList.add("card__price");
     price.innerHTML += 'USD '+product.productPrice;
     const action = document.createElement("div");
     action.classList.add("card__action");
     const buttonAdd = document.createElement("button");
     buttonAdd.classList.add("button--add");
     buttonAdd.innerHTML += 'Agregar al carrito';
     const quantity = document.createElement("input");
     quantity.classList.add("card__counter");
     quantity.setAttribute('value','0');
     const buttonMinus = document.createElement("button");
     buttonMinus.classList.add("button--remove");
     buttonMinus.innerHTML += 'Quitar del carrito';
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
})
     return cards;
}

function createQuantityCounter() {
      let qty = 0;

      function updateDisplay() {
        document.querySelector('.card__counter').value = qty;
      }

      return {
        increment: function() {
          qty++;
          updateDisplay();
        },
        decrement: function() {
          if (qty > 0) {
            qty--;
            updateDisplay();
          }
        },
        getQuantity: function() {
          return qty;
        }
      };
    }

const productsContainer = document.getElementById("promotedCard");
productsContainer.appendChild(displayCards());

