var opc=window.prompt("Ingresa la opción que deseas");
switch (opc){
    case 'Naranjas':
      alert('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
        alert('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
        alert('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
        alert('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
        alert('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
        alert('Lo lamentamos, por el momento no disponemos de ' + opc + '.');
  }
  
  alert("¿Hay algo más que te quisiera consultar?");