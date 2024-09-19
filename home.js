document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;

    const pinNumberInput = document.getElementById('pin-number-input').value;
    console.log(addMoneyInput, pinNumberInput);
})