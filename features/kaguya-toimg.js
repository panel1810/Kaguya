let { webp2png } = require('../function/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `*• Example:* ${usedPrefix + command} *[reply sticker]*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `*• Example:* ${usedPrefix + command} *[reply sticker]*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', wm, m, false, {
    thumbnail: Buffer.alloc(0)
  })
}
handler.help = ['toimg'].map(a => a + ' *[reply sticker]*')
handler.tags = ['sticker']
handler.command = ['toimg']
module.exports = handler