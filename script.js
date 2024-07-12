$(document).ready(function () {
  function showAll() {
    $(".BW").show(500, "swing");
    $(".colored").show(500, "swing");
  }
  function showBW() {
    $(".BW").show(500, "swing");
    $(".colored").hide(500, "swing");
  }
  function showColor() {
    $(".BW").hide(500, "swing");
    $(".colored").show(500, "swing");
  }

  $(".all").click(function () {
    showAll();
  });
  $(".black").click(function () {
    showBW();
  });
  $(".color").click(function () {
    showColor();
  });
});
