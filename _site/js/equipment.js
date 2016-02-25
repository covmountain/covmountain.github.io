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
    display_climbing();
  });
  hikingButton.click(function() {
    display_hiking();
  });
  winterButton.click(function() {
    display_winter();
  });
  otherButton.click(function() {
    display_other();
  });
}

function display_climbing() {
  $("#other-display").hide();
  $("#winter-display").hide();
  $("#hiking-display").hide();
  $("#climbing-display").show();
}
function display_winter() {
  $("#hiking-display").hide();
  $("#climbing-display").hide()
  $("#other-display").hide();
  $("#winter-display").show();
}
function display_hiking() {
  $("#other-display").hide();
  $("#climbing-display").hide()
  $("#winter-display").hide();
  $("#hiking-display").show();
}

function display_other() {
  $("#hiking-display").hide();
  $("#climbing-display").hide();
  $("#winter-display").hide();
  $("#other-display").show();
}
