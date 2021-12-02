const { MessageEmbed } = require("discord.js")
module.exports={
  name: 'topic',
  description: 'Does a random topic',
  category: 'Fun',
  callback: async({message,args,text})=>{
    let responses = [
       'What is your favorite color?',
       'What motivates you?',
       'If you could live anywhere, where would it be?',
       'What is your biggest fear?',
       'What is your favorite family vacation?',
       'What would you change about yourself if you could?',
       'What really makes you angry?',
       'What is your proudest accomplishment?',
       'What is your favorite book to read?',
       'What makes you laugh the most?',
       'What was the last movie you went to? What did you think?',
       'What did you want to be when you were young?',
       'If you could choose to do anything for a day, what would it be?',
       'What is your favorite game or sport to watch and play?',
       'Would you rather ride a bike, ride a horse, or drive a car?',
       'If you could only eat one meal for the rest of your life, what would it be?',
       'Who is your favorite author?',
       'Which would you rather do: wash dishes, mow the lawn, clean the bathroom, or vacuum the house?',
       'Would you rather vacation in Hawaii or Alaska, and why?',
       'Would you rather win the lottery or work at the perfect job? And why?',
       'If you could go back in time, what year would you travel to?',
       'How would your friends describe you?',
       'What are your hobbies?',
       'What are some things that you should not not say during a job interview?',
       'What are some things you should not say at work?',
       'What are some things you should not say at a marriage?',
       'What is the biggest priority in your life right now?',
       'What are things that you should not say at your own wedding?',
       'How did you get your name? Do you know the meaning of your name?',
       'What is your favorite sports team?',
       'Would you rather have to sit all day or stand all day?',
       'What is the best part of your day?',
       'Are you a pessimist or an optimist?',
       'What is the biggest priority in your life right now?',
      ]
    const response = responses[Math.floor(Math.random()*(responses.length))]
    const embed = new MessageEmbed().setColor("RANDOM").setDescription(`\n${response}`);
message.channel.send(embed)
  }
}