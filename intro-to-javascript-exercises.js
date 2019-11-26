/* Section 1 */

var a = 1;
var b = a++;
var c = ++a;

// what is the value of a, b, and c?

var d = "hello";
var e = false;

d++;
e++;

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

var price = 2.7;
price.toFixed(2);

var price = "2.7";
price.toFixed(2);

var price = "2.7";
price.toFixed(2);

isNaN(0);

isNaN(1);

isNaN("");

isNaN("string");

isNaN("0");

isNaN("1");

isNaN("3.145");

isNaN(Number.MAX_VALUE);

isNaN(Infinity);

isNaN("true");

isNaN(true);

isNaN("false");

isNaN(false);

// to illustrate why the isNaN() function is needed:
NaN == NaN;

!true;

!false;

!!true;

!!false;

!!0;

!!-0;

!!1;

!!-1;

!!0.1;

!!"hello";

!!"";

!!'';

!!"false";

!!"0";


/* Section two */

var sample = "Hello Codeup";

sample.length();

sample.toLowerCase();

sample.toUpperCase();

sample += " Students";

sample = sample.replace("Students", "Class");

sample.indexOf("c");

sample.indexOf("C");

sample.substring(6, 12);


/* Section three */

var littleMermaid = 3*3;

var brotherBear = 5*3;

var hercules = 1*3;

console.log(littleMermaid + brotherBear + hercules);


var google = 400*6;

var amazon = 380*4;

var facebook = 350*10;

console.log(google + amazon + facebook);


var classAt8AM = false;

var classSize = 125;

var currClassSize = 108;

var canRegister = (currClassSize < classSize) && !classAt8AM;


var hasKrogerCard = true;

var cartSize = 6;

var offerValid = true;

var canHasDiscount = offerValid && (cartSize > 2 || hasKrogerCard);


/* Section four */

var username = 'codeup';

var password = 'notastrongpassword';

var atLeastFiveCharacters = password.length >= 5;

var usernameNotInPass = password.indexOf(username);
usernameNotInPass = !password.includes(username);

var noMoreThanTwentyCharacters = username.length <= 20;

var noWhitespace = username.trim() === username && password.trim() === password;


