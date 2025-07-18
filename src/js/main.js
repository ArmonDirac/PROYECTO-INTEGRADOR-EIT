const articleSample = document.querySelector("#items");

let products = [
    ["Ciberhead-500","product01.jpg","000001","Transforma tu robot humanoide con el CyberHead X-500, una cabeza robótica de alta tecnología con sensores avanzados y un diseño futurista. Perfecta para personalización y mejoras de inteligencia, ¡haz que tu creación destaque con un estilo único y funcionalidad superior!",28000],
    ["SmartBot Navigator","product02.jpg","000002","Descubre el futuro con el SmartBot Navigator, un robot interactivo con pantalla táctil y diseño ergonómico. Perfecto para asistentes personales o exploración, ¡llevala tecnología a otro nivel con este compañero innovador!",15000],
    ["RoboArm-200","product03.jpg","000003","Potencia tu producción con el RoboArm Pro-200, un brazo robótico industrial de precisión con movimientos suaves y alta resistencia. Ideal para tareas complejas, ¡es la herramienta definitiva para optimizar tu taller robótico!",26000],
    ["AgileBot Fighter","product04.jpg","000004","Domina las competencias con el AgileBot Fighter, un robot de combate con articulaciones reforzadas y velocidad excepcional. ¡Equipado para victorias, este repuesto es esencial para tu próximo desafío robótico!",180000],
    ["PrecisionArm X-100","product05.jpg","000005","Mejora la precisión de tu robot con el PrecisionArm X-100, un brazo robótico de alta tecnología para tareas delicadas. ¡Perfecto para ensamblaje y laboratorio, un must para profesionales!",45000],
    ["AssistBot Core","product06.jpg","000006","Optimiza tu asistente robótico con el AssistBot Core, un módulo central con pantalla integrada y diseño compacto. ¡Ideal para tareas diarias, lleva la eficiencia a tu hogar o negocio!",12000],
    ["GlobalReach Manipulator","product07.jpg","000007","Amplía las posibilidades con el GlobalReach Manipulator, un brazo robótico con alcance extendido y diseño robusto. ¡Controla el mundo desde tu estación con esta pieza revolucionaria!",6000000000],
    ["DeliveryBot Wheel Set","product08.jpg","000008","Renueva tu robot de entrega con el DeliveryBot Wheel Set, un conjunto de ruedas duraderas y eficientes. ¡Garantiza entregas rápidas y confiables con este upgrade esencial!",15000],
    ["FlexiBot Frame","product09.jpg","000009","Construye o repara con el FlexiBot Frame, un chasis adaptable para robots humanoides. ¡Ligero, resistente y personalizable, es la base perfecta para tu próxima creación!",11000],
    ["CleanBot Duo Kit","product10.jpg","000010","DescrMantén todo impecable con el CleanBot Duo Kit, un conjunto de repuestos para robots de limpieza con herramientas versátiles. ¡Ahorra tiempo y esfuerzo con esta solución perfecta para hogares inteligentes!ipción",12000],
    ["VisionBot Sentinel","product11.jpg","000011","Mejora la percepción de tu robot con el VisionBot Sentinel, equipado con ojos LED y sensores de alta definición. ¡Ideal para navegación y seguridad, este repuesto te ofrece control total en cualquier entorno!",2500],
    ["MobilityBot X-700","product12.jpg","000012","Revoluciona la movilidad con el MobilityBot X-700, un robot humanoide con ruedas avanzadas y panel de control integrado. ¡Perfecto para tareas de vigilancia o entrega, con un diseño robusto y versátil que no te decepcionará!",24000],
    ["IndustroArm Elite","product13.jpg","000013","Maximiza la productividad con el IndustroArm Elite, un brazo robótico de alta resistencia y precisión para industrias exigentes. ¡Con un agarre potente y diseño ergonómico, es la elección de los profesionales!",55000]
]



for (let i = 0; i < products.length; i++) {
    articleSample.innerHTML += '<div class="card"><img class="card__image" src="./assets/images/products/'+products[i][1]+ '" alt="Imagen de producto"> <h3 class="card__title">'+products[i][0]+'</h3> <span class="card__code">'+products[i][2]+'</span><p class="card__description">'+products[i][3]+'</p><span class="card__price">USD '+products[i][4]+'</span><div class="card__actions"><button class="button button--add">Agregar al carrito</button><span class="card__counter">0</span><button class="button button--remove">Quitar del carrito</button></div></div>';
}


