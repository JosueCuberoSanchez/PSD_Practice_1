// Functions for validations

/*
 Function to validate user input, following the IIFE pattern.
 @return false if the input is invalid.
 @author Josué Cubero Sánchez.
 */
var Validate = (function() {

    var email = 'jo96cube@gmail.com';
    var password = '123';

    var inputEmail = document.getElementById('main__input--email');
    var inputPassword = document.getElementById('main__input--password');

    /*
     Function to validate user email.
     @return false if the email is invalid, true otherwise.
     @author Josué Cubero Sánchez.
     */
    var _validateEmail = function() {
        var enteredEmail = inputEmail.value;
        var valid;
        if (enteredEmail !== email) {
            valid = false;
        } else {
            valid = true;
        }
        return valid;
    };

    /*
     Function to validate user password.
     @return false if the password is invalid, true otherwise.
     @author Josué Cubero Sánchez.
     */
    var _validatePassword = function() {
        var enteredPassword = inputPassword.value;
        var valid;
        if (enteredPassword !== password) {
            valid = false;
        } else {
            valid = true;
        }
        return valid;
    };

    /*
     Public interface to validate user input.
     @return false if the input is invalid.
     @author Josué Cubero Sánchez.
     */
    var validateData = function() {
        var validEmail = _validateEmail();
        var validPassword = _validatePassword();

        if (!(validEmail && validPassword)) {
            if (!validEmail) {
                inputEmail.classList.add('is-invalid');
                document.getElementById('emailHelp').style.display = 'block';
            } else {
                inputEmail.classList.remove('is-invalid');
                document.getElementById('emailHelp').style.display = 'none';
            }
            if (!validPassword) {
                inputPassword.classList.add('is-invalid');
                document.getElementById('passwordHelp').style.display = 'block';
            } else {
                inputPassword.classList.remove('is-invalid');
                document.getElementById('passwordHelp').style.display = 'none';
            }
            return false; // return false so the form is not submitted.
        }
    };

    return {
        validateData: validateData
    };

})();
