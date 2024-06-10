
//definicion del objeto principal (el visitante) con sus datos de contacto, sus datos para el ahorro, el calculo del ahorro y el turno.
class Visitante {
    constructor(nombre, telefono, ciudad, consumo, ahorro, turno) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.consumo = consumo;
        this.ahorro = ahorro;
        this.turno = turno;
    }
}

//se crea el array de visitantes
const visitantes = [];

//funcion que pide datos al visitante
function pedirDatos() {
    let nombre = prompt("Para hacer el cálculo rápido del ahorro con paneles solares, necesitamos algunos datos.\n¿Cuál es tu nombre?");
    let telefono = prompt("¿Cuál es tu teléfono?");
    let ciudad;
    do{
        ciudad = prompt("Elige una de estas tres ciudades e ingresa su nombre:\n - Guadalajara\n - Chihuahua\n - Campeche").toLowerCase();
    }while(ciudad != "guadalajara" && ciudad != "chihuahua" && ciudad != "campeche");
    consumo = parseFloat(prompt("Indica tu consumo mensual en kWh:"));
    return {nombre, telefono, ciudad, consumo};
}

//funcion que calcula el ahorro del visitante (usa la información registrada en la función pedirDatos)
function ahorroMensual(ciudad,OBJETIVO){
    switch(ciudad){
        case "guadalajara":
            return 2.5 * OBJETIVO;
            break;
        case "chihuahua":
            return 3.2 * OBJETIVO;
            break;            
        case "campeche":
            return 1.8 * OBJETIVO;
            break;
        default:
            return "Esa ciudad no se tiene";
            break;                    
    }
}


//crea un visitante (usa las funciones de pedirDatos y calcularAhorro) y lo guarda en el array
function crearVisitante(i) {
    const { nombre, telefono, ciudad, consumo } = pedirDatos();
    const calculoObjetivo = consumo => consumo * 0.8;
    const OBJETIVO = calculoObjetivo (consumo);
    const ahorro = Math.round(ahorroMensual(ciudad,OBJETIVO));
    console.log("Se ingresaron los datos de nombre " + nombre + ", teléfono " + telefono + ", ciudad " + ciudad +  " y " + consumo + " kWh de consumo mensual")
    alert("Con la información que ingresaste calculamos que puedes\nahorrar mensualmente $" + ahorro + " MXN\nal poner paneles solares.");
    console.log("El ahorro mensual calculado es de $" + ahorro + " MXN");
    
    const usuario = new Visitante(nombre, telefono, ciudad, consumo, ahorro, i);
    visitantes.push(usuario);
    return usuario;
}



// function revisarTurnos() {

//     const nombreVisitante = visitantes[visitantes.length-1].nombre;
//     const turnoVisitante = visitantes[visitantes.length-1].turno;
//     const encontrarVisitante = visitantes.find(visitante => visitante.nombre === nombreVisitante && visitante.turno != turnoVisitante);
//     const turnosAnteriores = visitantes.filter(visitante => visitante.nombre.includes(nombreVisitante));
//     const turnos = turnosAnteriores.map(visitante => visitante.turno).join(", ");


//     function sacarTurnos() {
//         if (encontrarVisitante) {
//             return `${nombreVisitante}, tus turnos son: ${turnos}`;
//         } else {
//             return `Es tu único turno, ${nombreVisitante}`;
//         }
//     }



// }




for (let i = 1; i <= 5; i++) {
    crearVisitante(i);




    if (i == 5){
        alert("Tu turno es el no. " + i + "\n" + /*sacarTurnos() + */"\nTe contactamos pronto\n\nYa no hay más turnos disponibles");
        console.log("Turno " + i + " ya utilizado");
        break;
    }
    else{
        alert("Tienes el turno " + i + "\n" + /*sacarTurnos() + */"\nTe contactamos durante el día");
        console.log("Turno " + i + " ya utilizado");
        do{
            otraVuelta = prompt("¿Quieres hacer otro análisis? \nResponde solo con si o no");
        }while(otraVuelta != "si" && otraVuelta != "no");
            if (otraVuelta == "no"){
                alert("¡Gracias por visitarnos!");
                break;
            }
    }
}












// ----------------------------------------------------------------------------------------------------------------------


//---creas visitante con datos-- (función que crea el objeto visitante, saca el ahorro, asigna el turno y lo guarda en el array de visitantes)
//pedir datos
//saca el ahorro
//asigna turno
//guardas en array visitantes
//pasar a <<<---visitante anterior---->>>

//<<<---visitante anterior---->>> (función de buscar e ifs)
//buscar si el nombre ya existe
//-no, "bienvenido nuevo visitante, te contactamos" y termina
//-si, entonces ---mostrar cotizaciones del visitante---


//---mostrar cotizaciones del visitante--- (función de filtrar)
//filtrar las cotizaciones que sean del nombre
//pasar a <<<---quieres cotizar----->>>


//<<<---quieres cotizar----->>> (prompt con ifs)
//-no, entonces "gracias" y termino
//-si, entonces <<<----queda turno----->>>


//<<<----queda turno----->>> (función con ifs)
//verificar en que número va el turno y si hay disponibles
//-no, entonces "ya no hay turno" y termino
//-si, entonces ----crear cotizacion----


//----crear cotizacion---- (función que crea el objeto cotización y lo guarda en el array de cotizaciones)
//pedir datos y guardar en el array
//hacer cálculo de ahorro
//pasar a ---asignar turno---


//---asignar turno--- (funcíón que suma uno al turno actual y lo guarda en su cotización)
//verificar en cual va y sumarle uno y termina