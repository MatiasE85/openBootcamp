class Persona {
    constructor(nombre, edad, telefono) {
        this._nombre = nombre;
        this._edad = edad;
        this._telefono = telefono
    }

    get nombre() {
        return this._nombre
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre.toString()
    }

    get edad() {
        return this._edad;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad
        } else {
            console.log("La edad no es válida")
        }
    }

    get telefono() {
        return this._telefono
    }
    set telefono(nuevoTelefono) {
        if (nuevoTelefono.length === 10) {
            this._telefono = nuevoTelefono
        } else {
            console.log("La longitud del numero ingresado no corresponde a un telefono valido")
        }
    }
}

const persona = new Persona("Matias", 23, 3815279435)