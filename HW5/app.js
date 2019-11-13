$(document).ready(function () {

    //moment js current date in header
    $('#date').text(moment().format('dddd, MMMM Do YYYY'));

    var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};

    //click event
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


    // //current hour
    // var currentHour = moment().hours();

    // //block hour
    // var blockHour = document.getElementById('blockHour');
    // console.log(blockHour.dataset.hour);

    // //loop through hours and style
    // if (blockHour.dataset.hour < currentHour) {
    //     $('.activity').css('background-color', 'grey');
    // }

    // else if (blockHour === currentHour) {
    //     $('.activity').css('background-color', 'green');
    // }


});



