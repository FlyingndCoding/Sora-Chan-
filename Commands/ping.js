const { MessageEmbed } = require('discord.js')
module.exports = {
  name:'ping',
  description:"Replies with the bot's ping!",
  category:"Utility",
  async run({ message,args,text,client }) {
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`Calculating ping`);
    const resultMessage = await message.channel.send(embed)
    const ping = resultMessage.createdTimestamp - message.createdTimestamp
    embed.setDescription(`Pong!\n**Bot Latency**: \`${ping}\`, **API Latency**: \`${client.ws.ping}\`.`)
    resultMessage.edit(embed)
    }
  }
