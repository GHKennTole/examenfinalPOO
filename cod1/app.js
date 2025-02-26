//console.log("Enviado a consola");

class Persona{
    constructor(nombre,edad,correo)
    {
        this._nombre=nombre;
        this._edad=edad;
        this._correo=correo;
    }
    saludar()
    {
        console.log(`Hola, bienvenido ${this._nombre}`);
    }
    siEsMayor()
    {
        if(this._edad>=18)
            return true
        else
            return false
    }
    verInformacion()
    {
        console.log(`Los datos son:
            nombre=${this._nombre}
            edad=${this._edad}
            correo=${this._correo}`)
    }
    actualizarCorreo(nuevo)
    {
        this._correo=nuevo;
    }
}

let persona1 = new Persona(`jose`, 25, `jose@gmail.com`);
persona1.saludar();
console.log(persona1.siEsMayor());
persona1.verInformacion();
persona1.actualizarCorreo(`nuevocorreo@gmail.com`);
persona1.verInformacion();