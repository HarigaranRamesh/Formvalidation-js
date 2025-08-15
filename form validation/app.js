function validateForm() {
    let status = true;

    let username = document.forms['myform']['username'].value;
    let email = document.forms['myform']['email'].value;
    let password = document.forms['myform']['password'].value;
    let cpassword = document.forms['myform']['confirmpassword'].value;

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const cpasswordError = document.getElementById('cPasswordError');
     

    if (username === '') {
        usernameError.innerHTML = "Username is cannot be empty .";
        status = false;
    }

  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        emailError.innerHTML = "Email cannot be empty.";
        status = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        status = false;
    }


    if (password === '') {
        passwordError.innerHTML = "Password cannot be empty.";
        status = false;
    }


    if (cpassword === '') {
        cpasswordError.innerHTML = "Confirm Password cannot be empty.";
        status = false;
    } else if (cpassword !== password) {
        cpasswordError.innerHTML = "Passwords do not match.";
        status = false;
    }

    return status;
}


