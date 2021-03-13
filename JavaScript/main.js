$(document).ready(function(){
	$(".up_arrow").hide();
	$(".down_arrow").click(function(){
		$(".feed_content").animate({top: '-300px'});
		$(this).fadeOut();
		$(".up_arrow").fadeIn();
	});
	$(".up_arrow").click(function(){
		$(".feed_content").animate({top: '0px'});
		$(".up_arrow").fadeOut();
		$(".down_arrow").fadeIn();
	});
});

// Get the modal
var modal = document.getElementById("popin");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function hidden() {
  var x = document.getElementsByID("popin");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(document).ready(function(){
  $("input").focus(function(){
    $(".login input[type=text], .login input[type=password]").css("background-color", "#ddd");
  });
  $("input").blur(function(){
    $(".login input[type=text], .login input[type=password]").css("background-color", "#f1f1f1");
  });
});