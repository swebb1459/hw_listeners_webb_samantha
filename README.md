# Javascript Events

Samantha Webb

## Links

[GitHub Link](https://github.com/swebb1459/hw_listeners_webb_samantha)

## Resources

[HTML DOM cloneNode() Method](http://www.w3schools.com/jsref/met_node_clonenode.asp)

I used this as a reference to clone my image for the custom branch.

[Change an element's class with JavaScript](http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript)

I used this to help with how to insert a class for a tag. I had trouble initially because I was trying to change the class but I also needed to add it since the tag didn't even have one in the first place.

[Style Color Property](http://www.w3schools.com/jsref/prop_style_color.asp)

This site was useful on how to change to color of something in JavaScript.


[Why am I getting a TypeError: obj.addEventListener is a function?](http://stackoverflow.com/questions/15485030/why-am-i-getting-typeerror-obj-addeventlistener-is-not-a-function)

I had this problem and could not figure out why. Turns out I wasn't being specific as to which tag I wanted. Since there are multiple h2 tags, I needed to specify exactly with h2. The second answer was helpful.

[HTML DOM createElement() Method](http://www.w3schools.com/jsref/met_document_createelement.asp)

This I used when I was on the listener branch. I had to insert the p tag somewhere and didn't know where because I didn't create any tags for it to be inserted to. Turns out you can just insert it to the body.

## Comments

First off, sorry it is late. This has been a crazy week for me and I don't know where time has gone.

Secondly, this was quite challenging. I think the one thing that helped me out was talking to myself as I tried to figure out what was doing what. 

I think a lot of my troubles came for missing brackets or misspellings in the code. If I didn't get it, I just tried something else. 

One thing I wanted to do was a `mouseover` but the event would only happen once, so I changed it to a `dblclick`.

I think the listener branch gave me the most trouble. When I finally figured out how to change the number, it would still keep appending the paragraph over and over again. So the number would change on the first paragraph but wouldn't on the rest and would just repeat. I don't know if it's correct but I used an if/then statement so that the paragraph would only be appended once but the number would still change based on clicks.

What worked for me was setting things up one by one. First I would do the event listener, then the function. For the function, I would set up the static elements. Then I would add any dynamic changes.

For example, for the listener branch, I set up the event, the the function with just inserting text. Then I figured out how to change the number to reflect the number of clicks. This just helped with making sure things were working properly as I went.

When coding the JavaScript, I would get so caught up that I would forget to commit changes. It is something I need to work on.


