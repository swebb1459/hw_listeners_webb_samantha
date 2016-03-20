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

//The purpose is to change text of the text h2 when one of the nav option 1 is double clicked
//This event listens for a dblclick
//When clicked it changes the color of the h2

var texts = document.getElementsByTagName( 'li' );
var text = texts [ 0 ];

text.addEventListener( 'dblclick', changeText );

function changeText() {
    var h2Text = document.getElementsByTagName( 'h2' )[ 1 ];

    h2Text.innerHTML = 'I changed when you doubled clicked';
    h2Text.style.color = '#ff00ff';
}

//The purpose of the code below is to insert a class on a dblclick of option 2
//This event listens for a double click
//When moused over a class will be added to the p tag

var texts = document.getElementsByTagName( 'li' );
var text = texts [ 1 ];

text.addEventListener( 'dblclick', addClass );

function addClass() {
    var newClass = document.getElementsByTagName( 'p' )[ 0 ];

    newClass.className += 'text-style';

}
