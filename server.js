const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
bot.queue = new Discord.Collection()

function changing_status() {
    let status = [`Bersama SpongeBob!👋`, `Uang Adalah Milikku 💰`, `Selamat Natal 🎄!`]
    let random = status[Math.floor(Math.random() * status.length)]
    bot.user.setActivity(random , { type: 'STREAMING', url: `https://www.twitch.tv/ezramightyfx`});
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} sudah online !`)
    setInterval(changing_status, 5000);
})


bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return
  
  if (message == `<@${bot.user.id}>` || message == `<@!${bot.user.id}>`) {
     message.channel.send(`👋 Halo! **${message.author.tag}** Gunakan **kr!help** `)
}
  
  let prefix = "kr!"
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

  if (!message.content.startsWith(prefix)) return;
try {
    let commandFile = require(`./cmds/${cmd}.js`);
    commandFile.run(bot, message, args);
} catch (e) {
    console.log(e.message)
} finally {
    console.log(`${message.author.tag} menggunakan perintah ${cmd}`);
}

});

bot.login(process.env.token);
