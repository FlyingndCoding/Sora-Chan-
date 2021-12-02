const { MessageEmbed } = require('discord.js')
const warnSchema = require("../Schemas/warnSchema");

module.exports = {
  minArgs: 2,
  expectedArgs: "<Target user's @ <reason>",
  permissions: ["MANAGE_MESSAGES"],
  async run({ message, args }) {
    const target = message.mentions.users.first();
    
    if (!target) return message.reply("Who am i warning? Please specify someone to warn cause I don't get paid enough to warn them.");
    

    const guildId = message.guild.id;
    const userId = target.id;
    const reason = args.splice(1).join(" ");

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    };
    
    const result = await warnSchema.updateOne(
      {
        guildId,
        userId,
      },
      {
        guildId,
        userId,
        $push: {
          warnings: warning,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );
    
    const dmEmbed = new MessageEmbed().setColor("RANDOM").setDescription("**YOU GOT WARNED! Reason:**" + ' ' + reason);
    
    target.send(dmEmbed);

    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`They were warned for` + ' ' + reason);
    message.channel.send(embed)
  }
}; 