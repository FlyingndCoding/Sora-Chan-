const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "die",
  description: "You will die using this command.",
  execute({ message, args }) {
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`:knife: Ending misery, 100% complete, now you're dead`);
    message.channel.send(embed)
  },
};