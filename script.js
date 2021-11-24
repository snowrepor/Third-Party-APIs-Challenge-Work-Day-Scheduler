$(document).ready(function() {
// Show Date and Time in Header 
$('#currentDay').append();

function addDate() {
$('#currentDay').html(moment().format('MMMM Do YYYY, h:mm'));
} setInterval(addDate, 1000);


});