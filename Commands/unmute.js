const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "unmute",
  async run({ message, args }) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You can't do that.");
    const user = message.mentions.members.first();
    if (!user) return message.channel.send("ERROR: Please mention someone.");
    const role = message.guild.roles.cache.find(
      (role) => role.name === "Muted"
    );
    if (!role) return message.reply("Invalid muterole");
    user.roles.remove(role).catch((e) => message.reply(e));
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`They were unmuted, probably`);
    message.channel.send(embed)
  },
};