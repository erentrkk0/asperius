const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:twitchbit:793899916614828062> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let kanal = message.mentions.channels.first();  
  if(args[0] === "sıfırla") {
  const sıfırlandı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)  
  .setTitle(`${client.user.username} | Erkek rol sıfırlama komutu.`)
  .setColor(0x36393F)
  .setDescription(`<a:twitchbit:793899916614828062> Sunucu için ayarladığınız erkek rolü başarıyla sıfırlandı!`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Carnoxis`)
  message.channel.send(sıfırlandı)
  db.delete(`soygunlog_${message.guild.id}`)
  return;
  }
 if(args[0] === "ayarla") {
    db.set(`soygunlog_${message.guild.id}`, kanal.id)
    const ayarlandı = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())  
    .setTitle(`${client.user.username} | Erkek rol ayarlama komutu.`)
    .setColor(0x36393F)
    .setDescription(`<a:twitchbit:793899916614828062> Erkek rolü başarıyla ${kanal} olarak ayarlandı!`)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`Carnoxis`)
    message.channel.send(ayarlandı)
 } 
 
  if (!kanal) {
    const ayarlanmadı = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())  
  .setTitle(`${client.user.username} | Erkek rol ayarlama komutu.`)
  .setColor(0x36393F)
  .setDescription(`<a:twitchbit:793899916614828062> Lütfen bir kanal veya sıfırlama belirtiniz. a?soygun-log ayarla #kanal veya sıfırla!`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Carnoxis`)
  message.channel.send(ayarlanmadı)
  }
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["soy-log"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "soygun-log",
usage: ""
}