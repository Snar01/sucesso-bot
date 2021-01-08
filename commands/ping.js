const Discord = require('discord.js');

module.exports = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pong! ${client.ws.ping}ms`)
    message.channel.send(embed)
}