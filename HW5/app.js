$(document).ready(function () {
    var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};



    $('.js-save').on('click', function () {
        /* get the key and the value */
        var key = $(this).data('key');
        var value = $(`#${key}`).val();

        // save it local storage
        dailyTasks[key] = value;
        localStorage.setItem('myDay', JSON.stringify(dailyTasks));
        $(`#${key}`).val('');

        $('#result').text(value);

    });

    /* init */
    /* pull from local storage */
    $('#hour-9').val(dailyTasks['hour-9']);
    $('#hour-10').val(dailyTasks['hour-10']);
    $('#hour-11').val(dailyTasks['hour-11']);

});


var currentHour = moment().hours();  /*** 9 */
// loop through your hours
// var blockHour = something;
// if (blockhour < currentHour)
//     style it
// if (blockhour === currentHour)
//     style it