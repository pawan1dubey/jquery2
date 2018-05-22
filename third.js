$(document).ready(function(){


$(".container").hide();
$("#modalbtn").click(function(){

$(".container").slideDown(1000);

});

$("#ok").click(function(){

$(".container").slideUp(1000);
alert("Your changes have been saved");


});

$("#cancel").click(function(){

$(".container").slideUp(1000);

});










});
