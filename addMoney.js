/** 
 * ! 1. eventListener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reload
 * ! 2. get the money user wants to add 
 * also, get the pin number provided 
 * ! 3. verify the pin number. for, wrong pin number ===> failed to add
 * for right pin number, allow to add the number to the account balance
 * 
 * ! 4. get the current balance 
 * 
 * ! 5. add money to be added with the current balance
 * 
 * ! 6. display/update balance DOM/UI
 *  
*/

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('added the eventListener');

    // get money and the pin number
    const addMoney = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('pin-number-input').value;

    if (pinNumber === '1234') {
        // add money to the account
        const accountBalance = document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);

        // New balance
        const updatedBalance = accountBalanceNumber + addMoneyNumber;

        // update the DOM with updated balance
        document.getElementById('account-balance').innerText = updatedBalance;
    }

    else {
        alert('Failed to add money! Please try again later.')
    }
});