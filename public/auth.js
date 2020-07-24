function checkEmail(email) {
    // add some regex to validate email

    return true;
}

function checkPassword(password) {
    if (password.length > 7 &&
        password.match(/[a-z]+/) &&
        password.match(/[A-Z]+/) &&
        password.match(/[0-9]+/) &&
        password.match(/[_-$#!?&@]+/)) {
        return true;
    }

    return false;
}

function signIn() {
    if (firebase.auth().currentUser) {
        // already logged in, first log out
        firebase.auth().signOut();
    }

    // get from form
    var email = "";
    var password = "";
    if (checkEmail && checkPasssword) {
        // continue process
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // add error handling
        });
    } else {
        // abort process
        return;
    }

    // hide form
}

function register() {
    // get from form
    var email = "";
    var password = "";

    if (checkEmail && checkPasssword) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // add error handling
        });
    } else {
        // abort process
        return;
    }

    // hide form
}