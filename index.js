//dsc.gg/plokysupport
//hide
const { Client, Collection } = require('discord.js');
const Discord = require('discord.js');
const PREFIX = "<" //you can change the prefix whatever you want 
const TOKEN = "token" //here is your token bot 




const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


const fs = require("fs");


const db = require('quick.db');


//========================================
bot.commands = new Collection();
bot.aliases = new Collection();
//========================================



bot.on('message', async message => {

    try {
        if (message.mentions.has(bot.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
          message.channel.send(`\nIm A Register Bot Type **${PREFIX}register** To Register`);
          }
          
    } catch {
        return;
    };

});




//pls dont sell it
require("http").createServer((_, res) => res.end("Uptime")).listen(8080)


bot.on('ready', () => {
    
console.log(`Logged In As ${bot.user.tag}`)
});



bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("You Cant Register At Here ")
               const shifter  = args.shift()
            if(!args.length) return message.channel.send("Please Give A Name To Set")
                const nick = "" + args.join(" ")
            if(nick.length > 32) return message.channel.send("Your Nickname Is Too Long Please Make It Shorter")
            if (message.channel.id != 'the channel id') return message.reply('**\nYou Cant Use This Command Right Here**');


            try {
                    message.member.roles.add("ID ROLE") //Role That You Want To Set
                    message.member.setNickname(nick)
                    return message.reply(`**\nAccept You Have Been Verified At ${message.guild.name}**`);
                } catch(e) {
                    return message.channel.send("Something Wrong When Execute The Command.")
                            }
            break;
    }
})





bot.login(TOKEN);
