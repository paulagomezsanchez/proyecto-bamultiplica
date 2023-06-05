//Alert de Accesibilidad
var getAlert=function(){
document.getElementById('btn-accesibilidad').onclick;
    alert('Incluir a personas que se perciben por fuera del binarismo representa parte de nuestra identidad. Entendemos las dificultades que se presentan al utilizar el lenguaje inclusivo para las personas que utilizan los lectores de texto. Por este motivo decidimos utilizar la letra “e” y no la “x” o el “@”, ya que pueden provocar deformaciones notables en la lectura. Esperamos ser accesibles | Esperamos llegar a todes.');
}




//Función que captura datos que se ingresan al formulario y los muestra en consola al apretar botón Enviar

var getData= function(){
    var name= document.getElementById("nombre").value;
    var lastName= document.getElementById("apellido").value;
    var pronombre= document.querySelector('input[name=pronombre]:checked').value;
    var tel= document.getElementById("telefono").value;
    var email=document.getElementById("email").value;
    var mensaje=document.getElementById("mensaje").value;
    console.log("NOMBRE:"+" " +name+ "; "+"APELLIDO:"+ " "+ lastName+"; "+"PRONOMBRES: "+ pronombre+ "; "+"TELÉFONO:"+ " "+tel+"; "+"E-MAIL:"+email+"; "+"MENSAJE:"+mensaje+" ");
}

