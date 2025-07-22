
    function createQuantityCounter() {
      let quantity = 0; // Estado inicial del contador

      function updateDisplay() {
        document.querySelector('.card__counter').value = quantity;
      }

      return {
        increment: function() {
          quantity++;
          updateDisplay();
        },
        decrement: function() {
          if (quantity > 0) { // Evita que baje de 1
            quantity--;
            updateDisplay();
          }
        },
        getQuantity: function() {
          return quantity;
        }
      };
    }

    // Crear una instancia del closure
    const counter = createQuantityCounter();

    // Asignar eventos a los botones
    document.querySelector('.button--add').addEventListener('click', counter.increment);
    document.querySelector('.button--remove').addEventListener('click', counter.decrement);
