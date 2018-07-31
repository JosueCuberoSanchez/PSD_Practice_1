// Functions for validations

/*
 Function to validate user input, following the IIFE pattern.
 @return false if the input is invalid.
 @author Josué Cubero Sánchez.
 */
const Validate = (function() {

    const inputEmail = document.getElementById('main__input--email');
    const inputPassword = document.getElementById('main__input--password');

    /*
     Function to validate user email.
     @return false if the email is invalid, true otherwise.
     @author Josué Cubero Sánchez.
     */
    const _validateEmail = function() {
        const email = 'jo96cube@gmail.com';
        return inputEmail.value === email;
    };

    /*
     Function to validate user password.
     @return false if the password is invalid, true otherwise.
     @author Josué Cubero Sánchez.
     */
    const _validatePassword = function() {
        const password = '123';
        return inputPassword.value === password;
    };

    /*
     Public interface to validate user input.
     @return false if the input is invalid.
     @author Josué Cubero Sánchez.
     */
    const validateData = function() {
        const validEmail = _validateEmail();
        const validPassword = _validatePassword();

        if (!(validEmail && validPassword)) {
            inputEmail.classList.add('is-invalid');
            document.getElementById('emailHelp').style.display = 'block';
            inputPassword.classList.add('is-invalid');
            document.getElementById('passwordHelp').style.display = 'block';
        } else {
            window.location.href = 'dashboard.html';
        }
    };

    return {
        validateData: validateData
    };

})();

/*
 Listener for main button on click.
 @author Josué Cubero Sánchez.
 */
document.getElementById('main__button').addEventListener('click', function() {
    Validate.validateData();
});
