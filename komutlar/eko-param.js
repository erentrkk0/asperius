const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const banka = await db.fetch(`bank_${kllanç.id}`)
  const bankaismi2 = await db.fetch(`bankismi_${kllanç.id}`)

const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
💵 Paranız: ${bakiye}

🏦 Banka İsmİ: ${bankaismi2}
🏦 Bankadaki Para: ${banka}

Eşyalarınızı görmek için: !çantam
`)
.setFooter("Eko BABA", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bakiyem'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'param',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}