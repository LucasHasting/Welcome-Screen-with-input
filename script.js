// See if the document is ready
$(document).ready(function () {
  // Click the button
  $("#submit").click(function () {
    let fname = $("#fname").val();
    let greeting = "Hello there, " + fname + ".";

    // If there is text in the fname filed
    if (fname.trim()) {
      // Welcome the user
      $("#name").text(greeting);
    } else {
      // Display nothing if there is no name
      $("#name").text("");
    }
  });
});