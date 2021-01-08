module.exports = async (client, message, args) => {
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `Você não mencionou um usuário ou forneceu uma identificação inválida`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("Você não especificou sua mensagem");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("Esse usuário não pôde ser DMed!"))
        .then(() => message.channel.send(`Enviou uma mensagem para ${user.user.tag}`));
        message.delete().catch(O_o => {});
};

exports.help = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
}