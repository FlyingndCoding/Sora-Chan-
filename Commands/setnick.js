const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'setnick',
  minArgs: 1,
    expectedArgs: "<Target user's @>",
  description: 'Sets a nickname',
    permissions: ['MANAGE_NICKNAMES'],
      async run({ message, args }) {
        const target = message.mentions.members.first()
                        target.setNickname(args.splice(1).join(" "));
        message.channel.send(`Successfully set their nickname.`)
  }
}