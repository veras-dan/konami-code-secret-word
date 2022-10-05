const codigoSecreto = 'danilo';
let temporizador;
let sequenciaDeCaracteres = [];


window.addEventListener('keydown', function(evento) {
	clearTimeout(temporizador);
	const teclaPress = evento.key;
	
	sequenciaDeCaracteres.push(teclaPress);
	
	const fraseComCaracteres = sequenciaDeCaracteres.join('');
	
	if(fraseComCaracteres.includes(codigoSecreto)) {
		console.log('Você ACERTOU a sequencia!!!')
		document.querySelector('#winScreen').dataset.status = 'active'
		sequenciaDeCaracteres = [];
	}
	
	console.log(sequenciaDeCaracteres);
	temporizador = setTimeout(function() {
		sequenciaDeCaracteres = [];		
	}, 1500);

})
