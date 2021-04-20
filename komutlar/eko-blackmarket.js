const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
const soygunlog = db.get(`soygunlog_${message.guild.id}`)
if(!soygunlog) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("Asperius", client.user.avatarURL())
    .setDescription(`
    Bir soygun log kanalı ayarlanmamış lütfen ayarlayınız \n -> a?soygun-log ayarla #kanal
    `)
    .setFooter("Asperius", client.user.avatarURL())
    message.channel.send(embed)
} else {
    let cooldown = 20000;

    let dbs = require("coders.db");
    let ms = require("parse-ms");

    let weekly = await dbs.get(`blackmarket_${message.author.id}`);

    if (weekly !== null && cooldown - (Date.now() - weekly) > 0) {
      let time = ms(cooldown - (Date.now() - weekly));

      message.reply(
        `Taksidi yeni bitti **${time.seconds} saniye** beklemelisin`
      );
    } else {
     let dbs = require("coders.db")
 var polisler = await dbs.has(`soygun_${message.author.id}`)
  
  if(polisler === true) return message.reply(`Polisler \`Black marketi\` denetliyor burdan uzaklaşman lazım. \n**Not: polisler gidince black markete girebilirsin**`)


      let para = (await db.fetch(`bakiye_${message.author.id}`)) || 0;

      let eşyalar = ["pistol", "ak-47", "uzi", "bıçak","m468"];
      if (!eşyalar.includes(args[0]))
        return message.channel.send(
          `Black Markette Olan Eşyalar: \`${eşyalar}\``
        );

      if (args[0] === "bıçak") {
        if (para < 2500) {
          message.reply(
            "`Bıçak` almak için 2500₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 2500) {
          message.reply(
            `Black Marketten **1** adet \`Bıçak\` aldın. Şuanki paran: ${para -
              2500} `
          );
          await db.add(`${message.author.id}.bıçak_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para -2500);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Bıçak\` satın aldı. Geriye **${para - 2500}**TL'si kaldı.`)
        }
      }

      if (args[0] === "pistol") {
        if (para < 3000) {
          message.reply(
            "`Pistol` almak için 3000₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 3000) {
          message.reply(
            `Black marketten **1** adet \`Pistol\` aldın. Şuanki paran: ${para -
              3000} `
          );
          await db.add(`${message.author.id}.pistol_adet`, 1);
        await db.set(`bakiye_${message.author.id}`, para - 3000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
            client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Pistol\` satın aldı. Geriye **${para - 3000}**TL'si kaldı.`)
        }
      }

      if (args[0] === "uzi") {
        if (para < 4000) {
          message.reply(
            "`Uzi` almak için 4000₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 4000) {
          message.reply(
            `Black marketten **1** adet \`Uzi\` aldın. Şuanki paran: ${para -
              4000} `
          );
         await db.add(`${message.author.id}.uzi_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para - 4000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Uzi\` satın aldı. Geriye **${para - 4000}**TL'si kaldı.`)
        }
      }

      if (args[0] === "ak-47") {
        if (para < 4500) {
          message.reply(
            "`AK-47` almak için 4500₺ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 4500) {
          message.reply(
            `Black Marketten **1** adet \`AK-47\` aldın. Şuanki paran: ${para -
              4500} `
          );
          await db.add(`${message.author.id}.ak47_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para - 4500);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Ak-47\` satın aldı. Geriye **${para - 4500}**TL'si kaldı.`)
        }
      }
      
      if(args[0] === "m468"){
        if(para < 5000){
message.reply("`M-468` almak için 5000₺ ye ihtiyacın var. Senin paran: **" +para + "**")
        }
        if(para > 5000){
          message.reply(`Black Marketten **1** adet \`M-468\` aldın. Şuanki paran: ${para - 5000}`)
          await db.add(`${message.author.id}.m468_adet`, 1)
          await db.set(`bakiye_${message.author.id}`, para - 5000)
         dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`M-468\` satın aldı. Geriye **${para - 5000}**TL'si kaldı.`)
        }
      }
      
      
    }
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'blackmarket',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}