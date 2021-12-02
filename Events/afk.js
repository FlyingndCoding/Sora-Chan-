const HKUtilities = require('hkutilities')
module.exports = (bot) => {
  bot.on("message", async message => {
   if(HKUtilities.filter(message))return
   if(message.mentions.members.size > 0) {
     message.mentions.members.forEach(m => {
       if(m.displayName.includes("AFK")){
         return HKUtilities.quickEmbed(message.channel, `${m.user.tag} is currently AFK!`)
       }
     })
   }
   if(message.member.displayName.includes("AFK")){
     try{
       let nickname = message.member.displayName.split(" ").slice(1).join(" ")
       await message.member.setNickname(nickname)
       HKUtilities.successEmbed(message.channel, `Welcome back ${message.author}! I removed your AFK!`)
     }catch(error){
       HKUtilities.errorEmbed(message.channel, "There were some issues removing your afk " + message.author)

     }
   }
  })
}