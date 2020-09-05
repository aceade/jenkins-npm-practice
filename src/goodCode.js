
var x = 1;

var shouldAddNumber = false;

function thisIsBetterCode() {
    "use strict";

    // this should not be called, so x should only be 1
    if (shouldAddNumber) {
        x++;
        x+= 2;
    }

    if (x === 4) {
        console.log("X is 4");
    } else {
        console.log("X is", x);
    }
}
thisIsBetterCode();