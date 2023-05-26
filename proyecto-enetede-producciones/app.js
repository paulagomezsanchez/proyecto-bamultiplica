//funcion que captura datos del formulario y los muestra en consola

var getData= function(){
    var name= document.getElementById("nombre").value;
    var lastName= document.getElementById("apellido").value;
    var pronombre= document.querySelector('input[name=pronombre]:checked').value;
    var tel= document.getElementById("telefono").value;
    var email=document.getElementById("email").value;
    var mensaje=document.getElementById("mensaje").value;
    console.log("NOMBRE:"+" " +name+ "; "+"APELLIDO:"+ " "+ lastName+"; "+"PRONOMBRES: "+ pronombre+ "; "+"TELÉFONO:"+ " "+tel+"; "+"E-MAIL:"+email+"; "+"MENSAJE:"+mensaje+" ");
}

//falta hacerles las marcas de requeridos, y hacer requerido también los pronombres