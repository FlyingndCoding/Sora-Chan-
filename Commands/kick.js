const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "kick",
  async run({ message, args }) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    message.channel.send("You can't do that, idiot");
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "ERROR: Who am i kicking? Next time actually mention someone."
      );
    user.kick();
    target.send(
      "You were kicked. Next time read the rules when you join back."
    );
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`They were kicked, probably`);
    message.channel.send(embed)
  },
};
