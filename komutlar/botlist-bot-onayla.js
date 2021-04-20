const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
        let yetkili = "830436555508154398"
        let onayred = "830203187310624778"
        let botlistlog = "830203174286655528"
        let devrole = "830726538659364884"
        let botrole = "830201847993466940"

        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL())

        if (!message.member.roles.cache.has(yetkili)) return message.channel.send(embed.setDescription("Üzgünüm Bu Komutu Kullanabilmek Gerekli İzin Sende Bulunmuyor"))
        if (message.channel.id !== onayred) return message.channel.send(embed.setDescription(`Bu Komutu Sadece <#${onayred}> Kanalında Kullanabilirsin!`));
        let botID = args[0];
        if (!botID || isNaN(botID)) return message.channel.send(embed.setDescription("Onaylamak İstediğiniz Botun ID sini Belirtiniz."));

        let discordBot = null;
        try {
            discordBot = await client.users.fetch(botID);
        } catch {
            return message.channel.send(embed.setDescription("Discord Apide Böyle Bir Bot Bulamadım."));
        }

        let bot = db.get(`serverData.${message.guild.id}.botsData.${botID}`);
        if (!bot) return message.channel.send(embed.setDescription(`**${discordBot.username}** Adlı Bot Sisteme Daha Önceden Eklenmemiş.`));


        if (bot.status == "Onaylı") {
            if (!message.guild.members.cache.get(botID)) {
                return message.channel.send(embed.setDescription(`**${discordBot.username}** Adlı Bot Onaylanmış ama Sunucuda Mevcut Değil!`))
            }
            return message.channel.send(embed.setDescription(`**${discordBot.username}** Adlı Bot Zaten Onaylanmış Durumda!`))
        }
        let memberData = await client.users.fetch(bot.owner)

        if (!message.guild.members.cache.get(bot.owner)) return message.channel.send(embed.setDescription(`**${memberData.username}** Adlı Kullanıcı Sunucudan Çıktığından Bot Onaylanamaz!`));
        message.guild.members.cache.get(bot.owner).roles.add(devrole)
        message.guild.members.cache.get(botID).roles.add(botrole)
        if (bot.status == "Beklemede") db.subtract(`serverData.${message.guild.id}.waitSize`, 1)
        if (bot.status == "Reddedildi") db.subtract(`serverData.${message.guild.id}.redSize`, 1)
        db.add(`serverData.${message.guild.id}.succSize`, 1);
        db.set(`serverData.${message.guild.id}.botsData.${botID}.status`, "Onaylı")
        message.react("✅")
        message.guild.channels.cache.get(botlistlog).send(
            embed.setDescription(`${memberData} (**${memberData.tag}**) Adlı Kişinin \`${discordBot.tag}\`(**${discordBot.id}**) Adlı Botu Onaylandı!`)
        )
    }



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["botonayla"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "bot-onayla",
usage: ""
}