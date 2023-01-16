console.log('This is project4 JS Part'); 
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
// console.log(name,email,phone);
let validUser = false;
let validEmail = false;
let validPhone = false;
name1.addEventListener('blur' , ()=>{
    console.log('Name is blur');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name1.value;
    console.log(regex.str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name1.classList.remove('is-invalid');
    }
    else{
        console.log('Your name is not valid');
        name1.classList.add('is-invalid');
    }
})
email.addEventListener('blur' , ()=>{
    console.log('email is blur');
    // validate name here
    // let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2-7}$/;
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // let str = email.value;
    console.log(regex.str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
    }
})
phone.addEventListener('blur' , ()=>{
    console.log('Name is blur');
    // validate name here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex.str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
    }
})
let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    // e.preventDefault();
    console.log('U click on submit');
    // Submit your form
    if(validUser && validEmail && validPhone)
    {
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }
    }
})