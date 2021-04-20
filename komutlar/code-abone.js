const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

    let aboneyetkilisi = "830436556632096779"
    let abonelog = "830725511768309820"
    let abonerol = "830200940816498819"
      let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      let user = message.mentions.users.first()
      if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
      
      if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
      
      await(abonekisi.roles.add(abonerol))
      message.channel.send(`Kullanıcıya abone rolünü başarıyla verdin :white_check_mark: `)
      const embed = new Discord.MessageEmbed()
      .setTitle(`Abone Rolü Verildi!`)
      .addField(`Abone Rolünü Veren Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)
      .addField(`Abone Rolü Verilen Kişi`, `${user}`, true)
      .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
      .setColor(`BLUE`)
      .setFooter(`${client.user.username} Abone Sistemi`)
      message.guild.channels.cache.get(abonelog).send(embed)
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["a", "abonerol", "abone-rol"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "abone",
usage: ""
}