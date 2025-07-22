
    function createRequestedCounter() {
      let counter = 1;

      function updateQuantity() {
        document.querySelector('.card__counter').value = counter;
      }

      return {
        increment: function() {
          counter++;
          updateQuantity();
        },
        decrement: function() {
            if (counter>=0) {
            counter--;
            updateQuantity();
            }
        },
        getCounter: function() {
          return counter;
        }
      };
    }

    const counter = createRequestedCounter();

    document.querySelector('.button button--add').addEventListener('click', counter.increment);
    document.querySelector('.button button--remove').addEventListener('click', counter.decrement);

