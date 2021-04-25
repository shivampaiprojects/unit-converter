var input = document.getElementById("init-number") ;
var result = document.getElementById("final-number") ;
function lengthsubmit() {
	if (document.getElementById("init-length-unit").value == "Metres"){
		if (document.getElementById("final-length-unit").value == "Centimeter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 100 + " cm";
		}
		if (document.getElementById("final-length-unit").value == "Kilometer"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 0.001 + " km";
		}
		if (document.getElementById("final-length-unit").value == "Meter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 1 + " m";
		}
		if (document.getElementById("final-length-unit").value == "Hectometer"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 0.01 + " hm";
		}
		if (document.getElementById("final-length-unit").value == "Millimeter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 1000 + " mm";
		}
		if (document.getElementById("final-length-unit").value == "Foot"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 3.2808 + " Feet";
		}
		if (document.getElementById("final-length-unit").value == "Decimeter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 10 + " dm";
		}
		if (document.getElementById("final-length-unit").value == "Decameter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 0.1 + " dam";
		}
}
	if (document.getElementById("init-length-unit").value == "Kilometres"){
		if (document.getElementById("final-length-unit").value == "Centimeter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 100000 + " cm";
		}if (document.getElementById("final-length-unit").value == "Foot"){
 document.getElementById("final-number").innerHTML = 	document.getElementById("init-number").value * 3280 + " foot";
		}
		if (document.getElementById("final-length-unit").value == "Kilometer"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 1 + " km";
		}
		if (document.getElementById("final-length-unit").value == "Hectometer"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 10 + " hm";
		}
		if (document.getElementById("final-length-unit").value == "Millimeter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 1000000 + " mm";
		}
		if (document.getElementById("final-length-unit").value == "Decimeter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 10000 + " dm";
		}
		if (document.getElementById("final-length-unit").value == "Decameter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 100 + " dam";
		}
		if (document.getElementById("final-length-unit").value == "Meter"){
 document.getElementById("final-number").innerHTML = document.getElementById("init-number").value * 1000 + " m";
		}
	}
}
function clear() {
document.getElementById("final-number").innerHTML = "";
	document.getElementById("init-number").value = "";
}