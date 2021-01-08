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
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Evento ${eventName} carregado com sucesso kkkkkkk`)
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Comando ${commandName} carregado`);
    client.commands.set(commandName, props);
  });
});


//status
let idx = 0;

setInterval(() => {
    let messages = [{ name: `CRIADO COM ❤️ POR LuCky_Boss1260#0001 | CRIADO COM ❤️ POR 𝒯𝓇𝓎𝒸𝒸𝑒#3685`, type: 'PLAYING'},
                    { name: `${config.prefix}help | ${client.users.cache.size} usuários`, type: 'WATCHING'}]
    let message = messages[idx];
    idx++;
    if (idx >= messages.length) idx = 0;

    client.user.setPresence({ activity: message })
}, 5 * 1000);


client.login(config.token);