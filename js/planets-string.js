(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split(",");
    //
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsString2 = planetsArray.join('<br>');
    // console.log(planetsString2);

    planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    var planetsUl = "<ul>";
    planetsArray.forEach(function (planet) {
        planetsUl += "<li>" + planet + "</li>";
    });
    planetsUl += "</ul>";

    console.log(planetsUl);
    document.getElementById("planets").innerHTML = planetsUl;

})();