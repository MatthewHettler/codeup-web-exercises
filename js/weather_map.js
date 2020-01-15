////////////////////////////////////////////////////////// map  ///////////////////////////////////////////////////////////////////////

//=========== Map ============//
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-98.4936, 29.4241]
});
/////////////////////////////////////////////////////// map marker  ///////////////////////////////////////////////////////////////////////

//Default Marker Placed on San Antonio, TX
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

<!--text animation-->

var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}


// calls for a locations weather information by lat and long coordinates. //
$.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936").done

/////////////////////////////////////////////////// Default ////////////////////////////////////////////////////////////

// converts time into a string and console logs it. //
(function (data) {

    // shows full data from darkSky
    console.log(data);

    // // shows current time
    // var dateObject = new Date(data.currently.time * 1000);
    // console.log(dateObject.toString());
    // $(".dateAndTime").append("Today's Date & Time:" + "<p class=\"dateObjectStyling\">" + dateObject + "</p>"); // writes info into div 2

    //================== Background Video Info ===================//

    // TODO: shows icon
    var backgroundVidSrc = "video/" + data.daily.data[0].icon + '.mp4';

    $(".parent").append('<video autoplay muted loop class="videoStyling"> <source src="' + backgroundVidSrc + '"></video>');

    //=============== Day 1 (index 0) Info ================//

    // TODO: shows date // DONE
    var day1Date = new Date(data.daily.data[0].time * 1000);
    var day1split = day1Date.toString().split(" ");
    var day1join = day1split[0] + " " + day1split[1] + " " + day1split[2] + " ";

    // TODO: shows icon
    var imgSrc = "icon/" + data.daily.data[0].icon + '.png';

    // TODO: shows high and low temperatures // DONE
    var day1HighTemp = parseInt(data.daily.data[0].temperatureHigh);
    var day1LowTemp = parseInt(data.daily.data[0].temperatureLow);

    // TODO: shows weather summary // DONE
    var day1Summary = (data.daily.data[0].summary);

    // TODO: shows precipitation probability // DONE
    var day1Precip = parseInt(data.daily.data[0].precipProbability * 100);
    console.log(day1Precip);

    // TODO: shows humidity // DONE
    var day1Humidity = (data.daily.data[0].humidity * 100);

    // TODO: shows wind speed // DONE
    var day1Wind = (data.daily.data[0].windSpeed);

    // appending all the data and writing it into div 3 as an unordered list
    $(".innerDiv3").append(
        "<ul class=\"daysStyling\">" +
        "<li>" + day1join.toUpperCase() + "</li>" +
        "<li>" + '<img src="' + imgSrc + '" alt="" />' + "</li>" +
        "<li>" + "High: " + day1HighTemp + "&#176;" + " / " + " Low: " + day1LowTemp + "&#176;" + "</li>" +
        "<li>" + day1Summary + "</li>" +
        "<li>" + "Chance of Rain: " + day1Precip + "%" + "</li>" +
        "<li>" + "Humidity:" + " " + day1Humidity + "</li>" +
        "<li>" + "Wind:" + " " + day1Wind + " mph" + "</li>" +
        "</ul>");

    //=============== Day 2 Info ================//

    // TODO: shows day 2 (at index 1) date // DONE
    var day2Date = new Date(data.daily.data[1].time * 1000);
    var day2split = day2Date.toString().split(" ");
    var day2join = day2split[0] + " " + day2split[1] + " " + day2split[2] + " ";

    // TODO: shows icon
    var imgSrc2 = "icon/" + data.daily.data[1].icon + '.png';

    // TODO: shows day 2 (at index 1) high and low temperatures // DONE
    var day2HighTemp = parseInt(data.daily.data[1].temperatureHigh);
    var day2LowTemp = parseInt(data.daily.data[1].temperatureLow);

    // TODO: shows day 2 (at index 1) weather summary // DONE
    var day2Summary = (data.daily.data[1].summary);

    // TODO: shows precipitation probability // DONE
    var day2Precip = parseInt(data.daily.data[1].precipProbability * 100);
    console.log(day2Precip);

    // TODO: shows day 2 (at index 1) humidity // DONE
    var day2Humidity = (data.daily.data[1].humidity * 100);

    // TODO: shows day 2 (at index 1) humidity // DONE
    var day2Wind = (data.daily.data[1].windSpeed);

    // appending all the data and writing it into div 3 as an unordered list
    $(".innerDiv4").append(
        "<ul class=\"daysStyling\">" +
        "<li>" + day2join.toUpperCase() + "</li>" +
        "<li>" + '<img src="' + imgSrc2 + '" alt="" />' + "</li>" +
        "<li>" + "High: " + day2HighTemp + "&#176;" + " / " + " Low: " + day2LowTemp + "&#176;" + "</li>" +
        "<li>" + day2Summary + "</li>" +
        "<li>" + "Chance of Rain: " + day2Precip + "%" + "</li>" +
        "<li>" + "Humidity:" + " " + day2Humidity + "</li>" +
        "<li>" + "Wind:" + " " + day2Wind + " mph" + "</li>" +
        "</ul>");

    //=============== Day 3 Info ================//

    // TODO: shows day 3 (at index 2) date // DONE
    var day3Date = new Date(data.daily.data[2].time * 1000);
    var day3split = day3Date.toString().split(" ");
    var day3join = day3split[0] + " " + day3split[1] + " " + day3split[2] + " ";

    // TODO: shows icon
    var imgSrc3 = "icon/" + data.daily.data[2].icon + '.png';

    // TODO: shows day 3 (at index 1) high and low temperatures // DONE
    var day3HighTemp = parseInt(data.daily.data[2].temperatureHigh);
    var day3LowTemp = parseInt(data.daily.data[2].temperatureLow);

    // TODO: shows day 3 (at index 2) weather summary // DONE
    var day3Summary = (data.daily.data[2].summary);

    // TODO: shows precipitation probability // DONE
    var day3Precip = parseInt(data.daily.data[2].precipProbability * 100);
    console.log(day3Precip);

    // TODO: shows day 3 (at index 2) humidity // DONE
    var day3Humidity = (data.daily.data[2].humidity * 100);

    // TODO: shows day 3 (at index 2) humidity // DONE
    var day3Wind = (data.daily.data[2].windSpeed);

    // appending all the data and writing it into div 3 as an unordered list
    $(".innerDiv5").append(
        "<ul class=\"daysStyling\">" +
        "<li>" + day3join.toUpperCase() + "</li>" +
        "<li>" + '<img src="' + imgSrc3 + '" alt="" />' + "</li>" +
        "<li>" + "High: " + day3HighTemp + "&#176;" + " / " + " Low: " + day3LowTemp + "&#176;" + "</li>" +
        "<li>" + day3Summary + "</li>" +
        "<li>" + "Chance of Rain: " + day2Precip + "%" + "</li>" +
        "<li>" + "Humidity:" + " " + day3Humidity + "</li>" +
        "<li>" + "Wind:" + " " + day3Wind + " mph" + "</li>" +
        "</ul>");
    //===========================================//

});

////////////////////////////////////////////////// draggable marker  ///////////////////////////////////////////////////////////////////////
function onDragEnd() {
    var lngLat = marker.getLngLat();
    console.log(lngLat);
    var weather = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + "/" + lngLat.lat + "," + lngLat.lng;
    // // Pulling Weather
    $.get(weather).done(function (data) {
        console.log(data);

        // // shows current time
        // var dateObject = new Date(data.currently.time * 1000);
        // console.log(dateObject.toString());
        // $(".dateAndTime").html("Today's Date & Time:" + "<p class=\"dateObjectStyling\">" + dateObject + "</p>"); // writes info into div 2

        //================== Background Video Info ===================//

        // TODO: shows icon
        var backgroundVidSrc = "video/" + data.daily.data[0].icon + '.mp4';

        $(".parent").append('<video autoplay muted loop class="videoStyling"> <source src="' + backgroundVidSrc + '"></video>');

        //=============== Day 1 (index 0) Info ================//

        // TODO: shows date // DONE
        var day1Date = new Date(data.daily.data[0].time * 1000);
        var day1split = day1Date.toString().split(" ");
        var day1join = day1split[0] + " " + day1split[1] + " " + day1split[2] + " ";

        // TODO: shows icon
        var imgSrc = "icon/" + data.daily.data[0].icon + '.png';

        // TODO: shows high and low temperatures // DONE
        var day1HighTemp = parseInt(data.daily.data[0].temperatureHigh);
        var day1LowTemp = parseInt(data.daily.data[0].temperatureLow);

        // TODO: shows weather summary // DONE
        var day1Summary = (data.daily.data[0].summary);

        // TODO: shows precipitation probability // DONE
        var day1Precip = parseInt(data.daily.data[0].precipProbability * 100);
        console.log(day1Precip);

        // TODO: shows humidity // DONE
        var day1Humidity = (data.daily.data[0].humidity * 100);

        // TODO: shows wind speed // DONE
        var day1Wind = (data.daily.data[0].windSpeed);

        // appending all the data and writing it into div 3 as an unordered list
        $(".innerDiv3").html(
            "<ul class=\"daysStyling\">" +
            "<li>" + day1join.toUpperCase() + "</li>" +
            "<li>" + '<img src="' + imgSrc + '" alt="" />' + "</li>" +
            "<li>" + "High: " + day1HighTemp + "&#176;" + " / " + " Low: " + day1LowTemp + "&#176;" + "</li>" +
            "<li>" + day1Summary + "</li>" +
            "<li>" + "Chance of Rain: " + day1Precip + "%" + "</li>" +
            "<li>" + "Humidity:" + " " + day1Humidity + "</li>" +
            "<li>" + "Wind:" + " " + day1Wind + " mph" + "</li>" +
            "</ul>");

        //=============== Day 2 Info ================//

        // TODO: shows day 2 (at index 1) date // DONE
        var day2Date = new Date(data.daily.data[1].time * 1000);
        var day2split = day2Date.toString().split(" ");
        var day2join = day2split[0] + " " + day2split[1] + " " + day2split[2] + " ";

        // TODO: shows icon
        var imgSrc2 = "icon/" + data.daily.data[1].icon + '.png';

        // TODO: shows day 2 (at index 1) high and low temperatures // DONE
        var day2HighTemp = parseInt(data.daily.data[1].temperatureHigh);
        var day2LowTemp = parseInt(data.daily.data[1].temperatureLow);

        // TODO: shows day 2 (at index 1) weather summary // DONE
        var day2Summary = (data.daily.data[1].summary);

        // TODO: shows precipitation probability // DONE
        var day2Precip = parseInt(data.daily.data[1].precipProbability * 100);
        console.log(day2Precip);

        // TODO: shows day 2 (at index 1) humidity // DONE
        var day2Humidity = (data.daily.data[1].humidity * 100);

        // TODO: shows day 2 (at index 1) humidity // DONE
        var day2Wind = (data.daily.data[1].windSpeed);

        // appending all the data and writing it into div 3 as an unordered list
        $(".innerDiv4").html(
            "<ul class=\"daysStyling\">" +
            "<li>" + day2join.toUpperCase() + "</li>" +
            "<li>" + '<img src="' + imgSrc2 + '" alt="" />' + "</li>" +
            "<li>" + "High: " + day2HighTemp + "&#176;" + " / " + " Low: " + day2LowTemp + "&#176;" + "</li>" +
            "<li>" + day2Summary + "</li>" +
            "<li>" + "Chance of Rain: " + day2Precip + "%" + "</li>" +
            "<li>" + "Humidity:" + " " + day2Humidity + "</li>" +
            "<li>" + "Wind:" + " " + day2Wind + " mph" + "</li>" +
            "</ul>");

        //=============== Day 3 Info ================//

        // TODO: shows day 3 (at index 2) date // DONE
        var day3Date = new Date(data.daily.data[2].time * 1000);
        var day3split = day3Date.toString().split(" ");
        var day3join = day3split[0] + " " + day3split[1] + " " + day3split[2] + " ";

        // TODO: shows icon
        var imgSrc3 = "icon/" + data.daily.data[2].icon + '.png';

        // TODO: shows day 3 (at index 1) high and low temperatures // DONE
        var day3HighTemp = parseInt(data.daily.data[2].temperatureHigh);
        var day3LowTemp = parseInt(data.daily.data[2].temperatureLow);

        // TODO: shows day 3 (at index 2) weather summary // DONE
        var day3Summary = (data.daily.data[2].summary);

        // TODO: shows precipitation probability // DONE
        var day3Precip = parseInt(data.daily.data[2].precipProbability * 100);
        console.log(day3Precip);

        // TODO: shows day 3 (at index 2) humidity // DONE
        var day3Humidity = (data.daily.data[2].humidity * 100);

        // TODO: shows day 3 (at index 2) humidity // DONE
        var day3Wind = (data.daily.data[2].windSpeed);

        // appending all the data and writing it into div 3 as an unordered list
        $(".innerDiv5").html(
            "<ul class=\"daysStyling\">" +
            "<li>" + day3join.toUpperCase() + "</li>" +
            "<li>" + '<img src="' + imgSrc3 + '" alt="" />' + "</li>" +
            "<li>" + "High: " + day3HighTemp + "&#176;" + " / " + " Low: " + day3LowTemp + "&#176;" + "</li>" +
            "<li>" + day3Summary + "</li>" +
            "<li>" + "Chance of Rain: " + day2Precip + "%" + "</li>" +
            "<li>" + "Humidity:" + " " + day3Humidity + "</li>" +
            "<li>" + "Wind:" + " " + day3Wind + " mph" + "</li>" +
            "</ul>");
        //===========================================//

        var mapCity = reverseGeocode(lngLat, mapboxToken);
        mapCity.then(function(result) {
            $('.weather-location').html(result);
            console.log(result);
        });
    });
}

marker.on('dragend', onDragEnd);

/////////////////////////////////////////////////// search bar  ///////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    $('#userSearch').keypress(function (e) {
        if (e.keyCode == 13)
            $('#button').click();
    });
});

//Function for button search
$('#button').click(function () {
    var search = $(userSearch).val();
    console.log(search);
    //Use geocode function to get coordinates based on a physical address then store
    geocode(search, mapboxToken).then(function (result) {
        var long = result[0].toString();
        var lat = result[1].toString();
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + ", " + long)
            .done(function (data) {
                console.log(data);

                // // shows current time
                // var dateObject = new Date(data.currently.time * 1000);
                // console.log(dateObject.toString());
                // $(".dateAndTime").html("Today's Date & Time:" + "<p class=\"dateObjectStyling\">" + dateObject + "</p>"); // writes info into div 2

                //================== Background Video Info ===================//

                // TODO: shows icon
                var backgroundVidSrc = "video/" + data.daily.data[0].icon + '.mp4';

                $(".parent").append('<video autoplay muted loop class="videoStyling"> <source src="' + backgroundVidSrc + '"></video>');

                //=============== Day 1 (index 0) Info ================//

                // TODO: shows date // DONE
                var day1Date = new Date(data.daily.data[0].time * 1000);
                var day1split = day1Date.toString().split(" ");
                var day1join = day1split[0] + " " + day1split[1] + " " + day1split[2] + " ";

                // TODO: shows icon
                var imgSrc = "icon/" + data.daily.data[0].icon + '.png';

                // TODO: shows high and low temperatures // DONE
                var day1HighTemp = parseInt(data.daily.data[0].temperatureHigh);
                var day1LowTemp = parseInt(data.daily.data[0].temperatureLow);

                // TODO: shows weather summary // DONE
                var day1Summary = (data.daily.data[0].summary);

                // TODO: shows precipitation probability // DONE
                var day1Precip = parseInt(data.daily.data[0].precipProbability * 100);
                console.log(day1Precip);

                // TODO: shows humidity // DONE
                var day1Humidity = (data.daily.data[0].humidity * 100);

                // TODO: shows wind speed // DONE
                var day1Wind = (data.daily.data[0].windSpeed);

                // appending all the data and writing it into div 3 as an unordered list
                $(".innerDiv3").html(
                    "<ul class=\"daysStyling\">" +
                    "<li>" + day1join.toUpperCase() + "</li>" +
                    "<li>" + '<img src="' + imgSrc + '" alt="" />' + "</li>" +
                    "<li>" + "High: " + day1HighTemp + "&#176;" + " / " + " Low: " + day1LowTemp + "&#176;" + "</li>" +
                    "<li>" + day1Summary + "</li>" +
                    "<li>" + "Chance of Rain: " + day1Precip + "%" + "</li>" +
                    "<li>" + "Humidity:" + " " + day1Humidity + "</li>" +
                    "<li>" + "Wind:" + " " + day1Wind + " mph" + "</li>" +
                    "</ul>");

                //=============== Day 2 Info ================//

                // TODO: shows day 2 (at index 1) date // DONE
                var day2Date = new Date(data.daily.data[1].time * 1000);
                var day2split = day2Date.toString().split(" ");
                var day2join = day2split[0] + " " + day2split[1] + " " + day2split[2] + " ";

                // TODO: shows icon
                var imgSrc2 = "icon/" + data.daily.data[1].icon + '.png';

                // TODO: shows day 2 (at index 1) high and low temperatures // DONE
                var day2HighTemp = parseInt(data.daily.data[1].temperatureHigh);
                var day2LowTemp = parseInt(data.daily.data[1].temperatureLow);

                // TODO: shows day 2 (at index 1) weather summary // DONE
                var day2Summary = (data.daily.data[1].summary);

                // TODO: shows precipitation probability // DONE
                var day2Precip = parseInt(data.daily.data[1].precipProbability * 100);
                console.log(day2Precip);

                // TODO: shows day 2 (at index 1) humidity // DONE
                var day2Humidity = (data.daily.data[1].humidity * 100);

                // TODO: shows day 2 (at index 1) humidity // DONE
                var day2Wind = (data.daily.data[1].windSpeed);

                // appending all the data and writing it into div 3 as an unordered list
                $(".innerDiv4").html(
                    "<ul class=\"daysStyling\">" +
                    "<li>" + day2join.toUpperCase() + "</li>" +
                    "<li>" + '<img src="' + imgSrc2 + '" alt="" />' + "</li>" +
                    "<li>" + "High: " + day2HighTemp + "&#176;" + " / " + " Low: " + day2LowTemp + "&#176;" + "</li>" +
                    "<li>" + day2Summary + "</li>" +
                    "<li>" + "Chance of Rain: " + day2Precip + "%" + "</li>" +
                    "<li>" + "Humidity:" + " " + day2Humidity + "</li>" +
                    "<li>" + "Wind:" + " " + day2Wind + " mph" + "</li>" +
                    "</ul>");

                //=============== Day 3 Info ================//

                // TODO: shows day 3 (at index 2) date // DONE
                var day3Date = new Date(data.daily.data[2].time * 1000);
                var day3split = day3Date.toString().split(" ");
                var day3join = day3split[0] + " " + day3split[1] + " " + day3split[2] + " ";

                // TODO: shows icon
                var imgSrc3 = "icon/" + data.daily.data[2].icon + '.png';

                // TODO: shows day 3 (at index 1) high and low temperatures // DONE
                var day3HighTemp = parseInt(data.daily.data[2].temperatureHigh);
                var day3LowTemp = parseInt(data.daily.data[2].temperatureLow);

                // TODO: shows day 3 (at index 2) weather summary // DONE
                var day3Summary = (data.daily.data[2].summary);

                // TODO: shows precipitation probability // DONE
                var day3Precip = parseInt(data.daily.data[2].precipProbability * 100);
                console.log(day3Precip);

                // TODO: shows day 3 (at index 2) humidity // DONE
                var day3Humidity = (data.daily.data[2].humidity * 100);

                // TODO: shows day 3 (at index 2) humidity // DONE
                var day3Wind = (data.daily.data[2].windSpeed);

                // appending all the data and writing it into div 3 as an unordered list
                $(".innerDiv5").html(
                    "<ul class=\"daysStyling\">" +
                    "<li>" + day3join.toUpperCase() + "</li>" +
                    "<li>" + '<img src="' + imgSrc3 + '" alt="" />' + "</li>" +
                    "<li>" + "High: " + day3HighTemp + "&#176;" + " / " + " Low: " + day3LowTemp + "&#176;" + "</li>" +
                    "<li>" + day3Summary + "</li>" +
                    "<li>" + "Chance of Rain: " + day2Precip + "%" + "</li>" +
                    "<li>" + "Humidity:" + " " + day3Humidity + "</li>" +
                    "<li>" + "Wind:" + " " + day3Wind + " mph" + "</li>" +
                    "</ul>");
                //===========================================//
            });

        map.flyTo({center: result, zoom: 10});
        $(".weather-location").html(search.charAt(0).toUpperCase() + search.slice(1, search.length));
        marker.setLngLat([long, lat]);
    });
});

//===========================================================//