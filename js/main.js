//The purpose of this javascript is to copy an element
//This event listens for a click
//When click it copies the image and puts it next to it.
var image = document.getElementsByTagName( 'img' )[ 0 ];

image.addEventListener( 'click', copyImage );

function copyImage() {

    var original = document.getElementsByTagName( 'img' )[ 0 ];
    var copy = original.cloneNode( true );

    document.getElementById( 'images' ).appendChild( copy );
}

//The purpose is to change color of the text h2 when one of the nav options is double clicked
//This event listens for a dblclick
//When clicked it changes the color of the h2

var option = document.getElementsByTagName( 'li' );

option.addEventListener( 'dblclick', changeColor );
