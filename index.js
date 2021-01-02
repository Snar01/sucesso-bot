const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 999;

express()
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

 const args = message.content.trim().slice(config.prefix.length).split(/ +/g);

 const command = args.shift().toLowerCase();

 try {
     const commandFile = require(`./commands/${command}.js`)
     commandFile.run(client, message, args);
 } catch (err) {
  let cmdz = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`Esse comando não existe por favor faça ${config.prefix}help`);
  message.reply(` `,cmdz);
}
});

//welcome
client.on("guildMemberAdd", async (member) => { 

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
});

//goodbye
client.on("guildMemberRemove", async (member) => { 

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
});

//status
let idx = 0;

setInterval(() => {
    let messages = [{ name: `CRIADO COM ❤️ POR LuCky_Boss1260#0001 | CRIADO COM ❤️ POR 𝒯𝓇𝓎𝒸𝒸𝑒#3685`, type: 'PLAYING'},
                    { name: `${config.prefix}help | Não há!`, type: 'WATCHING'}]
    let message = messages[idx];
    idx++;
    if (idx >= messages.length) idx = 0;

    client.user.setPresence({ activity: message })
}, 5 * 1000);

client.on("messsage", async message => {
  if(message.channel.id === "780029878928932873") {
    message.react('👍')
    message.react('🙂')
  }
});

client.login(config.token);