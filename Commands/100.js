const { MessageEmbed } = require('discord.js')
module.exports={
  name: '100',
  description: 'C-chooses a random number from 1 to 100!',
  category: 'Fun',
  maxArgs: -1,
  callback: async({message,args,text})=>{
    let response = Math.floor(Math.random()*(101)).toString()
           const embed = new MessageEmbed().setColor("RANDOM").setDescription(`Your number is ${response}!`);
    message.channel.send(embed)
  }
} 