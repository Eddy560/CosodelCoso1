const suma = () => {
    let numUno = document.getElementById('numUno').value;
    let numDos = document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = (parseFloat(numUno) + parseFloat(numDos));
}

const resta = () => {
    let numUno = document.getElementById('numUno').value;
    let numDos = document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = (parseFloat(numUno) - parseFloat(numDos));
}

const multiplicacion = () => {
    let numUno = document.getElementById('numUno').value;
    let numDos = document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = (parseFloat(numUno) * parseFloat(numDos));
}

const division = () => {
    let numUno = document.getElementById('numUno').value;
    let numDos = document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = (parseFloat(numUno) / parseFloat(numDos));
}

const potencia = () => {
    let numUno = document.getElementById('numUno').value;
    let numDos = document.getElementById('numDos').value;
    document.getElementById('resultado').textContent = Math.pow(parseFloat(numUno), parseFloat(numDos));
}

const saluda = (value) => {
    alert(`Hola mundo ${value}`);
    console.log("Entro a la funcion saluda");
}