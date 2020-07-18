const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el Clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}