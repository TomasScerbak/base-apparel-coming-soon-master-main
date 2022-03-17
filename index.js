let form = document.getElementById('form');
let input = document.querySelector('input');
let email = document.getElementById('email-email');
let errorIcon = document.getElementById('error-icon');
let error = document.getElementById('error-text');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


email.addEventListener('keydown', function() {
    if (email.value.match(pattern)) {
        
        errorIcon.classList.add('hidden');
        error.innerText = 'Your address is valid'
        error.style.color = '#62fc03';


    } else if (email.value === '' || email.value === 'undifined' || email.value === null) {
        errorIcon.classList.add('hidden');
        error.innerText = '';
    } else {

        errorIcon.classList.remove('hidden');
        error.classList.remove('hidden');
        error.innerText = 'Please enter valid email address';
        error.style.color = 'red';
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
})
