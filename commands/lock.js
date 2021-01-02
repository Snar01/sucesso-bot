const { DiscordAPIError, MessageEmbed } = require("discord.js");
const config = require('../config.json')

//comando de lock
exports.run = (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
  
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })

      let embed = new MessageEmbed()
      .setTitle('🔒 Canal fechado!')
      .setColor('BLUE')
        message.reply('🔒', embed);
    };
    
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ld'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'lock',
    description: 'Isso bloqueará um canal.',
    usage: 'lock'
  };