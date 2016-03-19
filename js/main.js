var heading = document.getElementById( 'heading1' );

function clicking () {
    var paragraph = document.createElement( 'div' );
    paragraph.innerHTML = 'This is click number x';
    document.body.appendChild( paragraph );
}

heading.addEventListener( 'click', clicking );
