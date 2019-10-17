$(document).ready(function () {

    $('.js-save').on('click', function () {
        /* get the key and the value */
        var time = $(this).parent().attr('id');
        var value = $(this).siblings('.description').val();

        // save it local storage
        localStorage.setItem(time, value);


    });

    /* init */
    /* pull from local storage */
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
});