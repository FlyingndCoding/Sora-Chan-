const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "pog",
  description: "This is a pogchamp command!",
  execute({ message, args }) {
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`champ`);
    message.channel.send(embed)
  },
};