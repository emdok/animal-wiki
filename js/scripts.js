$(document).ready(function() {
  var animal = (prompt("Which animal would you like to learn more about?"));


  if (animal === "turtles") {
      $("#turtles").show();
    } else if (animal === "spiders") {
      $("#spiders").show();
    } else if (animal === "insects")  {
      $("#insects").show();
    }
      else {
        $("#none").show();
    }

});
