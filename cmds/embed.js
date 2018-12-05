const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    
 
  

  let embed = new Discord.RichEmbed()
  .setDescription(args.join(" "))
.setColor('RANDOM')
  message.channel.send(embed);
}
//Bot Storage Indonesia
module.exports.help = {
    name: "embed"
}
