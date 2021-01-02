const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const say = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(say)
}