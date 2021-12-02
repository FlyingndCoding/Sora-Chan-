
const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "cal",
  description:
    "Calculates something",
  execute({ message, args }) {
    let method = args[0];
    let firstNumber = Number(args[1])
    let secondNumber = Number(args[2])
    const operations = ['add', 'subtract', 'multiply', 'divide'];

    if(!method) return message.reply('please state an operation');

    if(!operations.includes(method)) return message.reply('when choosing an operation, please select add, subtract, multiply or divide')

    if(!args[1]) return message.reply('please state two numbers to put into the calucation');

    if(!args[2]) return message.reply('please state two numbers to put into the calucation');

    if(isNaN(firstNumber)) return message.reply('the first number you stated is not a number.');

        if(isNaN(secondNumber)) return message.reply('the second number you stated is not a number.');

        if(method === 'add') {
          let doMath = firstNumber + secondNumber
          message.channel.send(`${firstNumber} + ${secondNumber} = ${doMath}`);
        }
        if(method === 'subtract') {
          let doMath = firstNumber - secondNumber
          message.channel.send(`${firstNumber} - ${secondNumber} = ${doMath}`);
        }
        if(method === 'multiply') {
          let doMath = firstNumber * secondNumber
          message.channel.send(`${firstNumber} * ${secondNumber} = ${doMath}`);
        }
        if(method === 'divide') {
          let doMath = firstNumber / secondNumber
          message.channel.send(`${firstNumber} / ${secondNumber} = ${doMath}`);
        }
  },
};
