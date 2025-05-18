var numero_uno=prompt("Ingresa un numero: ");
var numero_dos=prompt("Ingresa un numero: ");

var resultado=numero_uno-numero_dos;
if(resultado>0){
    console.log("Es mayor a 0");
    if(resultado%2==0){
        console.log("Y tambien es un numero par");
    }else{
        console.log("Y tambien es un numero impar");
    }
}else{
    console.log("Es menor o igual a  0")
}
