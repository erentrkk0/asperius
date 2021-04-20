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
  const elmas = db.get(`elmas_${kllanç.id}`)
  const altın = db.get(`altın_${kllanç.id}`)
  const demir = db.get(`demir_${kllanç.id}`)
  const zümrüt = db.get(`zümrüt_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)

    if(!args[0]) return message.channel.send(
    new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Asperius", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n a?maden-sat elmas/zümrüt/altın/demir/taş
`)
.setFooter("Asperius", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "elmas") {
 let sayı = args[1] 
    let fiyatcık = 250*sayı // istediğiniz fiyat
    
if(!elmas) return message.reply(`Hiç elmasınız bulunmamakta!`)
  db.delete(`elmas_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "zümrüt") {
     let sayı = args[1] 
    let fiyatcık2 = 400*sayı // istediğiniz fiyat
    
  if(!zümrüt) return message.reply(`Hiç zümrütünüz bulunmamakta!`)  
      db.delete(`zümrüt_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "altın") {
     let sayı = args[1] 
    let fiyatcık3 = 50*sayı // istediğiniz fiyat
    
    if(!altın) return message.reply(`Hiç altınınız bulunmamakta!`)
      db.delete(`altın_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "demir") {
     let sayı = args[1] 
    let fiyatcık4 = 30*sayı // istediğiniz fiyat
    
    if(!demir) return message.reply(`Hiç demiriniz bulunmamakta!`)
      db.delete(`demir_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "taş") {
     let sayı = args[1] 
    let fiyatcık4 = 3*sayı // istediğiniz fiyat
    
    if(!taş) return message.reply(`Hiç taşınız bulunmamakta!`)
      db.delete(`taş_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["maden-sat"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'madensat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}