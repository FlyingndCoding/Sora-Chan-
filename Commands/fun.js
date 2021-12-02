const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "fun",
  description: "You will die using this command.",
  execute({ message, args }) {
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`
    \`FUN\`
    **8ball
     100
      avatar [question]
       bruh
        coinflip [question]
        dice
         die
          dm
           gayrate
            noobrate
             pog
              rickrollme
               say
               simprate
                snipe
                topic
                userinfo
                youareabadbot
                meme
                hug
                cal [multiply, add, subtract, divide] [NUMBER 1] [NUMBER 2]
                rps
                tictactoe [MEMBER]**
                `);
    message.channel.send(embed)
  },
};