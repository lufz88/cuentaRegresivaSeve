const boton = document.getElementById("insulina");
const contenedorCuenta = document.getElementById("contenedor-cuenta");

let regresion = {
		year: 2023, // required
		month: 3, // required
		day: 8, // required
		hours: 0, // Default is 0 [0-23] integer
		minutes: 0, // Default is 0 [0-59] integer
		seconds: 0, // Default is 0 [0-59] integer
		words: { //words displayed into the countdown
			days: 'Día',
			hours: 'Hora',
			minutes: 'Minuto',
			seconds: 'Segundo',
			pluralLetter: 's'
		},
		plural: true, //use plurals
		inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
		inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
		// in case of inline set to false
		enableUtc: true, //Use UTC as default
		onEnd: function() {
			document.getElementById('portada').classList.add('oculta');
			return; 
		}, //Callback on countdown end, put your own function here
		refresh: 1000, // default refresh every 1s
		sectionClass: 'simply-section', //section css class
		amountClass: 'simply-amount', // amount css class
		wordClass: 'simply-word', // word css class
		zeroPad: false,
		countUp: false,	
}

function agregarInsulina() {
	if (regresion.month === 12) {
		regresion.year++;
		regresion.month = 1;
		
	} else {
		regresion.month++;
	}
	let cuenta = document.getElementById("cuenta");
	cuenta.remove();
	let nuevaCuenta = document.createElement("div")
	contenedorCuenta.appendChild(nuevaCuenta);
	nuevaCuenta.setAttribute("id", "cuenta");
	simplyCountdown('#cuenta', regresion);
}

boton.addEventListener("click", agregarInsulina);

simplyCountdown('#cuenta', regresion);