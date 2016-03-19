var heading = document.getElementById( 'heading1' );
var i = 0;

function clicking() {
    var paragraph = document.createElement( 'p' );

    paragraph.innerHTML = 'This is click number <a id="count">0</a>';
    document.body.appendChild( paragraph );

    document.getElementById( 'count' ).innerHTML = ++i;

}

heading.addEventListener( 'click', clicking );
