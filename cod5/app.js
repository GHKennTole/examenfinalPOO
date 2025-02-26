class Personaje {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        this.salud = salud;
        this.ataque = ataque;
        this.defensa = defensa;
        this.magia = magia;
        this.defensaMagica = defensaMagica;
        this.agilidad = agilidad;
        this.ingenio = ingenio;
        this.recuperacion = recuperacion;
    }

    atacar(objetivo) {
        const ataqueTotal = (this.ataque + (armaSeleccionada ? armaSeleccionada.ataqueFisico : 0)) / 10;
        const porcentajeDefensa = objetivo.defensa / 100;
        const daño = ataqueTotal * (1 - porcentajeDefensa);
        objetivo.salud -= daño > 0 ? daño : 0;
        console.log(`${this.constructor.name} ataca a ${objetivo.constructor.name} y causa ${daño.toFixed(2)} de daño.`);
        actualizarSalud();
        verificarFinCombate(objetivo);
    }

    lanzarHechizo(objetivo) {
        const magiaTotal = (this.magia + (armaSeleccionada ? armaSeleccionada.ataqueMagico : 0)) / 10;
        const porcentajeDefensaMagica = objetivo.defensaMagica / 100;
        const daño = magiaTotal * (1 - porcentajeDefensaMagica);
        objetivo.salud -= daño > 0 ? daño : 0;
        console.log(`${this.constructor.name} lanza un hechizo a ${objetivo.constructor.name} y causa ${daño.toFixed(2)} de daño.`);
        actualizarSalud();
        verificarFinCombate(objetivo);
    }

    curar() {
        this.salud += this.recuperacion / 2;
        console.log(`${this.constructor.name} se cura y recupera ${this.recuperacion / 2} de salud.`);
        actualizarSalud();
    }

    trascender() {
        console.log("Evolucionando");
    }
}

function actualizarSalud() {
    const estadisticasCombateHero = document.getElementById('estadisticas-combate-hero');
    const estadisticasCombateEnemigo = document.getElementById('estadisticas-combate-enemigo');

    estadisticasCombateHero.querySelector('p:nth-child(2)').textContent = `Salud: ${Math.round(personajeSeleccionado.salud)}`;
    estadisticasCombateEnemigo.querySelector('p:nth-child(2)').textContent = `Salud: ${Math.round(enemigoSeleccionado.salud)}`;
}

function verificarFinCombate() {
    if (personajeSeleccionado.salud <= 0) {
        console.log(`${personajeSeleccionado.constructor.name} ha sido derrotado.`);
        mostrarResultado(`Tu ${personajeSeleccionado.constructor.name} ha sido derrotado. ¡¡¡PERDISTE PINCHE MANCO!!!`);
    } else if (enemigoSeleccionado.salud <= 0) {
        console.log(`${enemigoSeleccionado.constructor.name} ha sido derrotado.`);
        mostrarResultado(`Derrotaste a ${enemigoSeleccionado.constructor.name}. No me lo esperaba. ¡¡¡CONGRATULATIONS!!!`);
    }
}

function mostrarResultado(mensaje) {
    const pantallaCombate = document.getElementById('pantalla-combate');
    const pantallaResultado = document.getElementById('pantalla-resultado');
    const resultadoCombate = document.getElementById('resultado-combate');

    pantallaCombate.style.display = 'none';
    pantallaResultado.style.display = 'flex';
    resultadoCombate.textContent = mensaje;

    pantallaResultado.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
    // Reiniciar variables
    personajeSeleccionado = null;
    armaSeleccionada = null;
    enemigoSeleccionado = null;
    turnosDesdeUltimaCuracion = 0;

    // Ocultar pantalla de resultados y mostrar pantalla de bienvenida
    const pantallaResultado = document.getElementById('pantalla-resultado');
    pantallaResultado.style.display = 'none';
    document.getElementById('pantalla-bienvenida').style.display = 'flex';

    // Reiniciar contenido de las pantallas
    document.getElementById('descripcion-hero').innerHTML = '';
    document.getElementById('estadisticas-hero').innerHTML = '';
    document.getElementById('imagen-hero').style.backgroundImage = '';
    document.querySelector('.info-hero').style.visibility = 'hidden';

    document.getElementById('descripcion-arma').innerHTML = '';
    document.getElementById('estadisticas-arma').innerHTML = '';
    document.getElementById('imagen-arma').style.backgroundImage = '';
    document.querySelector('.info-arma').style.visibility = 'hidden';

    document.getElementById('descripcion-enemigo').innerHTML = '';
    document.getElementById('imagen-enemigo').style.backgroundImage = '';
    document.querySelector('.info-enemigo').style.visibility = 'hidden';

    // Eliminar event listener para evitar múltiples registros
    pantallaResultado.removeEventListener('click', reiniciarJuego);
}

function detenerCombate() {
    document.getElementById('atacar-btn').removeEventListener('click', atacarHandler);
    document.getElementById('hechizo-btn').removeEventListener('click', hechizoHandler);
    document.getElementById('curar-btn').removeEventListener('click', curarHandler);
    document.getElementById('trascender-btn').removeEventListener('click', trascenderHandler);
}

class Heroe extends Personaje {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
}

class Guerrero extends Heroe {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
    atacar(objetivo) {
        super.atacar(objetivo);
    }
    lanzarHechizo(objetivo) {
        super.lanzarHechizo(objetivo);
    }
    curar() {
        super.curar();
    }
    trascender() {
        super.trascender();
    }
}

class Arquero extends Heroe {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
    atacar(objetivo) {
        super.atacar(objetivo);
    }
    lanzarHechizo(objetivo) {
        super.lanzarHechizo(objetivo);
    }
    curar() {
        super.curar();
    }
    trascender() {
        super.trascender();
    }
}

class Mago extends Heroe {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
    atacar(objetivo) {
        super.atacar(objetivo);
    }
    lanzarHechizo(objetivo) {
        super.lanzarHechizo(objetivo);
    }
    curar() {
        super.curar();
    }
    trascender() {
        super.trascender();
    }
}
const heroe1 = new Guerrero(90, 80, 80, 20, 40, 50, 40, 60);
const heroe2 = new Arquero(60, 70, 40, 30, 60, 90, 70, 50);
const heroe3 = new Mago(50, 30, 30, 90, 90, 60, 80, 40);
const heroes = [heroe1, heroe2, heroe3];

class Villano extends Personaje {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
}

class BestiaGuerrera extends Villano {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
    atacar(objetivo) {
        super.atacar(objetivo);
    }
    lanzarHechizo(objetivo) {
        super.lanzarHechizo(objetivo);
    }
    curar() {
        super.curar();
    }
    evolucionar() {
        super.trascender();
    }
}

class Cazador extends Villano {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
    atacar(objetivo) {
        super.atacar(objetivo);
    }
    lanzarHechizo(objetivo) {
        super.lanzarHechizo(objetivo);
    }
    curar() {
        super.curar();
    }
    evolucionar() {
        super.trascender();
    }
}

class Espectro extends Villano {
    constructor(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion) {
        super(salud, ataque, defensa, magia, defensaMagica, agilidad, ingenio, recuperacion);
    }
    atacar(objetivo) {
        super.atacar(objetivo);
    }
    lanzarHechizo(objetivo) {
        super.lanzarHechizo(objetivo);
    }
    curar() {
        super.curar();
    }
    evolucionar() {
        super.trascender();
    }
}
const villano1 = new BestiaGuerrera(90, 80, 80, 20, 40, 50, 40, 60);
const villano2 = new Cazador(60, 70, 40, 30, 60, 90, 70, 50);
const villano3 = new Espectro(50, 30, 30, 90, 90, 60, 80, 40);
const villanos = [villano1, villano2, villano3];

class Arma {
    constructor(nombre, ataqueFisico, ataqueMagico, agilidad, atributo) {
        this.nombre = nombre;
        this.ataqueFisico = ataqueFisico;
        this.ataqueMagico = ataqueMagico;
        this.agilidad = agilidad;
        this.atributo = atributo;
    }
}

class Espada extends Arma {
    constructor(nombre, ataqueFisico, ataqueMagico, agilidad, atributo) {
        super(nombre, ataqueFisico, ataqueMagico, agilidad, atributo);
    }
}

const espada1 = new Espada('Espada de fuego', 80, 30, 50, 'Fuego');
const espada2 = new Espada('Espada de de agua', 90, 20, 60, 'Agua');
const espada3 = new Espada('Espada de hoja', 70, 40, 70, 'Natural');
const espadas = [espada1, espada2, espada3];

class Arco extends Arma {
    constructor(nombre, ataqueFisico, ataqueMagico, agilidad, atributo) {
        super(nombre, ataqueFisico, ataqueMagico, agilidad, atributo);
    }
}
const arco1 = new Arco('Arco en llamas', 80, 30, 50, 'Fuego');
const arco2 = new Arco('Arco liquido', 90, 20, 60, 'Agua');
const arco3 = new Arco('Arco ramificado', 70, 40, 70, 'Natural');
const arcos = [arco1, arco2, arco3];

class Grimorio extends Arma {
    constructor(nombre, ataqueFisico, ataqueMagico, agilidad, atributo) {
        super(nombre, ataqueFisico, ataqueMagico, agilidad, atributo);
    }
}
const grimorio1 = new Grimorio('Grimorio espiritu de fuego', 80, 30, 50, 'Fuego');
const grimorio2 = new Grimorio('Grimorio espiritu de agua', 90, 20, 60, 'Agua');
const grimorio3 = new Grimorio('Grimorio espiritu de tierra', 70, 40, 70, 'Natural');
const grimorios = [grimorio1, grimorio2, grimorio3];

function determinarOrdenTurnos() {
    const personajes = [personajeSeleccionado, enemigoSeleccionado];
    personajes.sort((a, b) => {
        const agilidadA = a.agilidad + (a.arma ? a.arma.agilidad : 0);
        const agilidadB = b.agilidad + (b.arma ? b.arma.agilidad : 0);
        return agilidadB - agilidadA;
    });
    return personajes;
}

function accionEnemigo(enemigo, objetivo) {
    enemigo.atacar(objetivo);
}

function iniciarCombate() {
    const ordenTurnos = determinarOrdenTurnos();
    let turnoActual = 0;
    let ultimaAccion = null;

    function siguienteTurno() {
        const personajeActual = ordenTurnos[turnoActual];
        const objetivo = personajeActual === personajeSeleccionado ? enemigoSeleccionado : personajeSeleccionado;

        if (personajeActual === personajeSeleccionado) {
            // Esperar a que el jugador realice una acción
            document.getElementById('atacar-btn').removeEventListener('click', atacarHandler);
            document.getElementById('hechizo-btn').removeEventListener('click', hechizoHandler);
            document.getElementById('curar-btn').removeEventListener('click', curarHandler);
            document.getElementById('trascender-btn').removeEventListener('click', trascenderHandler);

            document.getElementById('atacar-btn').addEventListener('click', atacarHandler);
            document.getElementById('hechizo-btn').addEventListener('click', hechizoHandler);
            document.getElementById('curar-btn').addEventListener('click', curarHandler);
            document.getElementById('trascender-btn').addEventListener('click', trascenderHandler);

            if (turnosDesdeUltimaCuracion < 3) {
                document.getElementById('curar-btn').disabled = true;
            } else {
                document.getElementById('curar-btn').disabled = false;
            }

        } else {
            // Acción del enemigo
            if (ultimaAccion) {
                realizarAccionEspejo(ultimaAccion, enemigoSeleccionado, personajeSeleccionado);
            } else {
                accionEnemigo(enemigoSeleccionado, personajeSeleccionado);
            }
            turnoActual = (turnoActual + 1) % ordenTurnos.length;
            setTimeout(siguienteTurno, 1000); // Esperar un segundo antes del siguiente turno
        }
    }

    function realizarAccionEspejo(accion, personaje, objetivo) {
        switch (accion) {
            case 'atacar':
                personaje.atacar(objetivo);
                break;
            case 'hechizo':
                personaje.lanzarHechizo(objetivo);
                break;
            case 'curar':
                personaje.curar();
                break;
            case 'trascender':
                personaje.trascender();
                break;
        }
    }

    function atacarHandler() {
        ultimaAccion = 'atacar';
        personajeSeleccionado.atacar(enemigoSeleccionado);
        turnoActual = (turnoActual + 1) % ordenTurnos.length;
        turnosDesdeUltimaCuracion++;
        siguienteTurno();
    }

    function hechizoHandler() {
        ultimaAccion = 'hechizo';
        personajeSeleccionado.lanzarHechizo(enemigoSeleccionado);
        turnoActual = (turnoActual + 1) % ordenTurnos.length;
        turnosDesdeUltimaCuracion++;
        siguienteTurno();
    }

    function curarHandler() {
        if (turnosDesdeUltimaCuracion >= 3) {
            ultimaAccion = 'curar';
            personajeSeleccionado.curar();
            turnosDesdeUltimaCuracion = 0; // Reiniciar el contador de turnos desde la última curación
            turnoActual = (turnoActual + 1) % ordenTurnos.length;
            siguienteTurno();
        }
    }

    function trascenderHandler() {
        ultimaAccion = 'trascender';
        personajeSeleccionado.trascender();
        turnoActual = (turnoActual + 1) % ordenTurnos.length;
        siguienteTurno();
    }

    siguienteTurno();
}

let personajeSeleccionado = null;
let armaSeleccionada = null;
let enemigoSeleccionado = null;
let turnosDesdeUltimaCuracion = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
    const pantallaSeleccion = document.getElementById('pantalla-seleccion');
    const pantallaArmas = document.getElementById('pantalla-armas');
    const pantallaEnemigos = document.getElementById('pantalla-enemigos');
    const pantallaCombate = document.getElementById('pantalla-combate');
    const imagenHero = document.getElementById('imagen-hero');
    const descripcionHero = document.getElementById('descripcion-hero');
    const estadisticasHero = document.getElementById('estadisticas-hero');
    const infoHero = document.querySelector('.info-hero');
    const armasDiv = document.querySelector('.armas');
    const imagenArma = document.getElementById('imagen-arma');
    const descripcionArma = document.getElementById('descripcion-arma');
    const estadisticasArma = document.getElementById('estadisticas-arma');
    const infoArma = document.querySelector('.info-arma');
    const enemigosDiv = document.querySelector('.enemigos');
    const imagenEnemigo = document.getElementById('imagen-enemigo');
    const descripcionEnemigo = document.getElementById('descripcion-enemigo');
    const infoEnemigo = document.querySelector('.info-enemigo');

    pantallaBienvenida.addEventListener('click', () => {
        pantallaBienvenida.style.display = 'none';
        pantallaSeleccion.style.display = 'flex';
    });

    document.getElementById('guerrero-btn').addEventListener('click', () => {
        seleccionarHeroe('Guerrero');
    });

    document.getElementById('mago-btn').addEventListener('click', () => {
        seleccionarHeroe('Mago');
    });

    document.getElementById('arquero-btn').addEventListener('click', () => {
        seleccionarHeroe('Arquero');
    });

    function seleccionarHeroe(heroe) {
        console.log(`Héroe seleccionado: ${heroe}`);
        switch (heroe) {
            case 'Guerrero':
                personajeSeleccionado = heroe1;
                imagenHero.style.backgroundImage = "url('Imagenes/Sprites/Personajes/Guerrero.png')";
                descripcionHero.innerHTML = "<p>El Guerrero es fuerte y valiente, especializado en combate cuerpo a cuerpo.</p>";
                estadisticasHero.innerHTML = `
                    <p>Salud: 90</p>
                    <p>Ataque: 80</p>
                    <p>Defensa: 80</p>
                    <p>Magia: 20</p>
                    <p>Defensa Mágica: 40</p>
                    <p>Agilidad: 50</p>
                    <p>Ingenio: 40</p>
                    <p>Recuperación: 60</p>
                `;
                break;
            case 'Mago':
                personajeSeleccionado = heroe3;
                imagenHero.style.backgroundImage = "url('Imagenes/Sprites/Personajes/Mago.png')";
                descripcionHero.innerHTML = "<p>El Mago es sabio y poderoso, especializado en hechizos y magia.</p>";
                estadisticasHero.innerHTML = `
                    <p>Salud: 50</p>
                    <p>Ataque: 30</p>
                    <p>Defensa: 30</p>
                    <p>Magia: 90</p>
                    <p>Defensa Mágica: 60</p>
                    <p>Agilidad: 60</p>
                    <p>Ingenio: 80</p>
                    <p>Recuperación: 40</p>
                `;
                break;
            case 'Arquero':
                personajeSeleccionado = heroe2;
                imagenHero.style.backgroundImage = "url('Imagenes/Sprites/Personajes/Arquero.png')";
                descripcionHero.innerHTML = "<p>El Arquero es ágil y preciso, especializado en ataques a distancia.</p>";
                estadisticasHero.innerHTML = `
                    <p>Salud: 60</p>
                    <p>Ataque: 70</p>
                    <p>Defensa: 40</p>
                    <p>Magia: 30</p>
                    <p>Defensa Mágica: 60</p>
                    <p>Agilidad: 90</p>
                    <p>Ingenio: 70</p>
                    <p>Recuperación: 50</p>
                `;
                break;
        }
        infoHero.style.visibility = 'visible'; // Mostrar los cuadros de información
    }

    document.getElementById('siguiente-btn').addEventListener('click', () => {
        console.log('Siguiente ventana');
        pantallaSeleccion.style.display = 'none';
        pantallaArmas.style.display = 'flex';
        mostrarArmas(personajeSeleccionado);
    });

    function mostrarArmas(heroe) {
        armasDiv.innerHTML = ''; // Limpiar las armas anteriores
        let armas = [];
        switch (heroe.constructor.name) {
            case 'Guerrero':
                armas = espadas;
                break;
            case 'Mago':
                armas = grimorios;
                break;
            case 'Arquero':
                armas = arcos;
                break;
        }
        armas.forEach(arma => {
            const button = document.createElement('button');
            button.textContent = arma.nombre;
            button.addEventListener('click', () => {
                seleccionarArma(arma);
            });
            armasDiv.appendChild(button);
        });
    }

    function seleccionarArma(arma) {
        console.log(`Arma seleccionada: ${arma.nombre}`);
        armaSeleccionada = arma;
        infoArma.style.visibility = 'visible'; // Mostrar los cuadros de información
        switch (arma.nombre) {
            case 'Espada de fuego':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Espada de Fuego.webp')";
                descripcionArma.innerHTML = "<p>Espada con atributos de fuego, capaz de cortar y quemar un jabali.</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +80%</p>
                    <p>Ataque Mágico: +30%</p>
                    <p>Agilidad: +50%</p>
                `;
                break;
            case 'Espada de de agua':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Espada de Agua.webp')";
                descripcionArma.innerHTML = "<p>Espada con atributos de agua, capaz de hacer cortes profundos.</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +90%</p>
                    <p>Ataque Mágico: +20%</p>
                    <p>Agilidad: +60%</p>
                `;
                break;
            case 'Espada de hoja':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Espada de cesped.jpg')";
                descripcionArma.innerHTML = "<p>Espada con atributo natural, precisa y ligera con gran filo (La que usa Finn el humano we).</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +70%</p>
                    <p>Ataque Mágico: +40%</p>
                    <p>Agilidad: +70%</p>
                `;
                break;
            case 'Arco en llamas':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Arco de Fuego.jpg')";
                descripcionArma.innerHTML = "<p>Arco con atributo de fuego, poderoso pero perseptible (No encontre un buen png :/).</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +80%</p>
                    <p>Ataque Mágico: +30%</p>
                    <p>Agilidad: +50%</p>
                `;
                break;
            case 'Arco liquido':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Arco de Agua.jpg')";
                descripcionArma.innerHTML = "<p>Arco con atributo Agua, menor alcance pero mayor rapidez.</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +90%</p>
                    <p>Ataque Mágico: +20%</p>
                    <p>Agilidad: +60%</p>
                `;
                break;
            case 'Arco ramificado':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Arco de cesped.jpg')";
                descripcionArma.innerHTML = "<p>Arco con atributo natural, veloz y preciso pero menos potencia.</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +70%</p>
                    <p>Ataque Mágico: +40%</p>
                    <p>Agilidad: +70%</p>
                `;
                break;
            case 'Grimorio espiritu de fuego':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Grimorio de Fuego.gif')";
                descripcionArma.innerHTML = "<p>Grimorio espiritu de fuego, no mames con esa chingadera se invoca al chamuco 😨.</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +80%</p>
                    <p>Ataque Mágico: +30%</p>
                    <p>Agilidad: +50%</p>
                `;
                break;
            case 'Grimorio espiritu de agua':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Grimorio de Agua.png')";
                descripcionArma.innerHTML = "<p>Grimorio espiritu de agua (no hay buenos sprites en google 😕).</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +90%</p>
                    <p>Ataque Mágico: +20%</p>
                    <p>Agilidad: +60%</p>
                `;
                break;
            case 'Grimorio espiritu de tierra':
                imagenArma.style.backgroundImage = "url('Imagenes/Sprites/Armas/Grimorio de cesped.webp')";
                descripcionArma.innerHTML = "<p>Grimorio espiritu de tierra (Literal pinche imagen mas culeada pero fue lo mas parecido que encontré).</p>";
                estadisticasArma.innerHTML = `
                    <p>Ataque Físico: +70%</p>
                    <p>Ataque Mágico: +40%</p>
                    <p>Agilidad: +70%</p>
                `;
                break;
        }
    }

    document.getElementById('retroceder-btn').addEventListener('click', () => {
        console.log('Retroceder a selección de héroe');
        pantallaArmas.style.display = 'none';
        pantallaSeleccion.style.display = 'flex';
        reiniciarSeleccionArmas();
    });

    function reiniciarSeleccionArmas() {
        armaSeleccionada = null;
        infoArma.style.visibility = 'hidden';
        imagenArma.style.backgroundImage = '';
        descripcionArma.innerHTML = '';
        estadisticasArma.innerHTML = '';
    }

    document.getElementById('arma-siguiente-btn').addEventListener('click', () => {
        console.log('ventana de seleccion de enemigos');
        pantallaArmas.style.display = 'none';
        pantallaEnemigos.style.display = 'flex';
        mostrarEnemigos();
    });

    function mostrarEnemigos() {
        enemigosDiv.innerHTML = ''; // Limpiar los enemigos anteriores
        villanos.forEach(villano => {
            const button = document.createElement('button');
            button.textContent = villano.constructor.name;
            button.addEventListener('click', () => {
                seleccionarEnemigo(villano);
            });
            enemigosDiv.appendChild(button);
        });
    }

    function obtenerArmaAleatoria(armas) {
        const indiceAleatorio = Math.floor(Math.random() * armas.length);
        return armas[indiceAleatorio];
    }

    function seleccionarEnemigo(enemigo) {
        console.log(`Enemigo seleccionado: ${enemigo.constructor.name}`);
        enemigoSeleccionado = enemigo;
        infoEnemigo.style.visibility = 'visible'; // Mostrar los cuadros de información
    
        // Asignar un arma al azar según el tipo de enemigo
        switch (enemigo.constructor.name) {
            case 'BestiaGuerrera':
                enemigo.arma = obtenerArmaAleatoria(espadas);
                imagenEnemigo.style.backgroundImage = "url('imagenes/Sprites/Personajes/BestiaGuerrera.webp')";
                descripcionEnemigo.innerHTML = "<p>La Bestia Guerrera es feroz y poderosa, especializada en ataques físicos.</p>";
                break;
            case 'Cazador':
                enemigo.arma = obtenerArmaAleatoria(arcos);
                imagenEnemigo.style.backgroundImage = "url('Imagenes/Sprites/Personajes/Cazador.webp')";
                descripcionEnemigo.innerHTML = "<p>El Cazador es ágil y letal, especializado en ataques rápidos y precisos.</p>";
                break;
            case 'Espectro':
                enemigo.arma = obtenerArmaAleatoria(grimorios);
                imagenEnemigo.style.backgroundImage = "url('Imagenes/Sprites/Personajes/Espectro.webp')";
                descripcionEnemigo.innerHTML = "<p>El Espectro es misterioso y peligroso, especializado en magia oscura.</p>";
                break;
        }
    
        // Mostrar el arma asignada al enemigo
        console.log(`Arma asignada al enemigo: ${enemigo.arma.nombre}`);
    }
    document.getElementById('enem-retroceder-btn').addEventListener('click', () => {
        console.log('Retroceder a selección de armas');
        pantallaEnemigos.style.display = 'none';
        pantallaArmas.style.display = 'flex';
        reiniciarSeleccionEnemigos();
    });

    function reiniciarSeleccionEnemigos() {
        enemigoSeleccionado = null;
        infoEnemigo.style.visibility = 'hidden';
        imagenEnemigo.style.backgroundImage = '';
        descripcionEnemigo.innerHTML = '';
    }

    document.getElementById('enem-siguiente-btn').addEventListener('click', () => {
        console.log('ventana de combate');
        pantallaEnemigos.style.display = 'none';
        pantallaCombate.style.display = 'flex';
        mostrarCombate();
        iniciarCombate();
    });

    function mostrarCombate() {
        const imagenCombateHero = document.getElementById('imagen-combate-hero');
        const estadisticasCombateHero = document.getElementById('estadisticas-combate-hero');
        const imagenCombateEnemigo = document.getElementById('imagen-combate-enemigo');
        const estadisticasCombateEnemigo = document.getElementById('estadisticas-combate-enemigo');
    
        // Mostrar imagen y estadísticas del héroe
        imagenCombateHero.style.backgroundImage = imagenHero.style.backgroundImage;
        estadisticasCombateHero.innerHTML = `
            <p>Arma: ${armaSeleccionada.nombre}</p>
            <p>Salud: ${personajeSeleccionado.salud}</p>
            <p>Ataque: ${personajeSeleccionado.ataque + armaSeleccionada.ataqueFisico}</p>
            <p>Defensa: ${personajeSeleccionado.defensa}</p>
            <p>Magia: ${personajeSeleccionado.magia + armaSeleccionada.ataqueMagico}</p>
            <p>Defensa Mágica: ${personajeSeleccionado.defensaMagica}</p>
            <p>Agilidad: ${personajeSeleccionado.agilidad + armaSeleccionada.agilidad}</p>
            <p>Ingenio: ${personajeSeleccionado.ingenio}</p>
            <p>Recuperación: ${personajeSeleccionado.recuperacion}</p>
        `;
    
        // Mostrar imagen y estadísticas del enemigo
        imagenCombateEnemigo.style.backgroundImage = imagenEnemigo.style.backgroundImage;
        estadisticasCombateEnemigo.innerHTML = `
            <p>Arma: ${enemigoSeleccionado.arma.nombre}</p>
            <p>Salud: ${enemigoSeleccionado.salud}</p>
            <p>Ataque: ${enemigoSeleccionado.ataque + enemigoSeleccionado.arma.ataqueFisico}</p>
            <p>Defensa: ${enemigoSeleccionado.defensa}</p>
            <p>Magia: ${enemigoSeleccionado.magia + enemigoSeleccionado.arma.ataqueMagico}</p>
            <p>Defensa Mágica: ${enemigoSeleccionado.defensaMagica}</p>
            <p>Agilidad: ${enemigoSeleccionado.agilidad + enemigoSeleccionado.arma.agilidad}</p>
            <p>Ingenio: ${enemigoSeleccionado.ingenio}</p>
            <p>Recuperación: ${enemigoSeleccionado.recuperacion}</p>
        `;
    }
});