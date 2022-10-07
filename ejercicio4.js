
let userID = prompt("Ingrese su usuario: ");
const userSV ="usuario100";
const paswSV ="contraseña";

switch (userID) {
    case userSV:
        let pswID = prompt("Ingrese su contraseña: ");
        if (pswID === paswSV){
        alert("Ha logrado ingresar al sistema señor " + userSV);   
        }
      break;
    default:
        alert('Usuario Incorrecto');
  }
  
  