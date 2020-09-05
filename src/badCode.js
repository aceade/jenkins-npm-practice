
var x = 1;

var shouldAddNumber = false;

// not used
var pootis = "Pootispencer here!";

function thisIsNotGoodCode() {

    // no curly braces here, but would expect (x+=2) to be invoked only if shouldAddNumber is false
    if (shouldAddNumber)
        x++;
        x+= 2;

    if (x == 4) {
        console.log("X is 4");
    } else 
        console.log("X is", x);
}