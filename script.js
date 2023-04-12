    let alertaDocumentos = 'Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.'

let dt = new Date()

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function padTo2Digits(num) {
    return String(num).padStart(2, '0')
}

const fechaActual = dt.getFullYear() + "/" + (padTo2Digits(dt.getMonth() + 1)) + "/" + padTo2Digits(dt.getDate())

const horaActual = padTo2Digits(dt.getHours()) + ":" + padTo2Digits(dt.getMinutes()) 

const nVuelo = getRandomInt(1,9999)

const nTerminal = getRandomInt(1,15)

document.write(`
<div class="container" id="welcomeBox">
<h1><b>Bienvenido a la plataforma <i>Eport</i></b></h1>
<h3>Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.</h3>
</div>
<div class="container-fluid">
<div class="column" id="time">
    <h3>Hora:</h3>
    <h1 id="insertTime">${horaActual}</h1>
</div>
<div class="column" id="date">
    <h3>Fecha:</h3>
    <h1 id="insertDate">${fechaActual}</h1>
</div>
</div>
<div class="container" id="flightBox">
<h1><b>El vuelo más próximo:</b></h1>
<h3>Número de vuelo: <em id="flightNumber">${nVuelo}</em></h3>
<h3>Terminal: <em id="terminalNumber">${nTerminal}</em></h3>
</div>
`)

alert(alertaDocumentos);

