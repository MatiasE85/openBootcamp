class Persona {
    constructor(edad, nombre, telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }

}

class Cliente extends Persona {
    constructor(edad, nombre, telefono, credito) {
        super(edad, nombre, telefono);
        this.credito = credito;
    }

}

let nuevoCliente = new Cliente("35", "Matias", "3815279435", "5")
console.log(nuevoCliente)

class Trabajador extends Cliente {
    constructor(edad, nombre, telefono, credito, salario) {
        super(edad, nombre, telefono, credito);
        this.salario = salario;
    }
}

let nuevoTrabajador = new Trabajador("25", "Pablo", "3364052345", "8", "USD2500")
console.log(nuevoTrabajador)