const Discord = require ('discord.js')
module.exports = {
  async run({ message: msg, args, client }) {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return;
    if(!args[0]) return msg.reply('You need to specify a time for me to set this channels slowmode to!');
    if(isNaN(args[0])) return msg.reply('You need to specify a valid number for me to set the slowmode to!');
    const time = args[0]
    if(args[0] < 0) return msg.reply('You must specify a positive number for me to set the slowmode to!');
    if(args[0] > 21600) return msg.reply('You need to specify a time that is less than 6 hours! (21,600 seconds).');
    msg.channel.setRateLimitPerUser(time)

    const verify = msg.guild.emojis.cache.find(emoji => emoji.name === 'confirm');

    const embed = new Discord.MessageEmbed()
    .setColor(0x05ff4c)
    .setTitle(`✅ I have successfully set the slowmode to \`${time}\` seconds!`);
    msg.channel.send(embed)
  }
}