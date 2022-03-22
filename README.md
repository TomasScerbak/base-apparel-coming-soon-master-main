# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size (375px, 1440px design)
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://github.com/TomasScerbak/base-apparel-coming-soon-master-main.git]
- Live Site URL: [https://tomasscerbak.github.io/base-apparel-coming-soon-master-main/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I've learned how to catch values from input and check basic email validation. Client would also see exclamation mark if email is not valid and green valid text once mail is valid.


```js
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
```

### Continued development

I will continue to learn vanilla JS and DOM manipulation.


## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
