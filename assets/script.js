$(document).ready(function() {
  $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));

  $("#currentDay").text(currentDate);
  
  })

  var hour = $(".hour");
  var time = moment().hour("kk");
  var saveBtn = $("saveBtn");

function updatePlanner() {

  $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
}
  setInterval(updatePlanner, 1000);
  
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    saveButton.addEventListener("click", updatePlanner);
  
      var text = $(this).siblings(".timeBlock").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(text, time);
      console.log(text);
      console.log(time);
    })

    $("#hour9.timeBlock").val(localStorage.getItem("hour9"));
    $("#hour10.timeBlock").val(localStorage.getItem("hour10"));
    $("#hour11.timeBlock").val(localStorage.getItem("hour11"));
    $("#hour12.timeBlock").val(localStorage.getItem("hour12"));
    $("#hour13.timeBlock").val(localStorage.getItem("hour13"));
    $("#hour14.timeBlock").val(localStorage.getItem("hour14"));
    $("#hour15.timeBlock").val(localStorage.getItem("hour15"));
    $("#hour16.timeBlock").val(localStorage.getItem("hour16"));
    $("#hour17.timeBlock").val(localStorage.getItem("hour17")); 


   
// function to change color based on present, past and future
// array to loop through times for color blocks

  $('.time-block').each(function () {
    var timeBlockHour = parseInt($(this).attr('id').split('hour')[1]);

    if (timeBlockHour < time) {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    } else if (timeBlockHour === time) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('present');
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  })

  
    

