let uploadImage = require('../function/uploadImage.js');

let handler = async (m, { conn, text, participants, usedPrefix , command}) => {
if (!text) throw `*• Example:* ${usedPrefix + command} *[Input message]*`
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0]);
  conn.reply(m.chat, `_Sends a broadcast message to the *${group.length}* group_`, m);
  for (let id of groups) {
    let participantIds = participants.map(a => a.id);
    await conn.reply(id,"*• Kaguya Broadcast:*\n\n" + text, fkontak).catch(_ => _);
  }
  m.reply(`Finish Broadcast ${groups.length} Group`);
}

handler.help = ['bcgc'].map(v => v + ' *[input message]*');
handler.tags = ['owner'];
handler.command = /^(bcgc)$/i;
handler.owner = true;
module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);