const {MessageEmbed} = require('discord.js')
module.exports={
  name: 'dice',
  description: 'Rolls a dice!',
  category: 'Fun',
  maxArgs: -1,
  callback: async({message,args,text})=>{
    let responses = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6", 
    ]
        const response = responses[Math.floor(Math.random()*(responses.length))]
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`You roll a dice and got ${response}`);
    message.channel.send(embed)
  }
}
