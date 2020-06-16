var botaoAdicionar = document.querySelector('#form-adiciona');
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	
	console.log(nome);
	console.log(peso);
	console.log(altura);
	console.log(gordura);
	

})

function obtemPacienteDoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
	}
	
}