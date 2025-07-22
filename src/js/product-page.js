// const PENDING = "PENDING";
// const CANCELLED = "CANCELLED";
// const CONFIRMED = "CONFIRMED";

// const STANDARD = "standard";
// const DELUXE = "deluxe";
// const SUITE = "suite";

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






// const reservations = [
//     ["Juan A. Perez", STANDARD, 101, "10/01/2024", 28444777, PENDING, false],
//     ["Anthony Thomas", DELUXE, 102, "15/01/2024", 50788955,CONFIRMED, true],
//     ["Lorena Medina", STANDARD, 103, "20/01/2024", 74111000,CANCELLED,false],
//     ["Patricia Fuentes", SUITE, 105,"25/01/2024",9258258,CONFIRMED,false],
//     ["Javier G. Torres", STANDARD, 106, "25/01/2024",75444888,CONFIRMED,false],
//     ["Max Power", SUITE, 108,"15/01/2024",28555888,CANCELLED,true],
//     ["Marian Sans", DELUXE,107,"12/01/2024", 32588255,PENDING,false],
//     ["Clara Ponce", DELUXE,109,"18/02/2024",60155000,CONFIRMED,false],
//     ["Carla Blanco", STANDARD,100,"05/03/2024", 40177070,PENDING,true]
// ];

<div class="card">
<img class="card__image" src="./assets/images/products/'+product.productImage+ '" alt="Imagen de producto">
<h3 class="card__title">'+product.productName+'</h3>
<span class="card__code">'+product.productSerial+'</span>
<p class="card__description">'+product.productDescription+'</p>
<span class="card__price">USD '+product.productPrice+'</span>
<div class="card__actions"><button class="button button--add">Agregar al carrito</button>
<input class="card__counter" value="0"></input>
<button class="button button--remove">Quitar del carrito</button></div></div>

const displayCards = () => {
     const cards = document.createElement("div");
     cards.classList.add("card");
     products.forEach((product) => {
     const card = document.createElement("div");
     const image = document.createElement("img");
     image.setAttribute("src", `src/assets/images/products/${productImage}`)
     card.classList.add("card");
     image.classList.add("card-image");
     card.appendChild(image);
     const data = document.createElement("div");
     data.innerHTML += `<p></p>`;
     data.innerHTML += `<p><strong>Nombre del Huesped</strong>: ${reservation[0]} <strong>Número de pasaporte</strong>: ${reservation[4]}</p>`;
     data.innerHTML += `<p><strong>Tipo y número de habitación</strong>: ${reservation[1]} N° ${reservation[2] } </p>`;
     data.innerHTML += `<p><strong>Fecha de Ingreso</strong>: ${reservation[3]}</p>`;
     data.innerHTML += `<p><strong>Estado actual de la reserva</strong>: ${reservation[5]}</p>`;

//         if (reservation[6] == true) {
//             data.innerHTML += `<p><strong>VIP</strong></p>`;
//         }
//         if (reservation[5] == "CANCELLED") {
//             card.classList.add("reservation-card-cancelled");
//         }
//         if (reservation[5] == "CONFIRMED") {
//             card.classList.add("reservation-card-confirmed");
//         }

//         card.appendChild(data);
//         cards.appendChild(card);
//     });

//     return cards;
// };

// const reservationsContainer = document.getElementById("reservation-container");

// reservationsContainer.innerHTML += "<h2>Gestión de Reservas</h2>"

// const quantityPending = calculateCounter(PENDING);
// const quantityCancelled = calculateCounter(CANCELLED);
// const quantityConfirmed = calculateCounter(CONFIRMED);
// reservationsContainer.appendChild(displayCounters(quantityPending,quantityCancelled,quantityConfirmed));
// reservationsContainer.innerHTML += "<h3>Lista de Reservas</h3>"
// reservationsContainer.appendChild(displayCards());


























































    function createQuantityCounter() {
      let quantity = 0;

      function updateDisplay() {
        document.querySelector('.card__counter').value = quantity;
      }

      return {
        increment: function() {
          quantity++;
          updateDisplay();
        },
        decrement: function() {
          if (quantity > 0) { 
            quantity--;
            updateDisplay();
          }
        },
        getQuantity: function() {
          return quantity;
        }
      };
    }


    const counter = createQuantityCounter();


    document.querySelector('.button--add').addEventListener('click', counter.increment);
    document.querySelector('.button--remove').addEventListener('click', counter.decrement);
