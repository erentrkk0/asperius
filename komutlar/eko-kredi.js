const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    
let para = db.fetch(`bakiye_${message.author.id}`)
let kredi = db.fetch(`kredi_${message.author.id}`)  
if(!args[0]) {
var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setDescription('**a?kredi** komutu bölümlere ayrılır,Mesela para yatırmak istiyorsanız; \n **a?kredi yatır <tutar>** şeklinde olmalı.Mesela para çekmek istiyorsunuz; \n **a?kredi çek <tutar>** şeklinde olmalı.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)  
return
}
  if(args[0] === "çek") {
  if(!args[1]) {
 var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Anlaşılan Kredi Kartından para çekmek istiyorsun.Çekmek istediğin miktarı belirtmen gerekiyor. \n **a?kredi çek <miktar>** \n şeklinde tekrar yaz lütfen.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)   
return
 }   
 
    

    let eksik = args[1] ? args[1] - kredi : "0"    
 let eksik2 = eksik ? eksik + 5 : "0"
  if(kredi < eksik2) {
  

   var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Bize,**'+args[1]+'** kadar kartından para çekmek istediğini belirttin.Ama senin şu anda Kartında \n **----------------------------------** \n **' + kredi + '**:dollar: var. \n **'+args[1]+ '**:dollar: çekmek için; \n (çekim ücreti dahil) **'+ eksik2 +'** kadar krediye daha ihtiyacın var.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka) 
  return
  }


    let sonuc = args[1] ? args[1] - 5 : "0"
    let toplam = kredi ? kredi - args[1] : "0"
db.set(`kredi_${message.author.id}`, - toplam)
db.add(`bakiye_${message.author.id}`, + sonuc)
  
     var banka = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Gerekli işlemleri başarıyla sisteme kaydettik.Detayları aşağıya bırakıyoruz! yine bekleriz :)')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('**+** Çekilen Para Miktarı:', '**'+args[1]+'**')
.addField('**-** Banka Yatırım Ücreti:', '**5**')
.addField('**-** Yatırım Ücretinden Sonra Çekilen Para:', sonuc)
.addField('**=** Kredi Kartında Kalan Miktar:', '**'+ toplam + '**')
.setTimestamp()
message.channel.send(banka) 
 return 

  }
  
  ////////////////////////////////yatır 
  if(args[0] === "yatır") {
 if(!args[1]){
 var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Anlaşılan para yatırmak istiyorsun.Ama ne kadar yatıracağını belirtmedin. \n **a?kredi yatır <miktar>** \n şeklinde tekrar yaz lütfen.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)   
return
 }   
 if(para < args[1]) {
 let eksik = args[1] ? args[1] - para : "0"
   var banka = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('**Hata! :warning:**')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Bize,**'+args[1]+'** kadar para yatırmak istediğini belirttin.Ama senin şu anda \n **----------------------------------** \n **' + para + '**:dollar: var. \n **'+args[1]+ '**:dollar: yatırmak için; \n **'+ eksik +'** kadar paraya daha ihtiyacın var.')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.setTimestamp()
message.channel.send(banka)    
return
 }
let faiz = args[1] ? args[1] - 5 : "0"
    
    db.add(`kredi_${message.author.id}`, + faiz)
db.add(`bakiye_${message.author.id}`, - args[1])
 let toplam = para ? para + kredi : "0"
   var banka = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('**Başarılı!**')
.setDescription('Merhaba,**'+message.member.user.username + '**, \n Gerekli işlemleri başarıyla sisteme kaydettik.Detayları aşağıya bırakıyoruz! yine bekleriz :)')
.setFooter(client.user.username + ' Keyifli Kullanımlar diler.')
.addField('**+** Yatırılan Para Miktarı:', '**'+args[1]+'**')
.addField('**-** Banka Yatırım Ücreti:', '**5**')
.addField('**=** Toplamda Kredi Kartına Yatırılan Miktar:', '**'+faiz+'**')
.addField('**=** Toplam Hesaptaki Miktar (kredi kartı miktarı + para miktarınız)', '**'+ toplam + '**')
.setTimestamp()
message.channel.send(banka) 
 return
  }
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kredi', 
  description: 'kredi', 
  usage: 'kredi'
};
