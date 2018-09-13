$(document).ready(function(){

//1. obtener mediante id
//console.log($('#email'));

//2. obtener mediante la class

//console.log($('.form-group'));


//3. obtener mediante el selector

//console.log($('input'));

//4. mediante el Nombre

//console.log($('input[name=nombre]'))

//eventos

$('#guardar').click(function(){

var nombre = $('#nombre').val();
var email = $('#email').val();
var password = $('#password').val();

alert(" nombre: " + nombre + " email: " + email + " password: " + password);

//validamos el nombre no sea nulo o vacio
$('#nombreHelp').text("");
$('#emailHelp').text("");

//validamos nombre

if(!$('#nombre').val()){
 $('#nombreHelp').text( "no puede dejar el nombre nulo o vacio");

}



if(!$('#email').val()){
 $('#emailHelp').text( "no puede dejar el email nulo o vacio");
}else if(!validateEmail(email)){
$('#emailHelp').text( "email no valido");

}

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
