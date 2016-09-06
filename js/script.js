var diasDeSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; 
var diaActual = prompt("Ingresar día");

switch (diaActual) {
	case diasDeSemana[5]:
	     console.log("Es fin de semana");
	     break;
	case diasDeSemana[6]:
	     console.log("Es fin de semana");
	     break;
	default:
	    console.log("No es sábado o domingo");
}
