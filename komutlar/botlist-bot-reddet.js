const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
      let yetkili = "830436555508154398"
      let onayred = "830203187310624778"
      let botlistlog = "830203174286655528"
      let devrole = "830726538659364884"

        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL())

        if (!message.member.roles.cache.has(yetkili)) return message.channel.send(embed.setDescription("Üzgünüm Bu Komutu Kullanabilmek Gerekli İzin Sende Bulunmuyor"))
        if (message.channel.id !== onayred) return message.channel.send(embed.setDescription(`Bu Komutu Sadece <#${onayred}> Kanalında Kullanabilirsin!`));
        let botID = args[0];
        let redReason = args.slice(1).join(' ');
        if (!botID || isNaN(botID)) return message.channel.send(embed.setDescription("Reddetmek istediğiniz Botun ID sini Belirtiniz."));
        if (!redReason) return message.channel.send(embed.setDescription("Lütfen Bir Sebeb Belirtiniz."));

        let discordBot = null;
        try {
            discordBot = await client.users.fetch(botID);
        } catch {
            return message.channel.send(embed.setDescription("Discord Apide Böyle Bir Bot Bulamadım."));
        }

        let bot = db.get(`serverData.${message.guild.id}.botsData.${botID}`);
        if (!bot) return message.channel.send(embed.setDescription(`**${discordBot.username}** Adlı Bot Sisteme Daha Önceden Eklenmemiş.`));

        if (bot.status == "Reddedildi") return message.channel.send(embed.setDescription(`**${discordBot.username}** Adlı Bot Zaten Reddedilmiş Durumda!`))
        if (bot.status == "Beklemede") db.subtract(`serverData.${message.guild.id}.waitSize`, 1)
        if (bot.status == "Onaylı") db.subtract(`serverData.${message.guild.id}.succSize`, 1)
        let memberData = await client.users.fetch(bot.owner)

        if (message.guild.members.cache.get(bot.owner)) message.guild.members.cache.get(bot.owner).roles.remove(devrole)

        db.add(`serverData.${message.guild.id}.redSize`, 1);
        db.set(`serverData.${message.guild.id}.botsData.${botID}.status`, "Reddedildi")
        db.set(`serverData.${message.guild.id}.botsData.${botID}.redReason`, redReason)
        message.guild.channels.cache.get(botlistlog).send(
            embed.setDescription(`${memberData} (**${memberData.tag}**) Adlı Kişinin \`${discordBot.tag}\`(**${discordBot.id}**) Adlı Botu \`${redReason}\` Sebebi ile Reddedildi!`)

        )
        message.react("✅")
    }


  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["botreddet"],
      permLevel: 0,
      katagori: "Ekonomi"
  }
  exports.help = {
  name: "bot-reddet",
  usage: ""
  }