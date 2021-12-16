const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "rickrollme",
  description: "This is a rickroll command.",
  execute({ message, args }) {
       const embed = new MessageEmbed().setColor("RANDOM").setDescription(      `https://c.tenor.com/yheo1GGu3FwAAAAS/rick-roll-rick-ashley.gif`);
    message.channel.send(embed)
  },
};
