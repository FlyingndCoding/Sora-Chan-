const { MessageEmbed } = require('discord.js')

module.exports={
  name: 'welcome',
  description: 'welcome',
  async run({ message, args }) {
    const embed = new MessageEmbed()
      .setColor('#0099ff')
	    .setDescription("```Welcome!```\n**Be sure to:**\n > ➥ Read the <#803217568395427861>\n > ➥ Get some <#803217584937238559>\n > ➥ Connect with other people in <#803217605170429962>\n > ➥ And most importantly, have fun!")
    message.channel.send(embed);
  }
}
