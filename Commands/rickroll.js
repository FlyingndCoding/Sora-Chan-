const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "rickrollme",
  description: "This is a rickroll command.",
  execute({ message, args }) {
       const embed = new MessageEmbed().setColor("RANDOM").setDescription(      `Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye Never gonna tell a lie and hurt you.`);
    message.channel.send(embed)
  },
};
