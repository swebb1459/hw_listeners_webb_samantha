var submitButton = document.getElementById( 'button' );

function logSubmit( event ) {
    event.preventDefault();

    var firstName = document.getElementById( 'firstName' );
    var lastName = document.getElementById( 'lastName' );
    var email = document.getElementById( 'email' );
    var message = document.getElementById( 'message' );

    console.log( 'The first name is: ' + firstName.value );
    console.log( 'The last name is: ' + lastName.value );
    console.log( 'The email is: ' + email.value );
    console.log( 'The message is: ' + message.value );
}

submitButton.addEventListener( 'click', logSubmit );
