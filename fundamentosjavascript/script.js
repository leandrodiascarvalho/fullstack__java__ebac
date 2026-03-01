function calcularIMC() {
	const peso = parseFloat(document.getElementById('peso').value);
	const altura = parseFloat(document.getElementById('altura').value);
	const resultado = document.getElementById('resultado');

	if (!peso || !altura || altura <= 0) {
		resultado.textContent = 'Preencha os campos corretamente.';
		resultado.classList.remove('slide-up');
		void resultado.offsetWidth; // reflow para reiniciar animação
		resultado.classList.add('slide-up');
		return;
	}

	const imc = peso / (altura * altura);
	let classificacao = '';
	if (imc < 18.5) {
		classificacao = 'Abaixo do peso';
	} else if (imc < 25) {
		classificacao = 'Peso normal';
	} else if (imc < 30) {
		classificacao = 'Sobrepeso';
	} else {
		classificacao = 'Obesidade';
	}

	resultado.textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
	resultado.classList.remove('slide-up');
	void resultado.offsetWidth;
	resultado.classList.add('slide-up');
}

// Permite Enter para calcular
document.querySelector('form').addEventListener('submit', function(e) {
	e.preventDefault();
	calcularIMC();
});
