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
const fs = require('fs');

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./events/${file}`);
      let evtName = file.split('.')[0];
      console.log(`Loaded event '${evtName}'`);
      client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir('./commands/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./commands/${file}`);
      let evtName = file.split('.')[0];
      console.log(`Loaded command '${evtName}'`);
      client.on(evtName, evt.bind(null, client));
  });
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


client.login(config.token);