const Discord = require('discord.js');

module.exports = async (client, message) => {
    let guild = await client.guilds.cache.get("780029878338584616");
    let channel = await client.channels.cache.get("780029878652633125");
    let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "disapproved");
    if (guild != member.guild) {
      return console.log("Algum saco pela saiu do servidor. Mas não é nesse, então tá tudo bem :)");
     } else {
        let embed = await new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Adeus! ${emoji}`)
        .setImage("https://cdn.discordapp.com/attachments/719298069354774631/792832951041523734/Logo_Servidor_MTA_Tryce.png")
        .setDescription(`O ${member.user} acabou de sair do servidor <:cri_sunglasses:780186460690579486> \n
        mas espero que volte um dia destes ao meu servidor!
        Total de membros:  **${member.guild.memberCount}** usuários`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("Todos os direitos reservados")
        .setTimestamp();
  
      channel.send(embed);
    }
};