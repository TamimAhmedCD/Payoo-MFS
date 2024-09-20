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

document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = document.getElementById('cash-out-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPinNumber = document.getElementById('cash-out-pin-number-input').value;

    if (cashOutPinNumber === '1234') {
        const accountBalance = document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);
        const updatedBalance = accountBalanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = updatedBalance;
    }

    else {
        alert('Failed to transaction! Please try again latter.');
    }
});