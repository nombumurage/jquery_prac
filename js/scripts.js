jQuery(document).ready(function () {
    jQuery("h1").click(function () {
        alert("This is a header");
        alert("I told you this is a HEADER!!!!!!!!!DUMBASS");
    });
    jQuery("p").click(function () {
        alert("This is a paragraph");
    });
    jQuery("img").click(function () {
        alert("This is an image");
    });
});

var sentence = prompt("Enter a sentence please");
var output = document.write(sentence);
var first = output.charAt(0);
