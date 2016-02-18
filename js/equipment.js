$(document).ready(function() {
  main();
});

function main() {
  climbingButton = $("#climbing-button");
  winterButton = $("#winter-button");
  hikingButton = $("#hiking-button");
  otherButton = $("#other-button");
  currentDisplay = $(".dynamic-display");

  climbingButton.click(function() {
    $("#other-display").hide();
    $("#winter-display").hide();
    $("#hiking-display").hide();
    $("#climbing-display").show();
  });
  hikingButton.click(function() {
    $("#other-display").hide();
    $("#climbing-display").hide()
    $("#winter-display").hide();
    $("#hiking-display").show();
  });
  winterButton.click(function() {
    $("#hiking-display").hide();
    $("#climbing-display").hide()
    $("#other-display").hide();
    $("#winter-display").show();
  });
  otherButton.click(function() {
    $("#hiking-display").hide();
    $("#climbing-display").hide();
    $("#winter-display").hide();
    $("#other-display").show();
  });

}


