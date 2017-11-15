$(document).ready(function() {
  $("#github_icon").hover(function() { $(this).attr("src", "/images/github_blue.png"); console.log("Hovering"); },
                          function() { $(this).attr("src", "/images/github_small.png") });
});
