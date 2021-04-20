const codework = require('discord.js')

exports.run = (client, message,args) => {
 const codework1 = new codework.MessageEmbed()
 .setAuthor("Asperius", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("**Asperius**") //BURAYA BOTUNUZUN ADINI YAZIN 
 .setURL(`https://discord.com/oauth2/authorize?client_id=781586402742894593&scope=bot&permissions=8`) //BURAYA BOTUNUZUN DAVET LİNKİNİ KOYUN
  .setDescription(`                 
 **a?yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`a?çantam\`
Botu davet etmek için: \`a?davet\`
`)
                  
  .addField("Para komutları (10)", `
Kolay para kazanma komutları;
\`çalış\` \`çal\` \`günlük-para\` \`market\` \`satın-al\` \`sat\` \`bitcoin\` \`slots\` \`soygun\` \`blackmarket\`
`)

 
  .addField("Minecraft para kazanma (6)", `
Kasarak para kazanma komutları;
\`zindan\` \`maden\` \`orman\` \`zindan-sat\` \`odun-sat\` \`maden-sat\` 
`)
 
   .addField("Genel komutlar (10)", `
Kasarak para kazanma komutları;
\`davet\` \`çantam\` \`param\` \`cüzdan\` \`transfer\` \`istatistik\` \`hesap-oluştur\` \`bilgiler\` \`kredi\` 
`)
 
  .setFooter(`Asperius © | Tüm hakları saklıdır.`)
  
 
 message.channel.send(codework1)
  
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "CodeWork V12 MC-AT yardım ", 
  usage: "yardım" 
}

