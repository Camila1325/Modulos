//Módulos en JavaScript
import { nombre, suma } from './module2.js';

console.log(nombre);
//ACTIVIDAD

/*
crear minimo 2 modulos
-el primer modulo debe de tener:
*una clase que ereda de otra
*un objeto que dentro de sus propiedades tenga otro objeto
*/

class Autos{
    constructor(marca,año,modelo){
    this.marca = marca;
    this.año = año;
    this.modelo = modelo;
    }

    modeloA(){
        return` El auto ${this.marca} es un: ${this.modelo}`;
    }
}


class JDM extends Autos{

    // constructor de la clase supra

    constructor(marca,año,modelo,motor){
        super(marca,año,modelo)
        this.motor = motor;
    }
}

//Objeto con otro objeto dentro
const ciudad ={
    nombre : "Tokyo",
    existe : true,
    Caracteristicas_ciudad :{
        Población : "alta",
        Autos: "bastantes",
        Autopistas: true,
        Carreras_legales: false,
    }
}

export{JDM,ciudad}