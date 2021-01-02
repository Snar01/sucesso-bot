const db = require('quick.db');
const warnings = require('./warnings');

exports.run = async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Você não pode usar isso.');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Especifique um usuário, por meio de menção ou ID');

        if(user.bot) return message.channel.send('Você não pode avisar os bots');

        if(user.id === message.author.id) return message.channel.send('Você não pode limpar seus próprios avisos');

        if(warnings === null) return message.channel.send(`**${user.username} não tem avisos**`);


        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send('Success!')
};

exports.help = {
    name: "deletewarns",
    description: "Excluir advertência de um membro",
}