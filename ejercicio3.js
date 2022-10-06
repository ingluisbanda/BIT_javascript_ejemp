let usuarioI = prompt("Ingrese su usuario: ");
const usuarioG ="Usuario_1";
const contrasenaG ="Contra_1";
debugger
function validarUsuario (uG,uI){
 if (uG !== uI){
    return alert("su usuario esta errado");
 }
  else if (uG === uI){
    alert("Validacion de usuario aceptada");
 }
};

let validarU = validarUsuario(usuarioG,usuarioI);

/* alert(validarU); */

if (usuarioG === usuarioI) {
    let contrasenaI = prompt("Ingrese su contrasña: ");
    
    let validarG = validarContrasena(contrasenaG,contrasenaI);

   /* alert(validarG); */
}; 

function validarContrasena (cG,cI){
    if (cG !== cI){
       return alert("su contraseña está errada");
    }
    else if( cG === cI){
        alert("Bienvenido señor " + usuarioG);
   }

};



   






/*let User = prompt("Ingrese su ususario: ");

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

const passwordSave = "Esta_Es_Mi_contraseña";

let passwordUser = prompt("Ingrese su contraseña: ");*/