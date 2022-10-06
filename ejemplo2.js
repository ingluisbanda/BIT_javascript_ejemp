const passwordSave = "Esta_Es_Mi_contraseña";
const userSave ="Alejandro";
debugger
let User = prompt("Ingrese su ususario: ");
let passwordUser = prompt("Ingrese su contraseña: ");
let saludo = "Bienvendio usuario @" + User;

if ( passwordUser === passwordSave & User === userSave){
    document.write(saludo)
}else if( passwordUser === passwordSave || User === userSave ){
    if( passwordUser != passwordSave ){
        alert("su contraseña esta errada");
    }
else if( User != userSave){
        alert("su usuario esta errado");
    }
}else{
    alert("su usuario y contraseña estan errados");
}