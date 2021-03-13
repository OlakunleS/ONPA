/*proceed to gallery*/
function proceed(){
	//*button disappear*//
	var image = document.getElementById("remove");
  	image.remove();
	//*add new elements*//
	var para = document.createElement("p");
	var node = document.createTextNode("Here are some details:"); para.appendChild(node);
	var element = document.getElementById("content");
	element.appendChild(para);
	document.getElementById("gallery").style.display="block";
}

/*gallery*/
function show_popup ( source, description )
{
	var p = document.getElementById("popup");
	p.style.display = "block";
	p.style.opacity = "0";
	setTimeout(popup_fade_in, 5);

	document.getElementById("popup_image").src = source;
	document.getElementById("popup_image").alt = description;
	document.getElementById("popup_caption").innerHTML = description;
}

function popup_fade_in ()
{
	document.getElementById("popup").style.opacity = "100";
}

function hide_popup ()
{
	document.getElementById("popup").style.opacity = "0";
	setTimeout(popup_display_none, 500);
}

function popup_display_none ()
{
	document.getElementById("popup").style.display = "none";
}

/*text*/
$(document).ready(function(){
  $("#text").mouseenter(function(){
    	$(this).css({"text-decoration":"underline","color":"red"});
  })
  $("#text").mouseleave(function(){
    	$(this).css({"text-decoration":"none","color":"black"});
  });
});
