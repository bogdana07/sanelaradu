$(document).ready(function () {

    $('#date').text(moment().format('dddd, MMMM Do YYYY'));

    var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};



    $('.js-save').on('click', function () {
        /* get the key and the value */
        var key = $(this).data('key');
        var value = $(`#${key}`).val();

        // save it local storage
        dailyTasks[key] = value;
        localStorage.setItem('myDay', JSON.stringify(dailyTasks));
        $(`#${key}`).css('text-align', 'center');

    });

    /* init */
    /* pull from local storage */
    $('#hour-9').val(dailyTasks['hour-9']);
    $('#hour-10').val(dailyTasks['hour-10']);
    $('#hour-11').val(dailyTasks['hour-11']);

});


var currentHour = moment().hours();
console.log(currentHour);

var hourNine = $('#hour-9').val('9');


if (hourNine < currentHour) {
    $('.activity').css('background-color', 'grey');
}

//if blockHour

// loop through your hours
// var blockHour = something;
// if (blockhour < currentHour)
//     style it
// if (blockhour === currentHour)
//     style it