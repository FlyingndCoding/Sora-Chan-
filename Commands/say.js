const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "say",
  description:
    "This is a bot comamnd that makes the bot say what you want to say.",
  async run({ message, args }) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("You can't do that!");
          const embed = new MessageEmbed().setColor("RANDOM").setDescription(args.join(" "));
    message.channel.send(embed)
  },
};