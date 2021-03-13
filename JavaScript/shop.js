var numofproducts=0;
/**cart**/
function add(){
var product=document.getElementById("product").value;
var condition=document.getElementById("condition").value;
var newElement=document.createElement("p");
newElement.className="cartProduct";
newElement.innerHTML=product+" ("+condition+")";
document.getElementById("cart").appendChild(newElement);
numofproducts+=1;}

function checkout(){
	alert("Your cart contains " + numofproducts + " products.")
}
/**payment**/
function information()
{
	var fname= document.forms["payment"]["fname"].value;
	var address= document.forms["payment"]["address"].value;
	var city= document.forms["payment"]["city"].value;
	var state= document.forms["payment"]["state"].value;
	var zip= document.forms["payment"]["zip"].value;
	var cname= document.forms["payment"]["cname"].value;
	var ccnum= document.forms["payment"]["ccnum"].value;
	var email= document.forms["payment"]["email"].value;
	var note= document.forms["payment"]["note"].value;
	var sameadr= document.forms["payment"]["sameadr"].value;
	var receipt= document.forms["payment"]["receipt"].value;
	var preference= document.forms["payment"]["preference"].value;
	window.confirm("Please confirm your information: firstname: "+fname+" email: "+email+" preference: "+preference+" address: "+address+" city: "+city+" state: "+state+" zip: "+zip+" card name: "+cname+" card number: "+ccnum+" note: "+note+" Shipping address same as billing: "+sameadr+" receipt "+receipt);
}