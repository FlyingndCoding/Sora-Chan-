const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "bruh",
  description: "This is a bruh command!",
  execute({ message, args }) {
            const embed = new MessageEmbed().setColor("RANDOM").setDescription(`moment`);
    message.channel.send(embed)
  }
}