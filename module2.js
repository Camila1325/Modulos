
/*
-el segundo modulo debe tener:
*importacón de la clase y el objeto
funcion tipo flecha que haga uso de la clase y el objeto importado
*/

import { JDM, ciudad } from "./modules.js";

const autos = () => {

    let supra = new tipoA('Toyota', 1993, 'Supra MK4', 'Diesel')

    return supra;

}

console.log(autos());

const Imprimir_ciudad = () => {
    return `La ciudad ingresada es: ${ciudad.nombre} Existe: ${ciudad.existe}
Población: ${ciudad.Caracteristicas_ciudad.Población}
Autos: ${ciudad.Caracteristicas_ciudad.Autos}
Autopistas: ${ciudad.Caracteristicas_ciudad.Autopistas}
Carreras_legales: ${ciudad.Caracteristicas_ciudad.Carreras_legales}`
}

console.log(Imprimir_ciudad());