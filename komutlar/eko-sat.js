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

  if(!args[0]) return message.reply(`Satmak istediğiniz eşyanın id sini giriniz. Örnek \n !sat silah/balta/telefon/olta/bitcoin`)
  
if(args[0] === "silah") {
    let fiyatcık = 9000 // istediğiniz fiyat
    
if(!silah) return message.reply(`Hiç silahınız bulunmamakta!`)
  db.delete(`silah_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "balta") {
    let fiyatcık2 = 7000 // istediğiniz fiyat
    
      db.delete(`balta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "telefon") {
    let fiyatcık3 = 7000 // istediğiniz fiyat
    
      db.delete(`telefon_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "olta") {
    let fiyatcık4 = 3000 // istediğiniz fiyat
    
      db.delete(`olta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = 4352 // istediğiniz fiyat
    
      db.delete(`btc_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık5)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık5}`)
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
    name: 'sat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}