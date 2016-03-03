$(document).ready(function(){
  $(".clicky").on("click", generatorClick);
  $(".container").on("click", ".delete", deleteClick);
  $(".container").on("click", ".change", colorClick);
});

var counter = 0;

function generatorClick(){
    $(".container").add("normal");
    counter++;
    $(".container").append('<div class="new-click"></div>');
    var $el = $(".container").children().last();

    $el.append("<p>generate row: " + counter + "</p>");
    $el.append("<button class='change'>Change</button>");
    $el.append("<button class='delete'>Delete</button>");
}

function deleteClick(){
      $(this).parent().remove();
}

function colorClick() {
  $(".container").toggleClass("highlight");
}
