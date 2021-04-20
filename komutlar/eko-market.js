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
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)

const market = new Discord.MessageEmbed()
.setAuthor("Market", client.user.avatarURL())
.setDescription(`
Genel
🔫 Silah ile avlanarak para kazan. \n --> Fiyat: 12.500 💵
🎣 Olta ile balık tutarak para kazan. \n --> Fiyat: 5.000 💵
📱 Telefon ile fenomen olarak para kazan. \n --> Fiyat: 10.000 💵

Diğer
₿ Bitcoin al ve bir yatırımcı ol!. \n --> Fiyat: 5.000 💵
🛡️ Kalkan satın al ve seni soymaya çalışanlardan korun!. \n --> Fiyat: 3.500 💵

Maden
⛏️ **Demir kazma satın al, elmas ve altın ile para kazan** \n **-->** Fiyat: 7.500 💵
⛏️ **Elmas kaznma ssatın al, zümrüt ile para kazan** \n **-->** Fiyat: 12.500 💵
⛏️ **Taş kazma satın al, demir ile para kazan** \n **-->** Fiyat: 5000 💵

Zindan
⚔️ **Elmas kılıç satın al, zindanda para kazan** \n **-->** Fiyat: 13.450 💵
⚔️ **Demir kılıç satın al, zindanda para kazan** \n **-->** Fiyat: 8945 💵
⚔️ **Taş kılıç satın al, zindanda para kazan** \n **-->** Fiyat: 5375 💵

Orman
🪓 **Elmas balta satın al, ladin, huş, meşe ve koyu meşe den para kazan** \n **-->** Fiyat: 11.500 💵
🪓 **Demir balta satın al, ladin, huş ve meşe den para kazan** \n **-->** Fiyat: 9750 💵
🪓 **Taş balta satın al, huş ve meşe den para kazan** \n **-->** Fiyat: 6750 💵
`) 
.setFooter("Market", client.user.avatarURL())
.setTimestamp()
message.channel.send(market)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['shop'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'market',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}