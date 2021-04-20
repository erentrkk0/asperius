const db = require('quick.db')
var ayarlar = require('../ayarlar.json')
const ms = require('parse-ms');
const Discord = require('discord.js')
    
exports.run = async (client, message, args, config) => {
    
  const commonTags = require("common-tags");
  const util = require("util");
   let { MessageEmbed } = require("discord.js");
if(message.author.id !== "477050335685509124" && message.author.id !== "756517457031593995")  return message.channel.send("<:Yldz2Png:806136574328176671> sahip komutu bu");
    function cleanText(text) {
      if (typeof text === "string") {
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      } else {
        return text;
      }
    }

    try {
      let executedIn = process.hrtime();
      let result = eval(args.join(" "));
      result = cleanText(result);
      result = util.inspect(result);
      executedIn = process.hrtime(executedIn);
      executedIn =
        executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);

      let embed = new MessageEmbed();
         embed.setColor("BLUE")
      embed.setDescription(commonTags.stripIndents`
      ${executedIn.toFixed(3)} milisaniyede çalıştırıldı
      \`\`\`js
        ${result}\`\`\`
    `);
      message.channel.send({ embed });
    } catch (error) {
      let embed = new MessageEmbed();
      embed.setDescription(commonTags.stripIndents`
      <a:twitchbit:793899916614828062> Hata Çıktı <a:twitchbit:793899916614828062>
      \`\`\`js
      ${cleanText(error)}\`\`\`
    `);
        embed.setColor("BLUE")
 message.channel.send({ embed });
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["evals"], 
  permLevel: 0 
};

exports.help = {
  name: 'eval'
};