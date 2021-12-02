    const {MessageEmbed} = require('discord.js')

module.exports={
  name:'membercount',
  description:"Shows the membercount of the server!",
  category:"Utility",
  callback:({message,args})=>{
        const embed = new MessageEmbed().setColor("RANDOM").setDescription(`**The Current member count is:** ${message.guild.memberCount}`)
    message.channel.send(embed)
  }
}


