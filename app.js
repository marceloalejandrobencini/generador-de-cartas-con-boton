document.addEventListener('DOMContentLoaded', () => {
    const palos = [
        { nombre: 'heart', simbolo: '♥' },
        { nombre: 'spade', simbolo: '♠' },
        { nombre: 'club', simbolo: '♣' },
        { nombre: 'diamond', simbolo: '♦' }
    ];
    const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    function generarCarta() {
        const palo = palos[Math.floor(Math.random() * palos.length)];
        const valor = valores[Math.floor(Math.random() * valores.length)];
        return { palo, valor };
    }

    function mostrarCarta() {
        const carta = generarCarta();
        const divCarta = document.getElementById('carta');

        divCarta.innerHTML = '';

        divCarta.className = `card ${carta.palo.nombre}`;

        const simboloArriba = document.createElement('span');
        simboloArriba.className = 'corner top';
        simboloArriba.textContent = carta.palo.simbolo;

        const numeroCentral = document.createElement('span');
        numeroCentral.id = 'numero-central';
        numeroCentral.textContent = carta.valor;

        const simboloAbajo = document.createElement('span');
        simboloAbajo.className = 'corner bottom';
        simboloAbajo.textContent = carta.palo.simbolo;

        divCarta.appendChild(simboloArriba);
        divCarta.appendChild(numeroCentral);
        divCarta.appendChild(simboloAbajo);
    }

    mostrarCarta();

    const botonGenerarCarta = document.getElementById('generarCarta');
    botonGenerarCarta.addEventListener('click', mostrarCarta);
});
