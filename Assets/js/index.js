
//Display current day at the top of the calendar
$('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

console.log("Connected!")
var hour = dayjs().hour()

$(function () {
    for (i = 9; i < 18; i++) {
        if (hour === i) {
            $('#hour-' + i).children('textarea').addClass('present')
        }
        else if (hour > i) {
            $('#hour-' + i).children('textarea').addClass('past')
        }
        else {
            $('#hour-' + i).children('textarea').addClass('future')
        }
    }
});

//When save button is clicked
$('.saveBtn').on('click', function () {
    var text = $(this).siblings('textarea').val()
    var hour = $(this).parent().attr('id')
    localStorage.setItem(hour, text)
});

$(document).ready(function () {
    for (i = 9; i < 18; i++) {
        var text = localStorage.getItem('hour-' + i)
        $('#hour-' + i).children('textarea').val(text)
    }
});