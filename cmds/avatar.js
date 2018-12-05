const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    
 
  let user = message.mentions.users.first() || message.author;//Cannot read property 'users' of undefined

  let embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)//dah
.setColor('RANDOM')
  .setFooter(`⏱ ${Date.now() - message.createdTimestamp}ms`)
  .setImage(user.displayAvatarURL);
  message.channel.send(embed);
}

module.exports.help = {
    name: "avatar"
}
