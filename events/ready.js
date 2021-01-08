const config = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const Porta = 999


module.exports = async (client, message) => {
console.log('Oi')
console.log(`Listenning to port: ${ Porta }`)
}