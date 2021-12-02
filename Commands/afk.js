const HKUtilities = require('hkutilities')
module.exports = {
  name: 'afk',
  clientPerms: ["MANAGE_NICKNAMES"],
  callback: async({ bot, message, args }) => {
    if(!message.member.displayName.includes("AFK")){
      try{
        let nickname = `[AFK] ${message.member.displayName}`
        await message.member.setNickname(nickname)
       HKUtilities.successEmbed(message.channel, "You are now AFK! uwu")
      }catch(error) {
        HKUtilities.errorEmbed(message.channel, "I cannot change your nickname")
      }
    } else {
      try{
        let nickname = message.member.displayName.split(" ").slice(1).join(" ")
        await message.member.setNickname(nickname)
        HKUtilities.successEmbed(message.channel, "You are no longer AFK!")
              }catch(error){
               HKUtilities.errorEmbed(message.channel, "I cannot change your nickname!")
              }
    }
  }
}