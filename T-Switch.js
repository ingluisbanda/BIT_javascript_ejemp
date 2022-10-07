let expr = prompt("Ingrese la fruta a la cual quiere validar su precio: ");
switch (expr) {
    case 'Naranja':
        document.write('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzana':
        document.write('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Banano':
        document.write('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cereza':
        document.write('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mango':
    case 'Papaya':
        document.write('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
        document.write('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  alert("¿Hay algo más que te quisiera consultar?");