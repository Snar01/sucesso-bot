const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = async (client, message, args) => {

        if (!args[0]) return message.channel.send('Você não especificou um tempo válido! `2h` | `2s`').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : `no reason
        
        **Disabled**
        Para deliga digite ***s!modolento 0s**`;

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('O `Modo Lento` do canal já está desligado').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Modo Lento Disabled')
                .setColor("#00FFFF")
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('não é um horário válido, por favor tente novamente!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('O limite do modo lento é muito alto, digite qualquer coisa menor que 6 horas.').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Modo Lento já está definido para ${args[0]}`);

        embed.setTitle('Modo Lento Enabled')
            .addField('Modo Lento: ', args[0])
            .addField('Reason: ', reason)
            .setColor('RANDON');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

};

exports.help = {
    name: "luckmodolento"
}