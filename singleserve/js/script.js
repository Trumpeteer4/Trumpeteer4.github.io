$(document).ready(function() {
	

$(function () {
    var $element = $('.loading');
    setInterval(function () {
        $element.fadeIn(900).delay(200).fadeOut(900).delay(200).fadeIn(900);
    }, 900);
});

$('#one').fadeIn(900).delay(10000);
$('#one').fadeOut();

$('#two').fadeOut(0).delay(10000).fadeIn(900).delay(10000).fadeOut(900);
$('#two').fadeOut();

$('#three').fadeOut(0).delay(21000).fadeIn(900).delay(10000).fadeOut(900);
$('#three').fadeOut();

$('#four').fadeOut(0).delay(32000).fadeIn(900).delay(10000).fadeOut(900);
$('#four').fadeOut();

$('#five').fadeOut(0).delay(43000).fadeIn(900).delay(10000).fadeOut(900);
$('#five').fadeOut();

$('#six').fadeOut(0).delay(54000).fadeIn(900).delay(10000).fadeOut(900);
$('#six').fadeOut();

$('#seven').fadeOut(0).delay(65000).fadeIn(900).delay(10000).fadeOut(900);
$('#seven').fadeOut();

$('#eight').fadeOut(0).delay(76000).fadeIn(900).delay(10000).fadeOut(900);
$('#eight').fadeOut();

$('#nine').fadeOut(0).delay(88000).fadeIn(900).delay(10000).fadeOut(900);
$('#nine').fadeOut();

$('#ten').fadeOut(0).delay(98000).fadeIn(900).delay(10000).fadeOut(900);
$('#ten').fadeOut();

$('#eleven').fadeOut(0).delay(108000).fadeIn(900).delay(10000).fadeOut(900);
$('#eleven').fadeOut();

$('#twelve').fadeOut(0).delay(120000).fadeIn(900).delay(10000).fadeOut(900);
$('#twelve').fadeOut();

$('#thirteen').fadeOut(0).delay(131000).fadeIn(900).delay(10000).fadeOut(900);
$('#thirteen').fadeOut();

$('#fourteen').fadeOut(0).delay(142000).fadeIn(900).delay(10000).fadeOut(900);
$('#fourteen').fadeOut();

$('#fifteen').fadeOut(0).delay(153000).fadeIn(900).delay(10000).fadeOut(900);
$('#fifteen').fadeOut();

$('#sixteen').fadeOut(0).delay(164000).fadeIn(900).delay(50000).fadeOut(900);
$('#sixteen').fadeOut();

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 7000).html(percent + "% ");
}
progress(27, $('#progressBar'));
progress(35, $('#progressBar'));
progress(62, $('#progressBar'));
progress(98, $('#progressBar'));
progress(98, $('#progressBar'));
progress(98, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(97, $('#progressBar'));
progress(0, $('#progressBar'));

var list = ["0%", "62%", "98%", "97%", "0%"];

document.getElementById("numbers").innerHTML = list[0];


setTimeout(one, 18000);

function one() {
	document.getElementById("numbers").innerHTML = list[1];
}

setTimeout(two, 30000);

function two() {
	document.getElementById("numbers").innerHTML = list[2];
}

setTimeout(three, 40800);

function three() {
	document.getElementById("numbers").innerHTML = list[3];
}

setTimeout(four, 200000);

function four() {
	document.getElementById("numbers").innerHTML = list[4];
}




});