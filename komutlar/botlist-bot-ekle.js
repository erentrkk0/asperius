const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

        let botid = args[0]
        let botprefix = args[1]
        let onaylımı = args[2]
        let basvuru = "830203187310624778"
        let kanal = "830203163373731910"
        let log = "830203174286655528"
        
        if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
        if (message.channel.id == kanal) {
        if (!botid) return message.channel.send(`:x: Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
        if (!botprefix) return message.channel.send(`:x: Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
        if (!onaylımı) return message.channel.send(`:x: Botunun Dbl onaylımı onu yazmalısın`).then(x => x.delete({timeout: 3000}))
        message.delete()

        db.add(`serverData.${message.guild.id}.waitSize`, 1)
        db.set(`serverData.${message.guild.id}.botsData.${botid}.owner`,  message.author.id)
        db.set(`serverData.${message.guild.id}.botsData.${botid}.status`, "Beklemede")
        
          let sira = db.fetch(`serverData.${message.guild.id}.waitSize`) || 0;

        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
        .setTitle("Bot Ekletme")
        .addField("Bot Sahibi", message.author.tag)
        .addField("Bot ID", botid)
        .addField("Bot Prefix", botprefix)
        .addField("Bot Onaylımı?", onaylımı)
        .addField("Sırada", `\`${sira}\` kadar bot var`)
        client.channels.cache.get(basvuru).send(embed)
        client.channels.cache.get(log).send(`${message.author} adlı kullanıcının <@${botid}> adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`)
        message.channel.send(`:white_check_mark: Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}))
        }
      }
    

      exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ["botekle"],
          permLevel: 0,
          katagori: "Ekonomi"
      }
      exports.help = {
      name: "bot-ekle",
      usage: ""
      }