const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "mute",
  minArgs: 2,
  expectedArgs: "<Duration> <Reason>",
  async run({ message, args }) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You can't do that, idiot.");

    const user = message.mentions.members.first();
    if (!user)
      return message.reply(
        "Who am i muting? Actually mention someone next time."
      );

    const role = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!role)
      return message.reply(
        "Invalid muterole, actually set up a muterole so i can mute the person."
      );

    await user.roles.add(role).catch(e => message.reply(e));

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`They were muted, probably`);
    await message.channel.send(embed);

    setTimeout(() => {
      user.roles.remove(role).catch(() => null);
    }, ms(args[1]));
  }
};
