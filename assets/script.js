$(document).ready(function () {

 // function to save notes
  $('.saveBtn').on('click', function () {
    console.log(this);
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
  });
  
  function updatePlanner() {
    var currentHour = moment().hour();

// function to change color based on present, past and future
// array to loop through times for color blocks
    $('.time-block').each(function () {
      var timeBlockHour = parseInt($(this).attr('id').split('hour')[1]);

      if (timeBlockHour < currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
    });
  }

  var interval = setInterval(updatePlanner, 15000);

  $('#9hour.description').val(localStorage.getItem('9hour'));
  $('#10hour.description').val(localStorage.getItem('10hour'));
  $('#11hour.description').val(localStorage.getItem('11hour'));
  $('#12hour.description').val(localStorage.getItem('12hour'));
  $('#13hour.description').val(localStorage.getItem('13hour'));
  $('#14hour.description').val(localStorage.getItem('14hour'));
  $('#15hour.description').val(localStorage.getItem('15hour'));
  $('#16hour.description').val(localStorage.getItem('16hour'));
  $('#17hour.description').val(localStorage.getItem('17hour'));

  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));  

  updatePlanner();
});

