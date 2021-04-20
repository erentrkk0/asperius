const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
		  
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`bakiye_${message.author.id}`)
let cd = 15000 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha odun kesmek için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `a?hesap-oluştur <isim>`")
const elmasbalta = db.get(`elmasbalta_${message.author.id}`)
const demirbalta = db.get(`demirbalta_${message.author.id}`)
const taşbalta = db.get(`taşbalta_${message.author.id}`)
      
    if(!args[0]) return message.reply(`Bir maden belirtiniz. Örnek: a?orman ladin/koyu-meşe/meşe/huş`)
if(args[0] === "ladin") {
    if(!elmasbalta) return message.reply(`Hiç elmas kazmanız bulunmamaktadır! a?market`)
let odun3 = Math.round(Math.random() * 8)
        db.add(`ladinodunu_${message.author.id}`, odun3)
message.channel.send(`
Ormandayken ladin odunu kırıyodun ve ${odun3} adet ladin odunu kazandın
`)
}
if(args[0] === "koyu-meşe") {
  if(!demirbalta) return message.reply(`Hiç demir kazmanız bulunmamaktadır! a?market`)
      let odun2 = Math.round(Math.random() * 5)
        db.add(`koyumeseodunu_${message.author.id}`, odun2)
  message.channel.send(`
Ormandayken koyu meşe odunu kırıyodun ve ${odun2} adet koyu meşe odunu kazandın
`)
}
if(args[0] === "meşe") {
let odun4 = Math.round(Math.random() * 20)
        db.add(`meseodunu_${message.author.id}`, odun4)
message.channel.send(`
Ormandayken meşe odunu kırıyodun ve ${odun4} adet meşe odunu kazandın
`)
}
if(args[0] === "huş") {
      if(!taşbalta) return message.reply(`Hiç taş baltanız bulunmamaktadır! a?market`)
                let odun = Math.round(Math.random() * 15)
        db.add(`husodunu_${message.author.id}`, odun)
  message.channel.send(`
Ormandayken huş kırıyodun ve ${odun} adet huş odunu kazandın
`)
}
if(args[0] === "taş") {
  let maden5 = Math.round(Math.random() * 50)
        db.add(`taş_${message.author.id}`, maden5)
     message.channel.send(`
Madendeyken Taş kazıyodun ve ${maden5} adet taş kazandın
`)
}  
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ağaç-kes', 'ağaçkes'],
  permLevel: 0
};

exports.help = {
  name: 'orman', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};