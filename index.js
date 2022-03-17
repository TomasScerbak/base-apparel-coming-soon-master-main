let form = document.getElementById('form');
let input = document.querySelector('input');
let email = document.getElementById('email').value;
let errorIcon = document.getElementById('error-icon');
let error = document.getElementById('error-text');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


form.addEventListener('keydown', function() {

    if (email.match(pattern)) {

        errorIcon.classList.add('hidden');
        error.innerText = 'Your address is valid'
        error.style.color = '#62fc03';

    } else {

        errorIcon.classList.remove('hidden');
        error.classList.remove('hidden');
        error.innerText = 'Please enter valid email address';

    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
})
