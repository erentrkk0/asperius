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
  const silah = db.get(`meseodunu_${kllanç.id}`)
  const olta = db.get(`husodunu_${kllanç.id}`)
  const telefon = db.get(`koyumeseodunu_${kllanç.id}`)
  const balta = db.get(`ladinodunu_${kllanç.id}`)

  if(!args[0]) return message.channel.send(
    new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Asperius", client.user.avatarURL())
.setDescription(`
 Satmak istediğiniz eşyanın id sini giriniz. Örnek \n a?odun-sat huş/meşe/koyu-meşe/ladin
`)
.setFooter("Asperius", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "meşe") {
 let sayı = args[1] 
    let fiyatcık = 120*sayı // istediğiniz fiyat
    
if(!silah) return message.reply(`Hiç meşe odununz bulunmamakta!`)
  db.delete(`silah_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "ladin") {
     let sayı = args[1] 
    let fiyatcık2 = 125*sayı // istediğiniz fiyat
    
  if(!balta) return message.reply(`Hiç ladin odununz bulunmamakta!`)  
      db.delete(`balta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "huş") {
     let sayı = args[1] 
    let fiyatcık3 = 120*sayı // istediğiniz fiyat
    
    if(!olta) return message.reply(`Hiç huş odununz bulunmamakta!`)
      db.delete(`telefon_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "koyu-meşe") {
     let sayı = args[1] 
    let fiyatcık4 = 150*sayı // istediğiniz fiyat
    
    if(!telefon) return message.reply(`Hiç koyu meşe odununz bulunmamakta!`)
      db.delete(`olta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["odun-sat"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'odunsat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}