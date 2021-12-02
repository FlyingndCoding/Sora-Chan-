const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'modnick',
  minArgs: 1,
    expectedArgs: "<Target user's @>",
  description: 'Moderates a nickname that is bad!',
    permissions: ['MANAGE_NICKNAMES'],
      async run({ message, args }) {
        const target = message.mentions.members.first()
        target.setNickname(`Moderated Nickname ${Math.floor(Math.random() * 1000000)}`)
        message.channel.send(`Successfully set their nickname.`)
  }
}