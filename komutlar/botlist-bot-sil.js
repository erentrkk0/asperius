const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

      let yetkili = "830436555508154398"
      let onayred = "830203187310624778"
      let botlistlog = "830203174286655528"
      let devrole = "830726538659364884"

        let botID = args[0]

        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL())

        if (!message.member.roles.cache.has(yetkili)) return message.channel.send(embed.setDescription("Üzgünüm Bu Komutu Kullanabilmek Gerekli İzin Sende Bulunmuyor"))
        if (message.channel.id !== onayred) return message.channel.send(embed.setDescription(`Bu Komutu Sadece <#${onayred}> Kanalında Kullanabilirsin!`));

        if (!botID || isNaN(botID)) return message.channel.send(embed.setDescription("Lütfen Profiline Bakmak istediğiniz Botun IDsini Yazınız"));

        let bot = db.get(`serverData.${message.guild.id}.botsData.${botID}`);
        let discordBot = null;
        try {
            discordBot = await client.users.fetch(botID);
        } catch {
            return message.channel.send(embed.setDescription("Discord Apide Böyle Bir Bot Bulamadım."));
        }

        if (!bot) return message.channel.send(embed.setDescription(`Sistemde **${discordBot.username}** İsimli Bot Bulamadım.`))

        if (bot.status == "Onaylı") db.subtract(`serverData.${message.guild.id}.succSize`, 1)
        if (bot.status == "Beklemede") db.subtract(`serverData.${message.guild.id}.waitSize`, 1)
        if (bot.status == "Reddedildi") db.subtract(`serverData.${message.guild.id}.redSize`, 1)

        db.delete(`serverData.${message.guild.id}.botsData.${botID}`);
        message.react("✅")
        return message.channel.send(embed.setDescription(`**${discordBot.username}** isimli Bot Sistemden Silindi.`))
    }

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["botsil"],
      permLevel: 0,
      katagori: "Ekonomi"
  }
  exports.help = {
  name: "bot-sil",
  usage: ""
  }