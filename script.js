$(function () {
  // Get references to the DOM elements
  var currentDayEl = $("#currentDay");
  var timeBlocksEl = $(".time-block");
  var saveBtnsEl = $(".saveBtn");

  // Get the current date and format it using Day.js
  var currentDate = dayjs().format("dddd, MMMM D");

  // Display the current date in the header
  currentDayEl.text(currentDate);

  // Iterate over each time block
  timeBlocksEl.each(function () {
    var timeBlockEl = $(this);
    var hour = parseInt(timeBlockEl.attr("id").replace("hour-", ""));
    var descriptionEl = timeBlockEl.find(".description");

    // Set the description text to the value stored in local storage
    descriptionEl.val(localStorage.getItem("hour-" + hour));

    // Apply the appropriate CSS class based on the current time
    if (hour < dayjs().hour()) {
      timeBlockEl.addClass("past");
    } else if (hour === dayjs().hour()) {
      timeBlockEl.addClass("present");
    } else {
      timeBlockEl.addClass("future");
    }
  });

  // Add a click event listener to the save buttons
  saveBtnsEl.on("click", function () {
    var timeBlockEl = $(this).closest(".time-block");
    var hour = parseInt(timeBlockEl.attr("id").replace("hour-", ""));
    var descriptionEl = timeBlockEl.find(".description");

    // Save the description to local storage
    localStorage.setItem("hour-" + hour, descriptionEl.val());
  });
});