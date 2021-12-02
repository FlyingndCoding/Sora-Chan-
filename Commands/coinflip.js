const { MessageEmbed } = require("discord.js")
module.exports={
  name: 'coinflip',
  description: 'This is a command for heads or tails!',
  category: 'Fun',
  callback: async({message,args,text})=>{
    let responses = [
       'Heads',
       'Tails',
    ]
    const response = responses[Math.floor(Math.random()*(responses.length))]
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`\n${response}`);
    message.channel.send(embed)
  }
}