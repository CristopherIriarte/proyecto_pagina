const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (!validarNombre(nombre.value)) {
		alert('Ingrese un nombre válido.');
		nombre.focus();
		return false;
	}

	if (!validarTelefono(telefono.value)) {
		alert('Ingrese un número de teléfono válido.');
		telefono.focus();
		return false;
	}

	if (!validarEmail(email.value)) {
		alert('Ingrese un correo electrónico válido.');
		email.focus();
		return false;
	}

	formulario.submit();
});

function validarNombre(nombre) {
	return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/.test(nombre);
}

function validarTelefono(telefono) {
	return /^\+?[1-9]\d{7,14}$/.test(telefono);
}

function validarEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}