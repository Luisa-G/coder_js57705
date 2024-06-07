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

const visitantes = [];

for (let i = 1; i <= 5; i++) {

    function crearVisitante() {
        nombre = prompt("Para hacer el cálculo rápido del ahorro con paneles solares, necesitamos algunos datos.\n¿Cuál es tu nombre?");
        telefono = prompt("¿Cuál es tu teléfono?");
        do{
            ciudad = prompt("Elige una de estas tres ciudades e ingresa su nombre:\n - Guadalajara\n - Chihuahua\n - Campeche").toLowerCase();
        }while(ciudad != "guadalajara" && ciudad != "chihuahua" && ciudad != "campeche");
        consumo = parseFloat(prompt("Indica tu consumo mensual en kWh:"));
        
        const calculoObjetivo = consumo => consumo * 0.8;
        const OBJETIVO = calculoObjetivo (consumo);
        
        console.log("Se ingresaron los datos de nombre " + nombre + ", teléfono " + telefono + ", ciudad " + ciudad +  " y " + consumo + " kWh de consumo mensual")
        
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
        
        const ahorro = Math.round(ahorroMensual(ciudad,OBJETIVO));

        alert("Con la información que ingresaste calculamos que puedes\nahorrar mensualmente $" + ahorro + " MXN\nal poner paneles solares.");
        
        console.log("El ahorro mensual calculado es de $" + ahorro + " MXN");
        
        let turno = i;
        let usuario = visitantes.push(new Visitante(nombre, telefono, ciudad, consumo, ahorro, turno));
        return usuario
    }
    
    crearVisitante();

    const nombreVisitante = visitantes[visitantes.length-1].nombre;
    const turnoVisitante = visitantes[visitantes.length-1].turno;
    const encontrarVisitante = visitantes.find(visitante => visitante.nombre === nombreVisitante && visitante.turno != turnoVisitante);
    const turnosAnteriores = visitantes.filter(visitante => visitante.nombre.includes(nombreVisitante));
    const turnos = turnosAnteriores.map(visitante => visitante.turno).join(", ");


    function sacarTurnos() {
        if (encontrarVisitante) {
            return `${nombreVisitante}, tus turnos son: ${turnos}`;
        } else {
            return `Es tu único turno, ${nombreVisitante}`;
        }
    }

    if (i == 5){
        alert("Tu turno es el no. " + i + "\n" + sacarTurnos() + "\nTe contactamos pronto\n\nYa no hay más turnos disponibles");
        console.log("Turno " + i + " ya utilizado");
        break;
    }
    else{
        alert("Tienes el turno " + i + "\n" + sacarTurnos() + "\nTe contactamos durante el día");
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