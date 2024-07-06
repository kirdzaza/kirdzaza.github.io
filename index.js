function random_color() {
  var s1 = Math.floor(Math.random() * 256);
  var s2 = Math.floor(Math.random() * 256);
  var s3 = Math.floor(Math.random() * 256);
  if (s1 + s2 + s3 < 200) {
    $(".col-sm-4").css("color", "white");
  }
  else if (s1 + s2 + s3 < 500)  {
    $(".col-sm-4").css("color", "black");
  }
  else {
    $(".col-sm-4").css("color", "black");
  }
  return `rgb(${s1}, ${s2}, ${s3})`;
}

$(document).ready(function () {
  $("#appendButton").click(function () {
    for (var i = 1; i <= 3; i++) {
      var newSquare = $("#r" + i);
      newSquare.css("background-color", random_color());
      $("#r" + i).text(random_color);
    }
  });
});
