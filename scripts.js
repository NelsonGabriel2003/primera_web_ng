//  para acceder a elementos de html se usa getelementbyid
// para acceder a elemento de forma singularde htmml que son con clases selectores se usa "query selector"

// el concepto de WHILE primero evalua la condicion para ejecutar:
/*
var i=0;
while(i<=10){
    console.log("Estoy en la vuelta numero "+ i);
    i=i+1;
}

*/
//------------------------------------------------------------
// El concepto de FOR es una estructura repetitiva por un
//valor inicial,un condicion de parada,incremento :
/*
for(var i=0; i<10;i++){
    console.log("Vuelta n* "+ i);
}

alert("Estamos en la vuelta numero "+ (i-1));
*/
//------------------------------------------------------------
// El concepto de FOR es una estructura repetitiva pero que se 
// evalua al menos una vez SIEMPRE :

var i=0;
do{
    console.log("El numero de vuelta es: "+i);
    i++;
}
while(i)

let numero;
do {
    numero = parseInt(prompt("Introduce un número positivo:"));
} while (numero <= 0);
if(numero===int){
    alert("Su numero es:"+ numero)
}
    