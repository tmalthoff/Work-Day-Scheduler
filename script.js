$(document).ready(function() {
  
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });

  function hourUpdater() {
   //Works on changing the updater for the time block, itll add a class based 
   //on what it is, so then the css will latch on to it
    var currentHour = moment().hours();

    $(".time-block").each(function() {
     var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();
  var interval = setInterval(hourUpdater, 15000);
//Will retrieve the stored info
  $("#9 .description").val(localStorage.getItem("9"));
  
  $("#10 .description").val(localStorage.getItem("10"));
  
  $("#11 .description").val(localStorage.getItem("11"));
  
  $("#12 .description").val(localStorage.getItem("12"));
  
  $("#13 .description").val(localStorage.getItem("13"));
  
  $("#14 .description").val(localStorage.getItem("14"));
  
  $("#15 .description").val(localStorage.getItem("15"));
  
  $("#16 .description").val(localStorage.getItem("16"));
  
  $("#17 .description").val(localStorage.getItem("17"));

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

