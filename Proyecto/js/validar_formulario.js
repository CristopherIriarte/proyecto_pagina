$(document).ready(function() {
    $("#formulario").validate({
    rules:{
        nombre : {required: true, minlength: 3},
        telefono : {required: true, minlength: 8},
        email: {required: true, email: true},},
    messages:{
    nombre: {minlength: "Nombre debe tener mínimo 3 carácteres"},
    telefono: {minlenght: "Deben ser 8 números mínimo"},
    email: {email: "Debe tener sintaxis de email",},
    }
    });
    });