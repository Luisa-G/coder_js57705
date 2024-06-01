for (let i = 1; i <= 5; i++){
    let ciudad;
    nombre = prompt("Para hacer el cálculo rápido del ahorro con paneles solares, necesitamos algunos datos.\n¿Cuál es tu nombre?");let telefono = prompt("¿Cuál es tu teléfono?");
    do{
        ciudad = prompt("Elige una de estas tres ciudades e ingresa su nombre:\n - Guadalajara\n - Chihuahua\n - Campeche");
    }while(ciudad != "Guadalajara" && ciudad != "Chihuahua" && ciudad != "Campeche");
    let consumo = prompt("Indica tu consumo mensual en kWh:");
    const calculoObjetivo = consumo => consumo * 0.8;
    const OBJETIVO = calculoObjetivo (consumo);
    console.log("Se ingresaron los datos de nombre " + nombre + ", teléfono " + telefono + ", ciudad " + ciudad +  " y " + consumo + " kWh de consumo mensual")
    function ahorroMensual(ciudad,OBJETIVO){
        switch(ciudad){
            case "Guadalajara":
                return 2.5 * OBJETIVO;
                break;
            case "Chihuahua":
                return 3.2 * OBJETIVO;
                break;            
            case "Campeche":
                return 1.8 * OBJETIVO;
                break;
            default:
                return "Esa ciudad no se tiene";
                break;                    
        }
    }
    alert("Con la información que ingresaste calculamos que puedes\nahorrar mensualmente $" + ahorroMensual(ciudad,OBJETIVO) + " MXN\nal poner paneles solares.\nNos comunicamos contigo");
    console.log("El ahorro mensual calculado es de $" + ahorroMensual(ciudad,OBJETIVO) + " MXN");
    if (i == 5){
        alert(nombre + ", tu turno es el no. " + i + ", te contactamos pronto\nYa no hay más turnos disponibles");
        console.log("Turno " + i + " ya utilizado");
        break;
    }
    else{
        alert("Tienes el turno " + i + " " + nombre + "\nTe contactamos durante el día");
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

