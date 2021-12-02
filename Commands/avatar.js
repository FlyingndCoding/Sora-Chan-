
const { MessageEmbed } = require('discord.js')

module.exports={
  name: 'avatar',
  description: 'UwU see your cute avatar',
  async run({ message, args, }) {
        const user = message.mentions.members.first();
    // Send the user's avatar URL
    const embed = new MessageEmbed().setColor("RANDOM").setImage((user.user.displayAvatarURL()));
   message.reply(embed);
  }
}