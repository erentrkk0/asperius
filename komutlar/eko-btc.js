const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  let btcdeger = 4532
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  const btc = await db.fetch(`btc_${kllanç.id}`)

const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Bitcoin Değeri: ${btcdeger}

Bitcoinleriniz: ${btc ? btc : 'Yok.'}

Eşyalarınızı görmek için: !çantam
`)
.setFooter("Eko BABA", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['btc-değer', 'btc'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'bitcoin',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}