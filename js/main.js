var heading = document.getElementById( 'heading1' );
var i = 0;

heading.addEventListener( 'click', clicking );

function clicking() {
    var paragraph = document.createElement( 'p' );

    paragraph.innerHTML = 'This is click number <a id="count">0</a>';

    if ( i === 0 ) {

        document.body.appendChild( paragraph );

        document.getElementById( 'count' ).innerHTML = ++i;

    } else {
        document.getElementById( 'count' ).innerHTML = ++i;
    }
}
