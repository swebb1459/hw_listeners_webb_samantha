// The purpose of this javascript is to copy an element
//This event listens for a click
//When click it copies the image and puts it next to it.
var image = document.getElementsByTagName( 'img' )[ 0 ];

image.addEventListener( 'click', copyImage );

function copyImage() {

    var original = document.getElementsByTagName( 'figure' )[ 0 ];
    var copy = original.cloneNode( true );

    document.getElementById( 'images' ).appendChild( copy );
}
