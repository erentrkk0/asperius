const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const WestraEmbed = new Discord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`Crypto'yu davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`<a:altin5:801155304205189151> Carnoxis'yi davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=781586402742894593&scope=bot&permissions=8) tıkla!`)
  message.channel.send(WestraEmbed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "davet",
usage: ""
}