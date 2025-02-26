class Personaje {
    constructor(nombre, salud, ataque, magia, defensa_fisica, defensa_magica) {
        this.nombre = nombre;
        this.salud = salud;
        this.ataque = ataque;
        this.magia = magia;
        this.defensa_fisica = defensa_fisica;
        this.defensa_magica = defensa_magica;
    }
    atacar() {
        return this.ataque;
    }
    defender() {
        return this.defensa_fisica;
    }
    ataqueMagico() {
        return this.magia;
    }
}

class Heroe extends Personaje {
    constructor(clase, nombre, salud, ataque, magia, defensa_fisica, defensa_magica) {
        super(nombre, salud, ataque, magia, defensa_fisica, defensa_magica);
        this.clase = clase;
    }
}

const guerrero = new Heroe('Guerrero', 'Argus', 100, 30, 5, 25, 10);
const ladron = new Heroe('Ladrón', 'Bacu', 80, 20, 15, 20, 15);
const arquero = new Heroe('Arquero', 'Link', 60, 35, 20, 10, 15);
const mago = new Heroe('Mago', 'Delil', 50, 10, 40, 5, 30);

const personajes = [guerrero, ladron, arquero, mago];

document.addEventListener('DOMContentLoaded', (event) => {
    const tipoPersonajeSelect = document.getElementById('tipo-personaje');
    const personajeSelect = document.getElementById('personaje');
    const mostrarEstadisticasBtn = document.getElementById('mostrar-estadisticas');
    const estadisticasDiv = document.getElementById('estadisticas');

    tipoPersonajeSelect.addEventListener('change', actualizarPersonajes);
    mostrarEstadisticasBtn.addEventListener('click', mostrarEstadisticas);

    function actualizarPersonajes() {
        personajeSelect.innerHTML = '';

        personajes.forEach(personaje => {
            const option = document.createElement('option');
            option.value = personaje.clase;
            option.textContent = personaje.clase;
            personajeSelect.appendChild(option);
        });
    }

    function mostrarEstadisticas() {
        const clase = personajeSelect.value;

        const personaje = personajes.find(p => p.clase === clase);

        if (personaje) {
            estadisticasDiv.innerHTML = `
                <h2>${personaje.nombre}</h2>
                <p>Clase: ${personaje.clase}</p>
                <p>Salud: ${personaje.salud}</p>
                <p>Ataque: ${personaje.ataque}</p>
                <p>Magia: ${personaje.magia}</p>
                <p>Defensa Física: ${personaje.defensa_fisica}</p>
                <p>Defensa Mágica: ${personaje.defensa_magica}</p>
                <button id="atacar-btn">Atacar</button>
                <button id="defender-btn">Defender</button>
                <button id="ataque-magico-btn">Ataque Mágico</button>
                <div id="resultado-accion"></div>
            `;

            document.getElementById('atacar-btn').addEventListener('click', () => {
                document.getElementById('resultado-accion').textContent = `Hizo un total de: ${personaje.atacar()} puntos de daño`;
            });

            document.getElementById('defender-btn').addEventListener('click', () => {
                document.getElementById('resultado-accion').textContent = `Al logrado evitar un: ${personaje.defender()} % de daño`;
            });

            document.getElementById('ataque-magico-btn').addEventListener('click', () => {
                document.getElementById('resultado-accion').textContent = `Ha causado un total del: ${personaje.ataqueMagico()} de daño mágico`;
            });
        }
    }

    actualizarPersonajes();
});