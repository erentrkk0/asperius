const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
		  
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`bakiye_${message.author.id}`)
let cd = 30000 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha savaşmak için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `a?hesap-oluştur <isim>`")
  const zombiet = db.get(`zombiet_${message.author.id}`)
  const örümcekgöz = db.get(`örümcekgöz_${message.author.id}`)
  const ok = db.get(`ok_${message.author.id}`)
  const yay = db.get(`yay_${message.author.id}`)
  const ip = db.get(`ip_${message.author.id}`)
  const barut = db.get(`barut_${message.author.id}`)
  const enderman = db.get(`endergöz_${message.author.id}`)
  
  const elmaskılıç = db.get(`elmaskılıç_${message.author.id}`)
  const demirkılıç = db.get(`demirkılıç_${message.author.id}`)
  const taşkılıç = db.get(`taşkılıç_${message.author.id}`)
      
     if(!args[0]) return message.channel.send(
    new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Asperius", client.user.avatarURL())
.setDescription(`
Bir mob belirtiniz. Örnek: \n a?zindan zombi/örümcek/iskelet/creeper/enderman
`)
.setFooter("Asperius", client.user.avatarURL())
.setTimestamp()
)
      
if(args[0] === "zombi") {
let odun3 = Math.round(Math.random() * 5)
        db.add(`zombiet_${message.author.id}`, odun3)
message.channel.send(`
Zindandayken zombi kesiyodun ve ${odun3} adet zombi eti kazandın
`)
}
if(args[0] === "örümcek") {
  if(!elmaskılıç) return message.reply(`Hiç elmas kılıcınız bulunmamaktadır! a?market`)
      let göz = Math.round(Math.random() * 2)
        db.add(`örümcekgöz_${message.author.id}`, göz)
   let ip = Math.round(Math.random() * 3)
        db.add(`ip_${message.author.id}`, ip)
  message.channel.send(`
Zindandayken örmücek kesiyordun ve ${göz} adet örümcek gözü kazandın
Zindandayken örümcek kesiyordun ve ${ip} adet ip kazandın
`)
}
if(args[0] === "iskelet") {
let yay = Math.round(Math.random() * 1)
        db.add(`yay_${message.author.id}`, yay)
let ok = Math.round(Math.random() * 4)
        db.add(`ok_${message.author.id}`, ok)  
message.channel.send(`
Zindandayken iskelet kesiyordun ve ${yay} adet yay kazandın
Zindandayken iskelet kesiyordun ve ${ok} adet ok kazandın
`)
}
if(args[0] === "creeper") {
      if(!demirkılıç) return message.reply(`Hiç taş baltanız bulunmamaktadır! a?market`)
                let odun = Math.round(Math.random() * 2)
        db.add(`barut_${message.author.id}`, odun)
  message.channel.send(`
Zindandayken creeper kesiyodun ve ${odun} adet huş odunu kazandın
`)
}
      if(args[0] === "enderman") {
    if(!demirkılıç) return message.reply(`Hiç demir kılıcınız bulunmamaktadır! a?market`)
let odun3 = Math.round(Math.random() * 1)
        db.add(`endergöz_${message.author.id}`, odun3)
message.channel.send(`
Zindandayken enderman kesiyodun ve ${odun3} adet enderman gözü kazandın
`)
}
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mob-kes', 'mob-savaş'],
  permLevel: 0
};

exports.help = {
  name: 'zindan', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};