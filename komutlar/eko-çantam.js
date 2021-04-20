const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
if(!args[0]) return message.reply(`Bir mesaj içeriği belirtiniz örnek \n  a?çantam genel/zindan/odun/maden`)
  
if(args[0] === "genel") {
    let btcdeger = 4532
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)
  const demirkazma = db.get(`demirkazma_${kllanç.id}`)
  const elmaskazma = db.get(`elmaskazma_${kllanç.id}`)
  const taşkazma = db.get(`taşkazma_${kllanç.id}`)
  const tahtakazma = db.get(`tahtakazma_${kllanç.id}`)
  const elmasbalta = db.get(`elmasbalta_${message.author.id}`)
const demirbalta = db.get(`demirbalta_${message.author.id}`)
const taşbalta = db.get(`taşbalta_${message.author.id}`)
  const elmaskılıç = db.get(`elmaskılıç_${message.author.id}`)
  const demirkılıç = db.get(`demirkılıç_${message.author.id}`)
  const taşkılıç = db.get(`taşkılıç_${message.author.id}`)
  
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
🔫 Silahlarınız: ${silah ? silah : 'Yok.'}

🎣 Oltalarınız: ${olta ? olta : 'Yok.'}

📱 Telefonlarınız: ${telefon ? telefon : 'Yok.'}

Bitcoinleriniz: ${btc ? btc : 'Yok.'} \n --> Bitcoin Değeri: ${btcdeger}

Zindan

⚔️ Elmas Kılıçlarınız: ${elmaskılıç ? elmaskılıç : 'Yok.'}

⚔️ Demir Kılıçlarınız: ${demirkılıç ? demirkılıç : 'Yok.'}

⚔️ Taş Kılıçlarınız: ${taşkılıç ? taşkılıç : 'Yok.'}

Orman

🪓 Elmas baltalarınız: ${elmasbalta ? elmasbalta : 'Yok.'}

🪓 Demir baltalarınız: ${demirbalta ? demirbalta : 'Yok.'}

🪓 Taş baltalarınız: ${taşbalta ? taşbalta : 'Yok.'}

Maden

<:diakazma:829792473403490325> Elmas kazmalarınız: ${elmaskazma ? elmaskazma : 'Yok.'}

⛏️ Demir kazmalarınız: ${demirkazma ? demirkazma : 'Yok.'}

⛏️ Taş kazmalarınız: ${taşkazma ? taşkazma : 'Yok.'}
`)
.setFooter("Asperius", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
if(args[0] === "maden") {
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const elmas = db.get(`elmas_${kllanç.id}`)
  const altın = db.get(`altın_${kllanç.id}`)
  const demir = db.get(`demir_${kllanç.id}`)
  const zümrüt = db.get(`zümrüt_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
<:diamond:810747033266815036> Elmaslarınız: ${elmas ? elmas : 'Yok.'}

<:gold:810747033228148776> Altınlarınız: ${altın ? altın : 'Yok.'}

<:zumrut:829792473597083648> Zümrütleriniz: ${zümrüt ? zümrüt : 'Yok.'}

<:iron:810747033307709470> Demirleriniz: ${demir ? demir : 'Yok.'}

<:tas:829792928713015387> Taşlarınız: ${taş ? taş : 'Yok.'}
`)
.setFooter("Asperius", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
if(args[0] === "odun") {
    const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const meşe = db.get(`meseodunu_${kllanç.id}`)
  const huş = db.get(`husodunu_${kllanç.id}`)
  const koyumeşe = db.get(`koyumeseodunu_${kllanç.id}`)
  const ladin = db.get(`ladinodunu_${kllanç.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Meşe odunlarınız: ${meşe ? meşe : 'Yok.'}

Huş odunlarınız: ${huş ? huş : 'Yok.'}

Koyu meşe odunlarınız: ${koyumeşe ? koyumeşe : 'Yok.'}

Ladin odunlarınız: ${ladin ? ladin : 'Yok.'}

`)
.setFooter("Asperius", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
}
if(args[0] === "zindan") {
      const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const zombiet = db.get(`zombiet_${message.author.id}`)
  const örümcekgöz = db.get(`örümcekgöz_${message.author.id}`)
  const ok = db.get(`ok_${message.author.id}`)
  const yay = db.get(`yay_${message.author.id}`)
  const ip = db.get(`ip_${message.author.id}`)
  const barut = db.get(`barut_${message.author.id}`)
  const enderman = db.get(`endergöz_${message.author.id}`)
const param = new Discord.MessageEmbed()
.setAuthor("PARAN", client.user.avatarURL())
.setDescription(`
Zombi etleriniz: ${zombiet ? zombiet : 'Yok.'}

Örümcek Gözleriniz: ${örümcekgöz ? örümcekgöz : 'Yok.'}

Oklarınız: ${ok ? ok : 'Yok.'}

Yaylarınız: ${yay ? yay : 'Yok.'}

İpleriniz: ${ip ? ip : 'Yok.'}

Barutlarınız: ${barut ? barut : 'Yok.'}

Enderman gözleriniz: ${enderman ? enderman : 'Yok.'}
`)
.setFooter("Asperius", client.user.avatarURL())
 .setTimestamp()
message.channel.send(param)
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
    name: 'çantam',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}