//diff way of writing
// use $ sign
// we short code using the jquery,accessing the method by the dot operator
// to access multilple classes put them in the same ''
// document.querySelector('h1')
// if there is one value, we are getting the value
// if there is two value we are setting for the second one
//attr for attribut

// $("h1");
// $("button");
// //
// $("h1").css("color", "red");

// $("h1").addClass("big-title margin");
// // $("h1").removeClass("big-title");
// $("h1").hasClass("margin");

// MANIPULATING TEXTS
// $("h1").text("bye");
// $("h1").button("click me");

//MANIPULATING ATTRIBUTES

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.instagram.com/");

//ADDING EVENT LISTENERS

// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// $("button").click(function () {
//   $("h1").css("color", "black");
//   $("h1").text("Changes ");
// });

//document to select all
$(document).keypress(function (event) {
  $("h1").text(event.key);
});

//CHECK MDN DOCS FOR THE EVENTS
// $("button").on("click", function () {
//   $("h1").hide();
// });
// $("button").on("click", function () {
//   $("h1").toggle();
// });
// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//   $("h1").slideUp();
// });

// $("button").on("click", function () {
//   $("h1").slideDown();
// });

$("button").on("click", function () {
  $("h1").slideToggle();
});
