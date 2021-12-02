const {MessageEmbed} = require("discord.js")
module.exports = {
  name: 'suggest',
  aliases: ['suggest', 'suggestion'],
  minArgs: 1,
  expectedArgs: "<Suggestion>",
  suggestion: 'Creates a suggestion to what you think we should add to the server/bot and the Administrators shall review it!',
  async execute({ message, args }) {
    const channel = message.guild.channels.cache.find(c => c.name === '⚖丨suggest-vote');
    if (!channel) return message.channel.send('Suggestions channel does not exist! Yet..');
    
    let messageArgs = args.join(" ");

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(messageArgs);

    const msg = await channel.send(embed)
    msg.react('👍');
    msg.react('👎');

    message.reply("Suggestion sent!")
  }
}
