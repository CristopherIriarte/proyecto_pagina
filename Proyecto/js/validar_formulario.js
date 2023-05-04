$(document).ready(function() {
	$("#formulario").validate({
	rules:{
		nombre : {required: true, minlength: 3},
		email: {required: true, email: true},
		cmbEdades:{required: true, number: true,} },
	messages:{
	nombre: {minlength: "Nombre debe tener mínimo 3 carácteres"},
	email: {email: "Debe tener sintaxis de email"},
	cmbEdades:{required: "Debe seleccionar edad", number: true,},
	}
	});
	});