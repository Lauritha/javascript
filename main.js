var avion = {
	piloto : {
		nombre : "Erich Harttman",
		codigo : "Senior",
		edad : 28
	},
	aeromoza : {
		nombre : "Audrey Hepburn",
		idiomas : ["Español", "Inglés", "Portugués"]
	},
	aerolinea : "Lan",
	marca : "Boeing 737",
	asientos : [
		{numero: "1A", ocupado : false },
		{numero: "1B", ocupado : false },
		{numero: "2A", ocupado : true },
		{numero: "2B", ocupado : false },
		{numero: "3A", ocupado : true },
		{numero: "3B", ocupado : true }
	],
	ano : 2014,
	primeraClase : true
};

var avionContainer = document.getElementById("avion-container");
avionContainer.innerHTML = "";
var asientos = avion.asientos;
var a;
for(var i = 0; i < asientos.length; i++){
	a = document.createElement("div");
	a.innerHTML = asientos[i].numero;

	if(asientos[i].ocupado){
		a.setAttribute("class", "ocupado asiento");
	} else{
		a.setAttribute("class", "desocupado asiento");
	}
	avionContainer.appendChild(a);
};