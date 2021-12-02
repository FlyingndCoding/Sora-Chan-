const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async({ client, message, args }) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`uwu you are not strong enough to ban them`)
        }
        if (!args[0]) {
            return message.channel.send(`P-please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} has been banned! `)
        } catch (e) {
            return message.channel.send(`oh no they are maybe ghost cant find them`)
        }

    }
}