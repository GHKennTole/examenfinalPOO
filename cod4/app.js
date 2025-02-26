class Villano {
    constructor(clase, nombre, salud, ataque, magia, defensa_fisica, defensa_magica) {
        this.clase = clase;
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
}

class EnemigoGuerrero extends Villano {
    constructor(clase, nombre, salud, ataque, magia, defensa_fisica, defensa_magica) {
        super(clase, nombre, salud, ataque, magia, defensa_fisica, defensa_magica);
    }
    atacar() {
        return this.ataque;	
    }
    defender() {
        return this.defensa_fisica;
    }
    mensajeAtacar() {
        return `El ${this.nombre} ataca con su mazo y hace un total de: ${this.atacar()} daño fisico`;
    }
    mensajeDefender() {
        return `El ${this.nombre} se defiende con su escudo evitando un: ${this.defender()}% de daño fisico`;
    }
}

class EnemigoLanzador extends Villano {
    constructor(clase, nombre, salud, ataque, magia, defensa_fisica, defensa_magica) {
        super(clase, nombre, salud, ataque, magia, defensa_fisica, defensa_magica);
    }
    atacar() {
        return this.magia;
    }
    defender() {
        return this.defensa_magica;
    }
    mensajeAtacar() {
        return `El ${this.nombre} lanza un hechizo de fuego haciendo un total de: ${this.atacar()} de daño magico`;
    }
    mensajeDefender() {
        return `El ${this.nombre} crea una barrera magica evitando un: ${this.defender()}% del daño magico`;
    }
}

const enemigo1 = new EnemigoGuerrero('Guerrero', 'Goblin', 100, 10, 1, 5, 1);
const enemigo2 = new EnemigoLanzador('Lanzador', 'Mago', 100, 1, 10, 1, 5);

const enemigos = [enemigo1, enemigo2];

document.addEventListener('DOMContentLoaded', (event) => {
    const enemigoSelect = document.getElementById('enemigo');
    const mostrarEstadisticasBtn = document.getElementById('mostrar-estadisticas');
    const estadisticasDiv = document.getElementById('estadisticas');

    function actualizarEnemigos() {
        enemigoSelect.innerHTML = '';

        enemigos.forEach(enemigo => {
            const option = document.createElement('option');
            option.value = enemigo.nombre;
            option.textContent = enemigo.nombre;
            enemigoSelect.appendChild(option);
        });
    }

    function mostrarEstadisticas() {
        const nombre = enemigoSelect.value;

        let enemigo = enemigos.find(e => e.nombre === nombre);

        if (enemigo) {
            estadisticasDiv.innerHTML = `
                <h2>${enemigo.nombre}</h2>
                <p>Clase: ${enemigo.clase}</p>
                <p>Salud: ${enemigo.salud}</p>
                <p>Ataque: ${enemigo.ataque}</p>
                <p>Magia: ${enemigo.magia}</p>
                <p>Defensa Física: ${enemigo.defensa_fisica}</p>
                <p>Defensa Mágica: ${enemigo.defensa_magica}</p>
                <button id="atacar-btn">Atacar</button>
                <button id="defender-btn">Defender</button>
                <div id="resultado-accion"></div>
            `;

            document.getElementById('atacar-btn').addEventListener('click', () => {
                document.getElementById('resultado-accion').textContent = enemigo.mensajeAtacar();
            });

            document.getElementById('defender-btn').addEventListener('click', () => {
                document.getElementById('resultado-accion').textContent = enemigo.mensajeDefender();
            });
        }
    }

    mostrarEstadisticasBtn.addEventListener('click', mostrarEstadisticas);

    actualizarEnemigos();
});