$(function () {
    $(".collapse").on("click", ".btn-info", function () {
      var x = $(this).siblings(".hidediv");
      var i = $(this).children(".ii");
      //console.log(x);
      //console.log(i);
      x.slideToggle("fast", function () {
        if (x.is(":visible")) {
          i.removeClass("fa-plus").addClass("fa-minus");
        } else {
          i.removeClass("fa-minus").addClass("fa-plus");
        }
      });
    });
    $(".collapse").on("click", ".del", function () {
      var x = $(this).parents(".bigT").remove();
      console.log(x);
    });
    var idcou = 1;
    $("body").on("click", ".plus-big", function () {
      var tb = $(".insidediv table:first").html();
      var ntb = "<table class='bigT'>" + tb + "</table>";
      //console.log(ntb);
      var x = $(".insidediv .bigT:last").after(ntb);
      console.log(x);
      $(".insidediv .bigT:last").attr("id", "bigT" + ++idcou);
    });
  });