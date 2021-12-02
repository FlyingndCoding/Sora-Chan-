const {MessageEmbed} = require('discord.js')
module.exports={
  name: '8ball',
  description: 'Tells you answers to your fate!',
  category: 'Fun',
  minArgs: 1,
  maxArgs: -1,
  expectedArgs: '<question>',
  callback: async({message,args,text})=>{
    let responses = [
      "Yes",
      "No",
      "Definitely",
      "Absolutely",
      "Not in a billion years",
      "Don't count on it",
      "As I see it, yes.",
      "It is certain.",
      "My sources say no.",
      "Very doubtful",
      "Without a doubt",
    ]
    const response = responses[Math.floor(Math.random()*(responses.length))]
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`\n${response}`);
    message.channel.send(embed)
  }
}