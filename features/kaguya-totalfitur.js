/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let fs = require ('fs')
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(features).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.features).filter(
    (v) => v.help && v.tags
  ).length;
let hasil = fitur.length
let txt = `*[ KAGUYA  -  FEATURE ]*\n`
 txt += `*• Total features* : ${hasil}\n*• Total Folder:* ${totalf}`
   conn.reply(m.chat, txt, fkontak, adReply)
}  
handler.help = ['totalfitur'].map(a => a + ' *[total features view]*')
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler