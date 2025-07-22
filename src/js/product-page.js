
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
