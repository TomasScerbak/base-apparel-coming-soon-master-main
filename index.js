let form = document.getElementById('form');
let email = document.getElementById('email');
let errorIcon = document.getElementById('error-icon');
let error = document.getElementById('error-text');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// checking email on every keypress
email.addEventListener('keydown', function(e) {
    // once email matches pattern client will see green notification
    if (email.value.match(pattern)) {
        
        errorIcon.classList.add('hidden');
        error.innerText = 'Your address is valid'
        error.style.color = '#32a852';

        // if client removes all letters input will go to default visual status
    } else if (email.value === '' || email.value === 'undifined' || email.value === null) {
        errorIcon.classList.add('hidden');
        error.innerText = '';
    } else {
        // if the email is not valid client will see exclamation mark as well as red text
        errorIcon.classList.remove('hidden');
        error.classList.remove('hidden');
        error.innerText = 'Please enter valid email address';
        error.style.color = 'red';
    }
})


// Preventing default behaviour of submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();
})
