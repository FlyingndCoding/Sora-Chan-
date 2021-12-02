const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "utility",
  description: "You will die using this command.",
  execute({ message, args }) {
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`
    \`UTILITY\`
    **membercount,
     ping, 
     setstatus, 
     suggest
     bans
     bot-info
     server-info
     corona
     poll
     AFK*
     weather
     reminder*
      `);
    message.channel.send(embed)
  },
};