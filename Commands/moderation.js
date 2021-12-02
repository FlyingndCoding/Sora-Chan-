const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "moderation",
  description: "You will die using this command.",
  execute({ message, args }) {
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`
    \`MODERATION\`
    **ban 
    clear
     kick
      mute
       unmute
        warn
         warnings 
         setnick
         modnick
         sm (time)
         lock
         unban**
         `);
    message.channel.send(embed)
  },
}; 