$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-says").prepend("<li><img src='img/cat.jpg'></li>");
    $("ul#dog-says").prepend("<li><img src='img/angry-dog.jpg'></li>");

    $("ul#cat-says").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog-says").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#dog-says").prepend("<li><img src='img/dog.jpg'></li>");
    $("ul#cat-says").prepend("<li><img src='img/angry-cat.jpg'></li>");

    $("ul#cat-says").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog-says").children("li").first().click(function() {
      $(this).remove();
    });
  });

});
