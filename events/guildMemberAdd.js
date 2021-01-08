const Discord = require('discord.js');

module.exports = async (client, message) => {
    let guild = await client.guilds.cache.get("780029878338584616");
    let channel = await client.channels.cache.get("780029878652633124");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "AK");
    if (guild != member.guild) {
      return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`<:100000:780186460313747476> Boas-vindas ${emoji}`)
        .setImage("https://cdn.discordapp.com/attachments/719298069354774631/792832951041523734/Logo_Servidor_MTA_Tryce.png")
        .setDescription(`O ${member.user} entrou no servidor <:pepeOK:780186460061696001>
        Vê o canal <#780029878928932864> para não seres punido! <:pepe_boomer:780186460175204362>
        Total de membros **${member.guild.memberCount}** usuários <:pepe_popcorn:780186460153970728>`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("Todos os direitos reservados")
        .setTimestamp();
  
      channel.send(embed);
    }
};