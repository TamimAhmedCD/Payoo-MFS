console.log('Test JS');

// ! search: form submit reloading the page

// step - 1: set event handler
document.getElementById('login-btn').addEventListener('click', function (event) {
    // stet - 2: prevent default behavior (prevent reloading browser)
    event.preventDefault(); // <----------- vegal to beginners
    console.log('login button clicked');

    // step - 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    // this is temporary. you should do like this
    if (phoneNumber === '5' && pinNumber === '1234'){
        console.log('Your are logged in ');
        window.location.href = './home.html'
    }
    else {
        alert('Wrong phone number and pin');
    }
})