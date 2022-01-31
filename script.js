//Loding date todays
var todaysDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(todaysDate);

$(document).ready(function () {

    // Button function save
    $(".saveBtn").on("click", function () {
        // variables for text input and time
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //  Storage save
        localStorage.setItem(time, text);
    })


    function timeNowHr() {
        // get curent hr value
        var timeNow = moment().hour();

        // function to go thru timeblocks
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

          
            if (timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
                
            }
            else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Request from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour17 .description").val(localStorage.getItem("hour18"));

    timeNowHr();
})

