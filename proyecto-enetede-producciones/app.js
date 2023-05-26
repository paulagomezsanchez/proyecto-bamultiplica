//funcion que captura datos que se ingresan al formulario y los muestra en consola al apretar botón Enviar

var getData= function(){
    var name= document.getElementById("nombre").value;
    var lastName= document.getElementById("apellido").value;
    var pronombre= document.querySelector('input[name=pronombre]:checked').value;
    var tel= document.getElementById("telefono").value;
    var email=document.getElementById("email").value;
    var mensaje=document.getElementById("mensaje").value;
    console.log("NOMBRE:"+" " +name+ "; "+"APELLIDO:"+ " "+ lastName+"; "+"PRONOMBRES: "+ pronombre+ "; "+"TELÉFONO:"+ " "+tel+"; "+"E-MAIL:"+email+"; "+"MENSAJE:"+mensaje+" ");
}

//faltaría hacerles las marcas de requeridos, y hacer request también el input de los pronombres