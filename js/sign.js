
let sup = document.querySelector('.sub');
sup.disabled = true;
function valid() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let emerror = document.getElementById('emailerror');
    let passerror = document.getElementById('passerror');
    if (email.indexOf('@') == -1 || email.length < 0) {
        sup.disabled = true;
        emerror.innerHTML = 'Please enter a valid email'
    }
    if (email.indexOf('@') > -1 && email.length > 0) {
        emerror.innerHTML = ''
    }
    if (pass.length < 4 || pass.length > 60) {
        passerror.innerHTML = 'Your password must contain between 4 and 60 characters'
    }
    if (pass.length > 4 && pass.length < 60) {
        passerror.innerHTML = ''
    }
    if (email.indexOf('@') > -1 && email.length > 0 && pass.length > 4 && pass.length < 60) {
        sup.disabled = false;
    }
}


