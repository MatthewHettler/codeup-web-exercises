(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(this.radius, 2) ; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // return Math.round();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding === true) {
                console.log("Circle information rounded to the nearest whole number is: "+ Math.round(circle.getArea()));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    circle.radius = 5;
    console.log("Raw circle information");
    circle.logInfo(false);
    circle.logInfo(true);

})();