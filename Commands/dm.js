const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'dm',
  minArgs: 2,
    expectedArgs: "<Target user's @>",
  description: 'Dms someone of your choice!',
    permissions: ['ADMINISTRATOR'],
      async run({ message, args }) {
    const target = message.mentions.users.first();
    const dmEmbed = new MessageEmbed().setColor("RANDOM").setDescription(args.splice(1).join(" "));
    
    target.send(dmEmbed);

    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`Successfully dmed them!`);
    message.channel.send(embed)
    try {
    }catch(err){
    message.channel.send(err)
    console.log(err)
  }
  }
}