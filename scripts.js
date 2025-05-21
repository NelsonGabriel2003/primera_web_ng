/*
var entrada=window.confirm("Quiere ingresar al sistema?");
var año_Calendario = new Date();
var año_actual = año_Calendario.getFullYear();

if(entrada==true){
    var edad=prompt("En que año naciste: ");
    while(isNaN(Number(edad)) || !edad ||edad.length!==4 ||parseInt(edad)>año_actual){
        edad=prompt("Ingresa un año valido antes del "+año_actual+": ");
    }
    let total=año_actual-parseInt(edad);
    alert("Tu edad es: "+ total);
    
}else{
    alert("Muchas gracias puedes irte");
}
*/
//---------------------------------------------------

/*
fecha_st="2025/05/21";
fecha=fecha_st.split("/");

var dia=parseInt(fecha[2]);
var mes=parseInt(fecha[1])-1;
var año=parseInt(fecha[0]);

var fecha_completa=new Date(año,mes,dia,2);
//funciones especiales
var dia= fecha_completa.getDate();
var mes=fecha_completa.getMonth();
var año=fecha_completa.getFullYear();
var hora=fecha_completa.getHours();
alert("EL dia de hoy es: "+dia+"\ndel mes: "+(mes+1)+"\nen el año: "+año);
alert("usted entro al sistema a las:"+ hora+"am");
*/
//---------------------------------------------------
/*
alert("Programa para saber cual numero es el mayor");
let repetir;
do {
    let valor_uno = parseInt(prompt("Ingresa un valor:"));
    let valor_dos = parseInt(prompt("Ingresa otro valor:"));

    if (isNaN(valor_uno) || isNaN(valor_dos)) {
        alert("Uno de los datos no es un número válido. El programa terminará.");
        repetir = false; 
    } else {
        if (valor_uno > valor_dos) {
            alert("El valor mayor es: " + valor_uno);
        } else if (valor_dos > valor_uno) {
            alert("El valor mayor es: " + valor_dos);
        } else {
            alert("Ambos valores son iguales.");
        }
        
        repetir = confirm("¿Quieres comparar otros dos números?");
    }
} while (repetir);

*/
//---------------------------------------------------
var fecha_usuario=prompt("Ingrese una fecha: ");
