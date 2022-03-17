let form = document.getElementById('form');
let email = document.getElementById('email');
let errorIcon = document.getElementById('error-icon');
let error = document.getElementById('error-text');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


email.addEventListener('keydown', function(e) {
    if (email.value.match(pattern)) {
        
        errorIcon.classList.add('hidden');
        error.innerText = 'Your address is valid'
        error.style.color = '#32a852';


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


email.addEventListener('change', function(event) {
        let value = (event.target.value);

       if (value.match(pattern)) {
        
        errorIcon.classList.add('hidden');
        error.innerText = 'Your address is valid'
        error.style.color = '#32a852';

       }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
})
