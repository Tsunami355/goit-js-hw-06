let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
  
  decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounterValue();
  });

  incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounterValue();
  });

    function updateCounterValue() {
    const counterValueElement = document.getElementById('value');
    counterValueElement.textContent = counterValue;
};