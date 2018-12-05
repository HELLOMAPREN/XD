const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    const moment = require("moment");
 const m = require("moment-duration-format");
    
const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  let embed = new Discord.RichEmbed()
  .addField("Uptime Bot", `⏱${duration}`)//dah
.setColor('RANDOM')
  message.channel.send(embed);
}

module.exports.help = {
    name: "uptime"
}
