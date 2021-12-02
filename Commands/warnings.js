const warnSchema = require("../Schemas/warnSchema");
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ["warnings"],
  minArgs: 1,
  expectedArgs: "<Target user's @",
  permissions: ["MANAGE_MESSAGES"],
  async run({ message, args }) {
    const target = message.mentions.users.first();
    if (!target) {
      message.reply("Please mention someone to list their warnings.");
      return;
    }

    const guildId = message.guild.id;
    const userId = target.id;

    const results = await warnSchema.findOne({
      guildId,
      userId,
    });
    if (!results) return message.reply("That user doesn't have any warnings.");
    let reply = `Previous warnings for ${target}:\n\n`;

    for (const warning of results.warnings) {
      const { author, timestamp, reason } = warning;
      reply += `- **Warning** by ${author} for **${reason}**\n`;
    }
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(reply)
    message.channel.send(embed);
  },
};