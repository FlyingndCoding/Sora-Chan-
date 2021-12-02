const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'help',
  description: 'Lists all the commands in the bot [might get updated]',
    execute({ message, args }) {
            const embed = new MessageEmbed().setColor("RANDOM").setDescription(`
            **Help Commands**\n
            \`>fun\`  - **Lists all the fun commands**
            \`>moderation\`  - **Lists all the moderation commands**
            \`>utility\` - **List all the utility commands**
            `); 
    message.channel.send(embed);
    }
}
            