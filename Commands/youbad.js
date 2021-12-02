const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "youareabadbot",
  description: "This is a command to make the bot sad.",
  execute({ message, args }) {
       const embed = new MessageEmbed().setColor("RANDOM").setDescription(      `So are you!`);
    message.channel.send(embed)
  },
};
