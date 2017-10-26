var gryff = 0;
var huff = 0;
var rav = 0;
var slyth = 0;

var questions = function(question){
  if (question === "gryff") {
    gryff+=1;
  } else if (question === "huff"){
    huff+=1;
  } else if (question === "rav") {
    rav+=1;
  } else if (question === "slyth") {
    slyth+=1;
  }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q2]:checked").val();
    var q4 = $("input:radio[name=q2]:checked").val();
    var q5 = $("input:radio[name=q2]:checked").val();
    var q6 = $("input:radio[name=q2]:checked").val();
    var q7 = $("input:radio[name=q2]:checked").val();
    var q8 = $("input:radio[name=q2]:checked").val();
    var q9 = $("input:radio[name=q2]:checked").val();
    var q10 = $("input:radio[name=q2]:checked").val();
    var q11 = $("input:radio[name=q2]:checked").val();
    var q12 = $("input:radio[name=q2]:checked").val();


    questions(q1);
    questions(q2);
    questions(q3);
    questions(q4);
    questions(q5);
    questions(q6);
    questions(q7);
    questions(q8);
    questions(q9);
    questions(q10);
    questions(q11);
    questions(q12);

    if (gryff >= huff && gryff >= rav && gryff >= slyth) {
      $("#output").text("GRYFFINDOR!");
      $("#results").addClass("gryffindor");
      $(".gryffindor").show();
    } else if (huff >= gryff && huff >= rav && huff >= slyth) {
      $("#output").text("HUFFLEPUFF!");
      $("#results").addClass("hufflepuff");
      $(".hufflepuff").show();
    } else if (rav >= huff && rav >= gryff && rav >= slyth) {
      $("#output").text("RAVENCLAW!");
      $("#results").addClass("ravenclaw");
      $(".ravenclaw").show();
    } else {
      $("#output").text("SLYTHERIN!");
      $("#results").addClass("slytherin");
      $(".slytherin").show();
    }
    $("#results").show();
  });
});
