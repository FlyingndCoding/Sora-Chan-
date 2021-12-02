const { MessageEmbed } = require('discord.js')
const { snipe } = require('../Events/snipe')

module.exports = {
  name: 'snipe',
  description: 'Snipes the latest deleted message!',
  execute({ message, client }) {
    const msg = client.snipe.get(message.channel.id);
    if (!msg) return message.reply("There aren't any deleted messages to snipe!.")
    
    const embed = new MessageEmbed().setColor("RANDOM").setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true })).setDescription(`${msg.content}`)
    message.channel.send(embed)
  }
}