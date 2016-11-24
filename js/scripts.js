jQuery(document).ready(function () {
    var sentence = prompt("Enter a sentence please");
    alert(sentence);

    var first = sentence.charAt(0).toUpperCase();
    var last = sentence.slice(-1).toUpperCase();
    var sent1 = first + last;
    alert(sent1);

    function reverse(sent1) {
        return sent1.split("").reverse().join("");
    };
    alert(reverse(sent1));

    var sent4 = reverse(sent1);
    var revadd = sentence + sent4
    alert(revadd);


    var four = function (sentence) {
        var length = sentence.length;
        var position = charAt(length / 2);
        alert(position + revadd);
    }
});
