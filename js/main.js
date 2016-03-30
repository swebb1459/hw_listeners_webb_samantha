var contactForm = document.getElementById( 'contact-form' );

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

contactForm.addEventListener( 'submit', logSubmit );
