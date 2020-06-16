var mudarTitulo = document.querySelector(".titulo");
mudarTitulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++ ){

	var paciente = pacientes[i];
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var imc = peso / (altura * altura);

	var pesoEhValido = true;
	var alturaEhValido = true;

	if (peso <= 0 || peso >=400 ) {
		tdImc.textContent = "Peso inválido";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
		
	}

	if (altura <=0 || altura >=3.00){
		tdImc.textContent = "Altura inválida";
		alturaEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(alturaEhValido && pesoEhValido){
		tdImc.textContent = imc.toFixed(2);
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}